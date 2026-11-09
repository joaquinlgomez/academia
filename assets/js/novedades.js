(() => {
  'use strict';
  const STORAGE_KEY = 'royalStarsClubNewsV1';
  const DATA_URL = 'assets/data/novedades.json';
  // Permite previsualizar la noticia principal al abrir novedades.html directamente con file://.
  const FALLBACK_NEWS = [{
    id: 'duelo-hermanas-lorenzo-2026-11-07',
    title: 'Duelo de hermanas: Lorenzo vs. Lorenzo, uno de los encuentros más especiales de la primera jornada',
    category: 'Competencia',
    date: '2026-11-07',
    summary: 'La primera fecha de la Liga Royal tuvo un enfrentamiento particular en Damas Suma 11: Delfina y Martina Lorenzo se encontraron frente a frente en un partido que combinó competencia, emoción y un vínculo familiar.',
    content: 'Crónica oficial de la primera fecha de la Liga Royal.',
    url: 'noticia-duelo-hermanas-lorenzo.html'
  }];
  const grid = document.getElementById('newsGrid');
  const search = document.getElementById('newsSearch');
  const filters = document.getElementById('newsFilters');
  const dialog = document.getElementById('newsDialog');
  const dialogContent = document.getElementById('dialogContent');
  let newsItems = [];
  let activeFilter = 'Todas';

  const safeText = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));

  const formatDate = (value) => {
    if (!value) return 'Sin fecha';
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('es-AR', {
      day:'numeric', month:'long', year:'numeric'
    }).format(date);
  };

  const normalizeItems = (items) => Array.isArray(items)
    ? items.filter(item => item && typeof item.title === 'string').map(item => ({
        id: String(item.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
        title: String(item.title || '').slice(0, 100),
        category: ['Academia','Competencia','Comunidad','Blog'].includes(item.category) ? item.category : 'Academia',
        date: /^\d{4}-\d{2}-\d{2}$/.test(item.date || '') ? item.date : new Date().toISOString().slice(0,10),
        summary: String(item.summary || '').slice(0,300),
        content: String(item.content || item.summary || ''),
        image: typeof item.image === 'string' && (item.image.startsWith('data:image/') || /^assets\/img\/[\w./-]+$/.test(item.image)) ? item.image : '',
        // Solo se permiten páginas HTML locales del propio sitio.
        url: typeof item.url === 'string' && /^[a-zA-Z0-9_-]+\.html(?:#[a-zA-Z0-9_-]+)?$/.test(item.url) ? item.url : ''
      }))
    : [];

  function render() {
    const term = (search?.value || '').trim().toLocaleLowerCase('es-AR');
    const visible = newsItems.filter(item =>
      (activeFilter === 'Todas' || item.category === activeFilter) &&
      `${item.title} ${item.summary} ${item.content} ${item.category}`.toLocaleLowerCase('es-AR').includes(term)
    );

    if (!visible.length) {
      grid.innerHTML = `<div class="news-empty"><strong>${newsItems.length ? 'No encontramos publicaciones' : 'Todavía no hay noticias publicadas'}</strong><br><span>${newsItems.length ? 'Probá con otro filtro o búsqueda.' : 'Pronto vamos a compartir nuevas noticias y actividades de Royal.'}</span></div>`;
      return;
    }

    grid.innerHTML = visible.slice().sort((a,b) => b.date.localeCompare(a.date)).map(item => `
      <article class="news-card">
        ${item.image ? `<img src="${safeText(item.image)}" alt="Imagen de ${safeText(item.title)}" loading="lazy">` : ''}
        <div class="news-card-body">
          <div class="news-meta"><span>${safeText(item.category)}</span><time datetime="${safeText(item.date)}">${safeText(formatDate(item.date))}</time></div>
          <h3>${safeText(item.title)}</h3><p>${safeText(item.summary)}</p>
          <button type="button" data-open-news="${safeText(item.id)}">Leer noticia <i class="fa-solid fa-arrow-right ms-1"></i></button>
        </div>
      </article>`).join('');
  }

  function openStory(id) {
    const item = newsItems.find(entry => entry.id === id);
    if (!item) return;
    // Las crónicas extensas pueden tener su propia página editorial.
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }
    dialogContent.innerHTML = `<span class="portal-kicker">${safeText(item.category)} · ${safeText(formatDate(item.date))}</span><h2>${safeText(item.title)}</h2>${item.image ? `<img src="${safeText(item.image)}" alt="${safeText(item.title)}">` : ''}<div class="dialog-copy">${safeText(item.content)}</div>`;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');
  }

  async function loadNews() {
    let publishedItems = [];
    try {
      const response = await fetch(DATA_URL, {cache:'no-store'});
      if (!response.ok) throw new Error('No se pudo leer el archivo de novedades.');
      publishedItems = normalizeItems(await response.json());
    } catch {
      // Con file:// algunos navegadores bloquean fetch; mostrar al menos la crónica principal.
      publishedItems = normalizeItems(FALLBACK_NEWS);
    }

    // Conserva publicaciones locales anteriores, pero nunca oculta las del repositorio.
    let localItems = [];
    const local = localStorage.getItem(STORAGE_KEY);
    if (local !== null) {
      try {
        localItems = normalizeItems(JSON.parse(local));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    const merged = new Map(publishedItems.map(item => [item.id, item]));
    localItems.forEach(item => merged.set(item.id, item));
    newsItems = [...merged.values()];
    render();
  }

  filters?.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    activeFilter = button.dataset.filter;
    filters.querySelectorAll('[data-filter]').forEach(node => node.classList.toggle('active', node === button));
    render();
  });
  search?.addEventListener('input', render);
  grid?.addEventListener('click', event => {
    const button = event.target.closest('[data-open-news]');
    if (button) openStory(button.dataset.openNews);
  });
  document.getElementById('closeNewsDialog')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  const year = document.getElementById('currentYear');
  if (year) year.textContent = String(new Date().getFullYear());
  loadNews();
})();

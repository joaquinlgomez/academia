(() => {
  const grid = document.getElementById('galleryGrid');
  const filters = document.getElementById('galleryFilters');
  const dateFilters = document.getElementById('galleryDateFilters');
  if (!grid || !filters || !dateFilters) return;

  const state = { items: [], category: 'Todas', date: 'Todas', imageItems: [], imageIndex: 0, loadError: false };

  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-dialog';
  dialog.id = 'galleryDialog';
  dialog.setAttribute('aria-label', 'Visor ampliado de la galería');
  dialog.innerHTML = `
    <div class="gallery-dialog-inner">
      <button class="gallery-dialog-close" type="button" aria-label="Cerrar visor"><i class="fa-solid fa-xmark"></i></button>
      <button class="gallery-dialog-nav gallery-dialog-prev" type="button" aria-label="Fotografía anterior"><i class="fa-solid fa-chevron-left"></i></button>
      <div class="gallery-dialog-media" id="galleryDialogMedia"></div>
      <button class="gallery-dialog-nav gallery-dialog-next" type="button" aria-label="Fotografía siguiente"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="gallery-dialog-caption" id="galleryDialogCaption"></div>
    </div>`;
  document.body.appendChild(dialog);

  const media = dialog.querySelector('#galleryDialogMedia');
  const caption = dialog.querySelector('#galleryDialogCaption');
  const prevButton = dialog.querySelector('.gallery-dialog-prev');
  const nextButton = dialog.querySelector('.gallery-dialog-next');
  const closeButton = dialog.querySelector('.gallery-dialog-close');

  function escapeHtml(value) {
    const node = document.createElement('div');
    node.textContent = String(value || '');
    return node.innerHTML;
  }

  function getYouTubeId(item) {
    if (item.youtubeId) return item.youtubeId;
    if (!item.url) return '';
    try {
      const url = new URL(item.url);
      if (url.hostname.includes('youtu.be')) return url.pathname.slice(1);
      return url.searchParams.get('v') || '';
    } catch (_) {
      return '';
    }
  }

  function closeDialog() {
    media.replaceChildren();
    if (dialog.open) dialog.close();
  }

  function showImage(index) {
    state.imageIndex = (index + state.imageItems.length) % state.imageItems.length;
    const item = state.imageItems[state.imageIndex];
    const image = document.createElement('img');
    image.src = item.src;
    image.alt = item.alt || item.title || 'Fotografía de Royal Star’s Club';
    media.replaceChildren(image);
    caption.textContent = item.title ? `${item.title} · ${item.category}` : item.category;
  }

  function openImage(item) {
    state.imageItems = state.items.filter(entry =>
      entry.type === 'image'
      && (state.category === 'Todas' || entry.category === state.category)
      && (state.category !== 'Torneos y competencias' || state.date === 'Todas' || entry.date === state.date)
    );
    const index = state.imageItems.indexOf(item);
    prevButton.hidden = state.imageItems.length < 2;
    nextButton.hidden = state.imageItems.length < 2;
    showImage(index);
    dialog.showModal();
  }

  function openVideo(item) {
    prevButton.hidden = true;
    nextButton.hidden = true;
    media.replaceChildren();
    if (item.type === 'youtube') {
      const id = getYouTubeId(item);
      if (id) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
        iframe.title = item.title || 'Video de Royal Star’s Club';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        media.appendChild(iframe);
      }
    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      if (item.poster) video.poster = item.poster;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.setAttribute('aria-label', item.title || 'Video de Royal Star’s Club');
      media.appendChild(video);
    }
    caption.textContent = item.title ? `${item.title} · ${item.category}` : item.category;
    dialog.showModal();
  }

  function render() {
    grid.classList.remove('gallery-fading');
    grid.replaceChildren();
    if (state.loadError) {
      const error = document.createElement('div');
      error.className = 'gallery-empty';
      error.setAttribute('role', 'alert');
      error.textContent = 'No se pudo cargar la galer\u00eda. Recarg\u00e1 la p\u00e1gina para volver a intentarlo.';
      grid.appendChild(error);
      return;
    }

    const visible = state.items.filter(item => {
      const categoryMatches = state.category === 'Todas' || item.category === state.category;
      const dateMatches = state.category !== 'Torneos y competencias' || state.date === 'Todas' || item.date === state.date;
      return categoryMatches && dateMatches;
    });
    if (!visible.length) {
      const empty = document.createElement('div');
      empty.className = 'gallery-empty';
      empty.innerHTML = '<i class="fa-regular fa-images" aria-hidden="true"></i><strong>No hay contenido en esta categoría</strong><span>Pronto agregaremos nuevos momentos de Royal Star’s Club.</span>';
      grid.appendChild(empty);
      return;
    }

    visible.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.style.animationDelay = `${Math.min(index * 45, 225)}ms`;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'gallery-card-inner';
      button.setAttribute('aria-label', item.type === 'image' ? `Ampliar ${item.title || 'fotografía'}` : `Reproducir ${item.title || 'video'}`);

      if (item.type === 'image') {
        const image = document.createElement('img');
        image.src = item.src;
        image.alt = item.alt || item.title || 'Fotografía de Royal Star’s Club';
        image.loading = 'lazy';
        button.appendChild(image);
        button.addEventListener('click', () => openImage(item));
      } else {
        button.classList.add('gallery-card-video');
        let thumbnail = item.thumbnail;
        if (!thumbnail && item.type === 'youtube') {
          const id = getYouTubeId(item);
          if (id) thumbnail = `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
        }
        if (thumbnail) {
          const image = document.createElement('img');
          image.src = thumbnail;
          image.alt = item.title || 'Miniatura de video';
          image.loading = 'lazy';
          button.appendChild(image);
        }
        const play = document.createElement('span');
        play.className = 'gallery-play';
        play.setAttribute('aria-hidden', 'true');
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
        button.appendChild(play);
        button.addEventListener('click', () => openVideo(item));
      }

      const meta = document.createElement('div');
      meta.className = 'gallery-card-meta';
      const metaLabel = item.date ? `${item.category} · ${item.date}` : item.category;
      meta.innerHTML = `<strong>${escapeHtml(item.title || (item.type === 'image' ? 'Momentos Royal' : 'Video Royal'))}</strong><span>${escapeHtml(metaLabel)}</span>`;
      button.appendChild(meta);
      card.appendChild(button);
      grid.appendChild(card);
    });
  }

  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.category = button.dataset.category;
    state.date = 'Todas';
    dateFilters.hidden = state.category !== 'Torneos y competencias';
    dateFilters.querySelectorAll('[data-date]').forEach(filter => {
      const active = filter.dataset.date === 'Todas';
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    filters.querySelectorAll('[data-category]').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    render();
  });

  dateFilters.addEventListener('click', event => {
    const button = event.target.closest('[data-date]');
    if (!button) return;
    state.date = button.dataset.date;
    dateFilters.querySelectorAll('[data-date]').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    render();
  });

  prevButton.addEventListener('click', () => showImage(state.imageIndex - 1));
  nextButton.addEventListener('click', () => showImage(state.imageIndex + 1));
  closeButton.addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener('close', () => media.replaceChildren());
  document.addEventListener('keydown', event => {
    if (!dialog.open) return;
    if (event.key === 'ArrowLeft' && !prevButton.hidden) showImage(state.imageIndex - 1);
    if (event.key === 'ArrowRight' && !nextButton.hidden) showImage(state.imageIndex + 1);
  });

  if (Array.isArray(window.RoyalGalleryItems)) {
    state.items = window.RoyalGalleryItems;
    render();
  } else {
    fetch('assets/data/galeria.json')
      .then(response => {
        if (!response.ok) throw new Error(`No se pudo cargar la galer\u00eda (HTTP ${response.status}).`);
        return response.json();
      })
      .then(items => {
        state.items = Array.isArray(items) ? items : [];
        render();
      })
      .catch(error => {
        console.error('Error al cargar los elementos de la galer\u00eda.', error);
        state.loadError = true;
        state.items = [];
        render();
      });
  }
})();

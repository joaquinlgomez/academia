(() => {
      const monthName = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' });
      const fullDate = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      const today = new Date();
      let displayedMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      let selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const events = {
        // Eventos ilustrativos: cambiar por fechas reales cuando se confirme el calendario.
        '2026-11-06': { title: 'Inicio de la Liga Royal', description: 'Comienza la Liga Royal en ROYAL STARS CLUB. Los partidos semanales se coordinan para viernes o sábado.', time: 'Horario a convenir', place: 'ROYAL STARS CLUB' }
      };
      const keyOf = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      const sameDay = (a,b) => a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
      const grid = document.getElementById('calendarGrid');
      function renderCalendar(){
        document.getElementById('calendarMonth').textContent = monthName.format(displayedMonth).replace(/^./, s => s.toLocaleUpperCase('es-AR'));
        grid.replaceChildren();
        ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].forEach(label => { const el=document.createElement('div'); el.className='weekday'; el.textContent=label; grid.appendChild(el); });
        const first = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1);
        const mondayIndex = (first.getDay()+6)%7;
        const start = new Date(first.getFullYear(), first.getMonth(), 1-mondayIndex);
        for(let i=0;i<42;i++){
          const date = new Date(start.getFullYear(), start.getMonth(), start.getDate()+i);
          const k = keyOf(date); const btn=document.createElement('button'); btn.type='button'; btn.className='calendar-day'; btn.textContent=String(date.getDate());
          btn.setAttribute('aria-label', fullDate.format(date));
          if(date.getMonth()!==displayedMonth.getMonth()) btn.classList.add('muted');
          if(sameDay(date,today)) btn.classList.add('today');
          if(sameDay(date,selectedDate)){btn.classList.add('selected');btn.setAttribute('aria-pressed','true');} else btn.setAttribute('aria-pressed','false');
          if(events[k]) btn.classList.add('has-event');
          btn.addEventListener('click',()=>{selectedDate=new Date(date);displayedMonth=new Date(date.getFullYear(),date.getMonth(),1);renderCalendar();renderEvent();});
          grid.appendChild(btn);
        }
      }
      function renderEvent(){
        document.getElementById('selectedDateLabel').textContent=fullDate.format(selectedDate).replace(/^./,s=>s.toLocaleUpperCase('es-AR'));
        const event=events[keyOf(selectedDate)];
        document.getElementById('eventTitle').textContent=event?event.title:'Sin actividades publicadas';
        document.getElementById('eventDescription').textContent=event?event.description:'No hay actividades de demostración cargadas para esta fecha. Consultá por WhatsApp para confirmar si hay clases o encuentros programados.';
        document.getElementById('eventTime').textContent=event?event.time:'Consultar disponibilidad';
        document.getElementById('eventPlace').textContent=event?event.place:'Royal Star’s Club';
      }
      document.getElementById('prevMonth').addEventListener('click',()=>{displayedMonth=new Date(displayedMonth.getFullYear(),displayedMonth.getMonth()-1,1);renderCalendar();});
      document.getElementById('nextMonth').addEventListener('click',()=>{displayedMonth=new Date(displayedMonth.getFullYear(),displayedMonth.getMonth()+1,1);renderCalendar();});
      document.getElementById('year').textContent=String(new Date().getFullYear());
      document.querySelectorAll('#royalNav .nav-link, #royalNav .btn').forEach(link=>link.addEventListener('click',()=>{const menu=document.getElementById('royalNav');if(menu.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(menu).hide();}));
      const royalMenu=document.getElementById('royalNav');
      const royalToggle=document.querySelector('.navbar-toggler');
      royalMenu.addEventListener('shown.bs.collapse',()=>royalToggle.setAttribute('aria-label','Cerrar menú'));
      royalMenu.addEventListener('hidden.bs.collapse',()=>royalToggle.setAttribute('aria-label','Abrir menú'));
      renderCalendar();renderEvent();
    })();

(() => {
  'use strict';
  const monthName = new Intl.DateTimeFormat('es-AR', {month:'long', year:'numeric'});
  const fullDate = new Intl.DateTimeFormat('es-AR', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
  const today = new Date();
  let displayedMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  // Fecha de inicio de la Liga ya informada para el calendario de Royal.
  const events = {
    '2026-11-06': {title:'Inicio de la Liga de Royal', description:'Comienza la Liga de Royal en ROYAL STARS CLUB.', time:'Viernes · horario a convenir', place:'ROYAL STARS CLUB'}
  };
  const keyOf = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  const sameDay = (a,b) => a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
  const grid = document.getElementById('calendarGrid');
  function renderCalendar(){
    document.getElementById('calendarMonth').textContent = monthName.format(displayedMonth).replace(/^./, char => char.toLocaleUpperCase('es-AR'));
    grid.replaceChildren();
    ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].forEach(label => {const cell=document.createElement('div');cell.className='weekday';cell.textContent=label;grid.appendChild(cell);});
    const first = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1);
    const mondayIndex = (first.getDay()+6)%7;
    const start = new Date(first.getFullYear(), first.getMonth(), 1-mondayIndex);
    for(let i=0;i<42;i++){
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate()+i);
      const button = document.createElement('button');button.type='button';button.className='calendar-day';button.textContent=String(date.getDate());button.setAttribute('aria-label',fullDate.format(date));
      if(date.getMonth()!==displayedMonth.getMonth())button.classList.add('muted');
      if(sameDay(date,today))button.classList.add('today');
      if(sameDay(date,selectedDate)){button.classList.add('selected');button.setAttribute('aria-pressed','true');}else button.setAttribute('aria-pressed','false');
      if(events[keyOf(date)])button.classList.add('has-event');
      button.addEventListener('click',()=>{selectedDate=new Date(date);displayedMonth=new Date(date.getFullYear(),date.getMonth(),1);renderCalendar();renderEvent();});
      grid.appendChild(button);
    }
  }
  function renderEvent(){
    document.getElementById('selectedDateLabel').textContent=fullDate.format(selectedDate).replace(/^./,char=>char.toLocaleUpperCase('es-AR'));
    const event=events[keyOf(selectedDate)];
    document.getElementById('eventTitle').textContent=event?event.title:'Sin actividades publicadas';
    document.getElementById('eventDescription').textContent=event?event.description:'No hay actividades publicadas para esta fecha. Consultá por WhatsApp para confirmar si hay clases o encuentros programados.';
    document.getElementById('eventTime').textContent=event?event.time:'Consultar disponibilidad';
    document.getElementById('eventPlace').textContent=event?event.place:'Royal Star’s Club';
  }
  document.getElementById('prevMonth').addEventListener('click',()=>{displayedMonth=new Date(displayedMonth.getFullYear(),displayedMonth.getMonth()-1,1);renderCalendar();});
  document.getElementById('nextMonth').addEventListener('click',()=>{displayedMonth=new Date(displayedMonth.getFullYear(),displayedMonth.getMonth()+1,1);renderCalendar();});
  document.getElementById('currentYear').textContent=String(new Date().getFullYear());
  renderCalendar();renderEvent();
})();

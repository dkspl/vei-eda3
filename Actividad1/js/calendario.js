document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Fin de cuatrimestre',
                start: '2020-12-19',
                end:'2020-12-20'
            }
            
        ]
    }); 

    calendar.render();
  });
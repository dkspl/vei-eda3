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
            },

            {
                title: 'Inscripcion a finales',
                start: '2020-12-14',
                end:'2020-12-16'
            },

            {
                title: 'Verificacion de inscripcion a finales',
                start: '2020-12-21',
                end:'2020-12-23'
            }
            
        ]
    }); 

    calendar.render();
  });
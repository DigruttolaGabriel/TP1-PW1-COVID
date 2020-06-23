document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [{
                title: 'Primer vacunación\n(COVID-19)\nHospital Santojanni',
                start: '2020-06-29T16:00:00',
                end: '2020-06-29T17:00:00'
            },
            {
                title: 'Segunda vacunación\n(COVID-19)\nHospital Posadas',
                start: '2020-07-15',
                end: '2020-07-15'
            },
            {
                title: 'Tercer vacunación\n(COVID-19)\nHospital Zubizarreta',
                start: '2020-08-16',
                end: '2020-08-16'
            },
            {
                title: 'Cuarta vacunación\n(COVID-19)\nHospital Zubizarreta',
                start: '2020-08-17',
                end: '2020-08-17'
            },
        ]
    });
    calendar.render();
});
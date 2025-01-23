
// document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Jadwal Dokter Gigi',
                start: '2025-01-13',
                end: '2025-01-19',
                backgroundColor: '#4CAF50',  
                borderColor: '#388E3C'      
            },
            {
                title: 'Jadwal Dokter Umum',
                start: '2025-01-20',
                end: '2025-01-25',
                backgroundColor: '#2196F3',  // Warna biru
                borderColor: '#1976D2'       // Warna border biru
            },
            {
                title: 'Jadwal Dokter KB',
                start: '2025-02-18',
                end: '2025-02-20',
                backgroundColor: '#FF9800',  // Warna oranye
                borderColor: '#F57C00'       // Warna border oranye
            },
            {
                title: 'Jadwal Dokter KIA',
                start: '2025-01-20',
                end: '2025-01-22',
                backgroundColor: '#FF5722',  // Warna merah
                borderColor: '#D32F2F'       // Warna border merah
            },
            {
                title: 'Jadwal Dokter Umum',
                start: '2025-02-27',
                end: '2025-02-29',
                backgroundColor: '#9C27B0',  // Warna ungu
                borderColor: '#8E24AA'       // Warna border ungu
            },
            {
                title: 'Jadwal Dokter KB',
                start: '2025-03-10',
                end: '2025-03-14',
                backgroundColor: '#fF9800',  
                borderColor: '#F57C00'       
            }
        ]
    });
    calendar.render();


// Script untuk toggle sidebar di mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const sidebarMenu = document.getElementById('sidebar-menu');

    hamburger.addEventListener('click', function () {
        sidebarMenu.classList.toggle('hidden');
    });
});

// Script untuk PureCounter
        const counters = new PureCounter();


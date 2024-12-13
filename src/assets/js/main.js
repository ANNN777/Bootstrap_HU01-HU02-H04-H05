// Import our custom CSS
import '../../scss/styles.scss'


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/**
* Configura el cambio de tema entre claro y oscuro al hacer clic en un botón.
* Se ejecuta cuando el contenido del documento ha sido completamente cargado.
*
* @event DOMContentLoaded
*/
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Botón de alternancia de tema.
     * @type {HTMLElement}
     */
    const themeToggleBtn = document.getElementById('themeToggle');
 
 
    /**
     * Icono del botón de alternancia de tema.
     * @type {HTMLElement}
     */
    const themeIcon = document.getElementById('themeIcon');
 
 
    /**
     * Evento que alterna el tema entre claro y oscuro.
     *
     * @event click
     */
    themeToggleBtn.addEventListener('click', () => {
        /**
         * Tema actual del documento. Por defecto, se asume que es 'light' si no se ha establecido.
         * @type {string}
         */
        const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
       
        /**
         * Nuevo tema a establecer, dependiendo del tema actual.
         * @type {string}
         */
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
       
        // Establece el nuevo tema en el atributo data-bs-theme del elemento <html>
        document.documentElement.setAttribute('data-bs-theme', newTheme);
       
        // Cambiar el icono según el nuevo tema
        if (newTheme === 'dark') {
            themeIcon.classList.remove('bi-sun');
            themeIcon.classList.add('bi-moon');
        } else {
            themeIcon.classList.remove('bi-moon');
            themeIcon.classList.add('bi-sun');
        }
    });

 });

 /* Mi chartjs antoniom */
   // Número de productos por categoría en un mes
   const categoryData = {
    labels: ["Bebidas", "Lácteos", "Snacks", "Frutas", "Carnes"],
    datasets: [{
        label: 'Productos por Categoría',
        data: [120, 80, 150, 60, 90],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    }]
};

new Chart(document.getElementById('categoriaChart'), {
    type: 'bar',
    data: categoryData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Productos por Categoría en Tickets (Enero)' }
        }
    }
});

// Rankings de gasto en supermercados
const spendingRankData = {
    labels: ["Supermercado A", "Supermercado B", "Supermercado C", "Supermercado D", "Supermercado E"],
    datasets: [{
        label: 'Gasto (€)',
        data: [500, 450, 300, 250, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        borderColor: "#36A2EB",
        borderWidth: 1
    }]
};

new Chart(document.getElementById('gastoPromedioSupermercado'), {
    type: 'doughnut',
    data: spendingRankData,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Ranking de Gasto por Supermercados. €' }
        }
    }
});

// Gasto promedio por ticket
const averageTicketValueData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [{
        label: 'Gasto Promedio por Ticket (€)',
        data: [25, 30, 20, 35, 40, 28],
        backgroundColor: "#FF6384",
        fill: true
    }]
};

new Chart(document.getElementById('gastoPromedioTicket'), {
    type: 'line',
    data: averageTicketValueData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Gasto Promedio por Ticket' }
        }
    }
});

// Tickets por día
const ticketsPerDayData = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    datasets: [{
        label: 'Tickets por Día (Unidades)',
        data: [20, 25, 30, 15, 40, 50, 35],
        backgroundColor: "#4BC0C0"
    }]
};

new Chart(document.getElementById('ticketsPorDia'), {
    type: 'bar',
    data: ticketsPerDayData,
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: 'Tickets por Día de la Semana' }
        }
    }
});

 
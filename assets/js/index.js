document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('causas-toggle');
    const content = document.getElementById('causas-content');

    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        if (content.classList.contains('open')) {
            content.classList.remove('open');
        } else {
            content.classList.add('open');
        }
    });
    const buttons = document.querySelectorAll('.buttons__calendar');
    const sections = document.querySelectorAll('.calendar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            sections.forEach(section => {
                section.classList.remove('show');
            });
            if (button.id === 'recien__nacidos') {
                document.querySelector('.first__section__calendar__container__recienNacidos').classList.add('show');
            } else if (button.id === 'anio_de_vida__button') {
                document.querySelector('.first__section__calendar__container__añoDeVida').classList.add('show');
            } else if (button.id === 'h_los_2_anios') {
                document.querySelector('.first__section__calendar__container__hastaLos2Años').classList.add('show');
            } else if (button.id === 'b_5_anios') {
                document.querySelector('.first__section__calendar__container__5años').classList.add('show');
            } else if (button.id === 'b_11_anios') {
                document.querySelector('.first__section__calendar__container__11años').classList.add('show');
            } else if (button.id === 'jovenes_adultos') {
                document.querySelector('.first__section__calendar__container__Jovenes_adultos').classList.add('show');
            } else if (button.id === 'embarazadas') {
                document.querySelector('.first__section__calendar__container__embarazadas').classList.add('show');
            }
        });
    });
});

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
});

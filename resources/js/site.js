// Nav burger menu...
document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
    const dropdownMenu = document.getElementById('navbar-dropdown');

    burgerButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
    });
});

// If form errors, scroll to form
document.addEventListener('DOMContentLoaded', function () {
    let errorElement = document.getElementById('form-errors');
    let requestForm = document.getElementById('contact');
    if (errorElement) {
        requestForm.scrollIntoView({ behavior: 'instant' });
    }
});
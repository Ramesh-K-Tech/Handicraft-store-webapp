document.addEventListener('DOMContentLoaded',() => {

    const sr = ScrollReveal({
        distance:'30px',
        duration:1500,
        delay:200,
        reset:true

    })
    sr.reveal('.text',{delay:50,origin:'top'});
    sr.reveal('.form-container form',{delay:50,origin:'left'});
    sr.reveal('.heading',{delay:50,origin:'top'});
    sr.reveal('.service-container .box',{delay:50,origin:'top'});
    sr.reveal('.products-container .box',{delay:50,origin:'top'});
    sr.reveal('.about-container .about-text',{delay:50,origin:'top'});
    sr.reveal('.reviews-container',{delay:50,origin:'top'});
    sr.reveal('.newsletter .box',{delay:50,origin:'bottom'});

});

let token = null;

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const registerForm = document.getElementById('register-form');
    const orderForm = document.getElementById('order-form');
    const dashboard = document.getElementById('dashboard');
    const homeSection = document.getElementById('Home');

    function showSection(section) {
        homeSection.style.display = section === homeSection ? 'grid' : 'none';
        dashboard.style.display = section === dashboard ? 'block' : 'none';
    }

    // Initialize the UI
    showSection(homeSection);
});
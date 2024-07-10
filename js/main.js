// Menu
function toggleMenu() {
    const navList = document.querySelector('.header .nav-list');
    if(window.innerWidth <= 800) {
        navList.classList.toggle('active');
    }
}

var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
// Send email data
function sendEmail() {
    console.log('enviado');
    emailjs.send("service_dajc34g","template_p01dl9g", params).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
        console.log('FAILED...', error);
        },
    )
}
// Menu
function toggleMenu() {
    const navList = document.querySelector('.header .nav-list');
    if(window.innerWidth <= 800) {
        navList.classList.toggle('active');
    }
}


// Send email data
function sendEmail() {
    console.log('enviado')
    var params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_dajc34g","template_p01dl9g", params).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
        console.log('FAILED...', error);
        }
    )
}
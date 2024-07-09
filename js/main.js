const menuMobile = document.querySelector('#menu-mobile');
function toggleMenu() {
    const navList = document.querySelector('.header .nav-list');
    navList.classList.toggle('active');
    console.log('clicou', navList)
}
menuMobile.addEventListener('click', toggleMenu);
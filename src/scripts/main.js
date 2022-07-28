const triggerMenuNavbarDesktop = document.querySelector('.navbar__email');
const menuNavbarDesktop = document.querySelector('.menu--desktop');

triggerMenuNavbarDesktop.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    menuNavbarDesktop.classList.toggle('inactive')
    triggerMenuNavbarDesktop.classList.toggle('active')
}



const triggerMenuNavbarMobile = document.querySelector('.navbar__menu-icon');
const menuNavbarMobile = document.querySelector('.menu--mobile');

triggerMenuNavbarMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    menuNavbarMobile.classList.toggle('inactive');
    triggerMenuNavbarMobile.classList.toggle('active')

    
}

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
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive')

    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive')
        menuNavbarMobile.classList.toggle('inactive');
        triggerMenuNavbarMobile.classList.toggle('active')
    } else {
        menuNavbarMobile.classList.toggle('inactive');
        triggerMenuNavbarMobile.classList.toggle('active')
    }
}

const tiggerAsideShoppingCart = document.querySelector('.navbar__cart');
const triggerBackAsideShoppingCart = document.querySelector('.shopping-cart__back')
const asideShoppingCart = document.querySelector('.shopping-cart');

tiggerAsideShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    const isMobileMenuClosed = menuNavbarMobile.classList.contains('inactive')
    const isDesktopMenuClosed = menuNavbarDesktop.classList.contains('inactive')

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        menuNavbarMobile.classList.add('inactive');
        triggerMenuNavbarMobile.classList.remove('active');

        menuNavbarDesktop.classList.add('inactive')
        triggerMenuNavbarDesktop.classList.remove('active')

        asideShoppingCart.classList.toggle('inactive');
    } else {
        asideShoppingCart.classList.toggle('inactive');
    }
    
}

triggerBackAsideShoppingCart.addEventListener('click', toggleBackShoppingCart);

function toggleBackShoppingCart() {
    asideShoppingCart.classList.add('inactive');
}
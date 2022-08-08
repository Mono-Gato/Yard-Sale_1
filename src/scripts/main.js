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

    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive')

    if (!isAsideShoppingCartClosed || !isAsideProductDetailClosed) {
        asideShoppingCart.classList.add('inactive')
        asideProductDetail.classList.add('inactive')

        menuNavbarMobile.classList.toggle('inactive');
        triggerMenuNavbarMobile.classList.toggle('active')
    } else {
        menuNavbarMobile.classList.toggle('inactive');
        triggerMenuNavbarMobile.classList.toggle('active')
    }
}

const triggerAsideShoppingCart = document.querySelector('.navbar__cart');
const triggerBackAsideShoppingCart = document.querySelector('.shopping-cart__back')
const asideShoppingCart = document.querySelector('.shopping-cart');

triggerAsideShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    const isMobileMenuClosed = menuNavbarMobile.classList.contains('inactive')
    const isDesktopMenuClosed = menuNavbarDesktop.classList.contains('inactive')

    const isAsideProductDetailClosed = menuNavbarDesktop.classList.contains('inactive')

    if (!isMobileMenuClosed || !isDesktopMenuClosed || isAsideProductDetailClosed) {
        menuNavbarMobile.classList.add('inactive');
        triggerMenuNavbarMobile.classList.remove('active');

        menuNavbarDesktop.classList.add('inactive')
        triggerMenuNavbarDesktop.classList.remove('active')

        asideProductDetail.classList.add('inactive')

        asideShoppingCart.classList.toggle('inactive');
    } else {
        asideShoppingCart.classList.toggle('inactive');
    }
    
}

triggerBackAsideShoppingCart.addEventListener('click', toggleBackShoppingCart);

function toggleBackShoppingCart() {
    asideShoppingCart.classList.add('inactive');
}

//Product list  

const cardsContainer = document.querySelector('.cards__container');

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('card')
    
        //product = {name, price, image} -> product.image
        const productCardImg = document.createElement('img')
        productCardImg.classList.add('card__image')
        productCardImg.setAttribute('src', product.image)
        productCardImg.setAttribute('alt', product.name)
    
        const productCardInfo = document.createElement('div')
        productCardInfo.classList.add('card__info')
    
        const productCardInfoText = document.createElement('div')
        productCardInfoText.classList.add('info__text') 
        const productCardInfoTextPrice = document.createElement('p')
        productCardInfoTextPrice.innerText = '$' + product.price
        const productCardInfoTextName = document.createElement('p')
        productCardInfoTextName.innerText = '$' + product.name
    
        const productCardInfoImage = document.createElement('figure')
        productCardInfoImage.classList.add('info__image')
        const productCardInfoImageImg = document.createElement('img')
        productCardInfoImageImg.setAttribute('src', './src/static/Icons/bt_add_to_cart.svg')
        productCardInfoImageImg.setAttribute('alt', 'add to cart')
    
        productCardInfoImage.appendChild(productCardInfoImageImg)
    
        productCardInfoText.appendChild(productCardInfoTextPrice)
        productCardInfoText.appendChild(productCardInfoTextName)
    
        productCardInfo.appendChild(productCardInfoText)
        productCardInfo.appendChild(productCardInfoImage)
    
        productCard.appendChild(productCardImg)
        productCard.appendChild(productCardInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

const productList = [];
productList.push({
    name: 'bmx',
    price: 120,
    image: 'https://images.pexels.com/photos/5465162/pexels-photo-5465162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

})
productList.push({
    name: 'skate',
    price: 35,
    image: 'https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})

renderProducts(productList)


//product detail
const asideProductDetail = document.querySelector('.product-detail')
const triggerCloseAsideProductDetail = document.querySelector('.product-detail__close')

triggerCloseAsideProductDetail.addEventListener('click', toggleBackProductDetail);

function toggleBackProductDetail() {
    asideProductDetail.classList.add('inactive');
}
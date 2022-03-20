"use strict";

function selector(elementName = '') {
    return document.querySelector(elementName);
}

function selectorAll(elementName = '') {
    return document.querySelectorAll(elementName);
}

let elemList = {
    bodyEl: selector('body'),
    bodyOverlayEl: selector('.body-overlay'),
    nav: {
        navEl: selector('.nav'),
        burgerEl: selector('.burger'),
        closeEl: selector('.nav .close-icon'),
        classStr: 'active-transform'
    },
    navSubdrop: {
        itemArr: selectorAll('.nav .category-item'),
        classStr: 'dropdown-active',
        titleEl: selector('.nav .nav-logo')

    },
    login: {
        eventEl: selector('.bottom-account'),
        loginEl: selector('.login-popup'),
        closeEl: selector('.login-popup .close-icon'),
        classStr: 'active-transform',

    },
    loginPc: {
        eventEl: selector('.account'),
        loginEl: selector('.login-popup'),
        closeEl: selector('.login-popup .close-icon'),
        classStr: 'active-transform',

    },
    cart: {
        cartOverlayEl: selector('.cart-popup .cart-overlay'),
        eventEl: selector('.header .cart'),
        cartEl: selector('.cart-popup'),
        closeEl: selector('.cart-popup .close-icon'),
        classStr: 'cart-active'

    },
    search: {
        eventEl: selector('.search-input'),
        searchEl: selector('.search-container'),
        closeEl: selector('.search-container .close-btn'),
        classStr: 'search-active'
    },
    liked: {
        eventEl: selector('.header .liked'),
        likedEl: selector('.header .liked-popup'),
        closeEl: selector('.liked-popup .close-icon'),
        classStr: 'active-transform'
    },
    likedMobile: {
        eventEl: selector('.sticky-bottom .liked'),
    },
    registration: {
        eventEl: selector('.header .registration-btn'),
        registrationEl: selector('.header .registration-popup'),
        closeEl: selector('.registration-popup .close-icon'),
        classStr: 'active-transform'
    },
    footerAccordion: {
        itemArr: document.querySelectorAll('#footer .accordion-item'),
        classStr: 'accordion-active'

    },
    faqAccordion: {
        itemArr: document.querySelectorAll('.questions-answers .faq-item'),
        classStr: 'accordion-active'

    },
    headerAccordion: {
        itemArr: document.querySelectorAll('.header .about > li, .header .community'),
        classStr: 'accordion-active'
    },
    reviewSlider: {
        buttons: selector('.reviews .buttons'),
        sliderEl: selector('.review-holder')
    },
    viewedSlider: {
        buttons: selector('.viewed-products .buttons'),
        sliderEl: selector('.viewed-products .card-popular')
    },
    headerEl: selector('.header'),
    categoryEl: selector('.category-container'),
    categoryTargetEl: selector('.catalog'),
}
import Swiper from "./swiper-bundle.esm.browser.min.js";
import PopUp from "./modules/screen-out-popup.js";
import catalogPc from "./modules/catalog-pc.js";
import FooterAccordion from "./modules/footerAccordion.js";
import NavSubdrop from "./modules/nav-Subdrop.js";

console.log(elemList.reviewSlider.buttons);

let reviewSlider = new Swiper(elemList.reviewSlider.sliderEl, {
    navigation: {
        nextEl: elemList.reviewSlider.buttons.lastElementChild,
        prevEl: elemList.reviewSlider.buttons.firstElementChild,
    },
    slidesPerView: 'auto',
});

let viewedSlider = new Swiper(elemList.viewedSlider.sliderEl, {
    navigation: {
        nextEl: elemList.viewedSlider.buttons.lastElementChild,
        prevEl: elemList.viewedSlider.buttons.firstElementChild,
    },
    slidesPerView: 'auto',
})


let navPopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.nav.burgerEl,
    elemList.nav.navEl,
    elemList.nav.closeEl,
    elemList.nav.classStr
);

let cartPopup = new PopUp(
    elemList.bodyEl,
    elemList.cart.cartOverlayEl,
    elemList.cart.eventEl,
    elemList.cart.cartEl,
    elemList.cart.closeEl,
    elemList.cart.classStr
);
console.log(cartPopup);

let loginMobilePopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.login.eventEl,
    elemList.login.loginEl,
    elemList.login.closeEl,
    elemList.login.classStr
);

let loginPcPopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.loginPc.eventEl,
    elemList.loginPc.loginEl,
    elemList.loginPc.closeEl,
    elemList.loginPc.classStr
);


let SearchPopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.search.eventEl,
    elemList.search.searchEl,
    elemList.search.closeEl,
    elemList.search.classStr
);

let likedPcPopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.liked.eventEl,
    elemList.liked.likedEl,
    elemList.liked.closeEl,
    elemList.liked.classStr
);


let registrationPopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.registration.eventEl,
    elemList.registration.registrationEl,
    elemList.registration.closeEl,
    elemList.registration.classStr
);

let likedMobiPopup = new PopUp(
    elemList.bodyEl,
    elemList.bodyOverlayEl,
    elemList.likedMobile.eventEl,
    elemList.liked.likedEl,
    elemList.liked.closeEl,
    elemList.liked.classStr
);

let footerAccordion = new FooterAccordion(
    elemList.footerAccordion.itemArr,
    elemList.footerAccordion.classStr
);
let headerAccordion = new FooterAccordion(
    elemList.headerAccordion.itemArr,
    elemList.headerAccordion.classStr
);
let faqAccordion = new FooterAccordion(
    elemList.faqAccordion.itemArr,
    elemList.faqAccordion.classStr
);


if (!window.matchMedia("(min-width: 1280px)").matches) {
    let navSubdrop = new NavSubdrop(
        elemList.navSubdrop.itemArr,
        elemList.navSubdrop.classStr,
        elemList.navSubdrop.titleEl
    );
}

catalogPc.push(elemList.categoryEl, elemList.categoryTargetEl);
catalogPc.openClose('category-active');

console.log('loadeddsdsd');
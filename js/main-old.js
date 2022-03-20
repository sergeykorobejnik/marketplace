'use strict';

import Swiper from 'https://unpkg.com/swiper@7.0.9/swiper-bundle.esm.browser.min.js';


function openBurger() {
    document.querySelector('.burger').addEventListener('click', function () {
        gsap.to('.nav', {
            x: 0,
            ease: 'power3',
            duration: 0.7,
            stagger: {
                amount: 0.7
            }
        });
    });
}

function closeBurger() {
    document.querySelector('.close-icon').addEventListener('click', function () {
        gsap.to('.nav', {
            x: '-110%',
            ease: 'power3',
            duration: 0.3,
        });
    });
}

let categoryTitle = document.querySelector('.nav-logo').innerHTML;

function navInterativity () {
    let parentEl =  document.querySelector('.nav-container > .category');
    let tlNav = gsap.timeline();


    parentEl.addEventListener('click', function (event) {
        console.log(typeof(categoryTitle));
        let currentEl = event.target.parentElement;

            if(event.target.parentElement.className != 'backward') {
                if (event.target.nextElementSibling) {
                    currentEl.setAttribute('data-selected', '1');
                    tlNav.to('header .category > li', {
                        onCompete: () => {
                            document.querySelector('.nav-logo').innerHTML = event.target.innerHTML;

                        },
                        height: 0,
                        stagger: 0.1,
                    });
                    tlNav.to(currentEl.lastElementChild.children, {
                        height: 'auto',
                        stagger: 0.1,   
                    });
                }
            } else {
                currentEl.setAttribute('data-selected', '1');
                document.querySelector('.nav-logo').innerHTML = categoryTitle;
                tlNav.to(currentEl.parentElement.children, {
                    onCompete: () => {
                        document.querySelector('.nav-logo').innerHTML = categoryTitle;
                    },
                    height: 0,
                    stagger: 0.1,   
                });
                tlNav.to('header .category > li', {
                    height: 'auto',
                    stagger: 0.1,
                });
            }    

    });
}

navInterativity();


/* function openCloseDropdown() {
    let categoryText;
    let categoryItem = document.querySelectorAll('.category-item');
    let backwardBtn = document.querySelectorAll('.dropdown');

    function toggleClasses(element) {
        document.querySelector('.nav-logo').classList.toggle('hidden');
        document.querySelector('.dropdown-category').classList.toggle('hidden');
        categoryItem.forEach(element => {
            element.firstChild.classList.toggle('hidden');
        });
        document.querySelector('.support').classList.toggle('hidden');
    }

    categoryItem.forEach(element => {
        element.firstElementChild.addEventListener('click', function () {
            categoryText = this.innerText;
            document.querySelector('.dropdown-category').innerText = categoryText;
            if (element.querySelector('.dropdown') !== null) {
                gsap.to('.category-item > a, .nav-logo', {
                    opacity: 0,
                    stagger: {
                        each: 0.05
                    },
                });
                gsap.to('.dropdown-category', {
                    opacity: 1,
                    duration: 0.7
                });
                gsap.fromTo(this.nextElementSibling.querySelectorAll('a'), {
                    opacity: 0,
                }, {
                    opacity: 1,
                    stagger: {
                        each: 0.05
                    }
                });
                toggleClasses(element);
                element.classList.toggle('dropdown-active');
            }
        });
    });

    backwardBtn.forEach(element => {
        element.firstElementChild.addEventListener('click', function () {
            element.parentElement.classList.remove('dropdown-active');
            toggleClasses(element);
            gsap.to('.dropdown a, .dropdown-category', {
                opacity: 0,
                stagger: {
                    each: 0.05
                }
            });
            gsap.to('.category-item > a, .nav-logo', {
                opacity: 1,
                stagger: {
                    each: 0.05
                }
            });
        });
    });
}
 */

openBurger();
closeBurger();
//openCloseDropdown();

const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//banner-swiper

let poductSwiper = new Swiper('.card-row', {
/*     autoplay: {
        delay: 5000
    },
 */
    navigation: {
        nextEl: '.row-next-btn',
        prevEl: '.row-prev-btn',
    },
    slidesPerView: 'auto',
});
if (!window.matchMedia("(min-width: 1440px)").matches) {
    let accordionHeader = document.querySelectorAll('.accordion-item > h2');
    accordionHeader.forEach(element => {
        element.setAttribute('data-state', '0');
        element.addEventListener('click', function () {
            if (element.getAttribute('data-state') == '0') {
                gsap.to(element.nextElementSibling, {
                    height: 'auto',
                    onplay: () => element.classList.toggle('accordion-active'),
                    onCompete: () => element.setAttribute('data-state', '1')
                });
            } else {
                gsap.to(element.nextElementSibling, {
                    height: 0,
                    onplay: () => element.classList.toggle('accordion-active'),
                    onCompete: () => element.setAttribute('data-state', '0')
                });
            }
        });
    });
}

let bodyEl = document.querySelector('body');
let searchInteractivity = document.querySelector('.search-interactivity');



document.querySelector('.cart').addEventListener('click', function () {
    this.setAttribute('data-state', '0');
    if (this.getAttribute('data-state') == '0') {
        bodyEl.classList.add('popup-active');
        this.setAttribute('data-state', '1');
    }
});

document.querySelector('.cart-popup .close-icon').addEventListener('click', function () {
    if (document.querySelector('.cart').getAttribute('data-state') == '1') {
        bodyEl.classList.remove('popup-active');
        document.querySelector('.cart').setAttribute('data-state', '0');
    }
});


    document.querySelector('.search-input').addEventListener('click', function () {
        let parentEl = this.parentElement;
        console.log(this.getBoundingClientRect().top + this.offsetHeight);
        if (parentEl.getAttribute('data-opened') == null) {
            this.parentElement.setAttribute('data-opened', '0');
        }

        if (this.parentElement.getAttribute('data-opened') == '0') {
            bodyEl.classList.toggle('scroll-disabled');
            this.parentElement.classList.add('search-active');
            this.parentElement.setAttribute('data-opened', '1');
            gsap.fromTo('.search-interactivity', {
                height: 0,

            }, {
                height: 'auto',
                autoAlpha: 1
            });
        }

    });
    document.querySelector('.close-btn').addEventListener('click', function () {
        if (this.parentElement.getAttribute('data-opened') == '1') {
            bodyEl.classList.toggle('scroll-disabled');
            this.parentElement.classList.remove('search-active');
            this.parentElement.setAttribute('data-opened', '0');
            gsap.to('.search-interactivity', {
                height: 0,
                autoAlpha: 0
            });
        }
    });


/// TEST AREA

import _test from './modules/test.js.js.js.js';

let someTestVar = _test;
someTestVar.someFunc();

console.log(_test);
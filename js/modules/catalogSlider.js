"use strict"

import Swiper from "./swiper-bundle.esm.browser.min.js";

class CatalogSlider {
    constructor(itemArr, nextEl, prevEl) {
        this.swiperArr = [];
        this.listOfElements = {
            itemArr: itemArr,
            nextEl: nextEl,
            prevEl: prevEl
        };
        this.mainFunc();
        console.log(this);
    }

    mainFunc(listOfElements, temp) {
        listOfElements = this.listOfElements;
        listOFElements.forEach(element => {
            swiperArr[element] = new Swiper(element, {
                navigation: {
                    nextEl: '.row-next-btn',
                    prevEl: '.row-prev-btn',
                },
                slidesPerView: 'auto',

            });
        });
    }
}

export default CatalogSlider;
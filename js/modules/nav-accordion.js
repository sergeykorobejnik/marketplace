"use strict"

let navAccordion = {
    accordionArr: {},
    parentEl: {},
    activeEl: '',
    mainFunc: function () {
        this.parentEl.addEventListener('click', function(event) {
            navAccordion.accordionArr.forEach(element => {
                element.classList.remove(navAccordion.activeEl);
            });
            let targetEl = event.target.parentElement.lastElementChild;
            if (event.target.parentElement.className != 'support-accordion' && event.target.parentElement.className != '') {
                targetEl.classList.toggle(navAccordion.activeEl);
            };
        });
    },
    push: function(itemArr) {
            this.parentEl = itemArr[0];
            this.activeEl = itemArr[1];
            this.accordionArr = itemArr[2];
            console.log(navAccordion);
            this.mainFunc();
    }
};

export default navAccordion;
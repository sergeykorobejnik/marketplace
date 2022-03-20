"use strict"
let catalogPc = {
    categoryEl: {},
    targetEl: {},
    mainFunc: function () {
        console.log('loaded');
        if (window.matchMedia("(min-width: 1280px)").matches) {
            this.targetEl.append(this.categoryEl);
            this.categoryEl = this.targetEl;
            console.log(this.categoryEl);
        }
    },
    push: function (categoryEl, targetEl) {
        this.categoryEl = categoryEl;
        this.targetEl = targetEl;
        console.log(catalogPc);
        this.mainFunc();
    },
    openClose: function (activeClass) {
        if (window.matchMedia("(min-width: 1280px)").matches) {
            this.categoryEl.addEventListener('click', function (event) {
                let target = event.target;
                if (target.className == 'catalog') {
                    if (target.getAttribute('data-opened') == '0' || target.getAttribute('data-opened') == null) {
                        target.setAttribute('data-opened', '1');
                        this.lastElementChild.classList.add(activeClass);
                    } else {
                        this.lastElementChild.classList.remove(activeClass);
                        target.setAttribute('data-opened', '0');
                    }
                }
                if (target.closest('.category') != null) {
                    console.log(target.closest('.category'));
                    if (target.closest('.category-item') == null || target.closest('.category-item').className == '.category-item') {

                    }
                }
            });
        }
    },

};

export default catalogPc;
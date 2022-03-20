"use strict"

let screenOutPopup = {
    bodyEl: {},
    closeEl: {},
    targetEl:{},
    eventEl: {},
    mainFunc: function() {
        this.eventEl.addEventListener('click', function() {
            navPopup.targetEl.classList.toggle('active-transform');
        });
        this.closeEl.addEventListener('click', function () {
            navPopup.targetEl.classList.toggle('active-transform');
        });
    },
    push: function (bodyEl, eventEl, targetEl, closeEl) {
        this.bodyEl = bodyEl;
        this.eventEl = eventEl;
        this.targetEl = targetEl;
        this.closeEl = closeEl;
        this.mainFunc();
    },

};

export default navPopup;

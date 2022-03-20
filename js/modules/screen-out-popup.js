"use strict"



class PopUp {
    constructor(bodyEl, bodyOverlayEl, eventEl, targetEl, closeEl, classStr) {
        this.listOfElements = {
            bodyEl: bodyEl,
            bodyOverlayEl: bodyOverlayEl,
            eventEl: eventEl,
            targetEl: targetEl,
            closeEl: closeEl,
            classStr: classStr,
        };
        this.mainFunc();
    } 
    
    mainFunc(listOfElements)  {
        listOfElements = this.listOfElements;
        listOfElements.eventEl.addEventListener('click', function (event) {
                listOfElements.targetEl.classList.add(listOfElements.classStr);
                listOfElements.bodyEl.classList.add('scroll-disabled');
        });
        if(listOfElements.closeEl.getAttribute('event-added') == null) {
            listOfElements.closeEl.addEventListener('click', function() {
                listOfElements.targetEl.classList.remove(listOfElements.classStr);
                listOfElements.bodyEl.classList.remove('scroll-disabled');
            });

            listOfElements.bodyOverlayEl.addEventListener('click', function(event) {
                    listOfElements.targetEl.classList.remove(listOfElements.classStr);
                    listOfElements.bodyEl.classList.remove('scroll-disabled');
            });
        }
        listOfElements.closeEl.setAttribute('event-added', '1');
    }
    
}

export default PopUp;

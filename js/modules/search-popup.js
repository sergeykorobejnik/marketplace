/* let bodyEl = document.querySelector('body');
let searchFunc = function ()  {
        document.querySelector('.search-input').addEventListener('click', function () {
        let parentEl = this.parentElement;
        console.log('done');
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

};

export default ; */

class SearchPopup {
    constructor (eventEl, targetEl, classStr) {
        
        this.listOfElements = {
            eventEl: eventEl,
            targetEl: targetEl,
            classStr: classStr
        };
        this.mainFunc();
    }

    mainFunc (listOfElements) {
        listOfElements = this.listOfElements;
        listOfElements.eventEl.addEventListener('click', function() {

            if(listOfElements.eventEl.getAttribute('data-opened') == '0' || listOfElements.eventEl.getAttribute('data-opened') == null) {
                listOfElements.targetEl.classList.add(listOfElements.classStr);
                listOfElements.eventEl.setAttribute('data-opened', '1');
    
            } else {
                listOfElements.eventEl.setAttribute('data-opened', '0');
                listOfElements.eventEl.classList.remove(listOfElements.classStr);
            }
        });

    }
}
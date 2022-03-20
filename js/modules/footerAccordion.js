"use strict"

class FooterAccordion {
    constructor(itemArr, classStr) {
        this.listOfElements = {
            itemArr: itemArr,
            classStr: classStr
        };
        this.mainFunc();
        console.log(this);
    }

    mainFunc(listOfElements) {
        listOfElements = this.listOfElements;
        listOfElements.itemArr.forEach(element => {
            element.setAttribute('data-opened', '0');
            element.addEventListener('click', function () {
                if(element.getAttribute('data-opened') == '0') {
                    listOfElements.itemArr.forEach(element => {
                        element.classList.remove(listOfElements.classStr);
                        element.setAttribute('data-opened', '0');                 
                    });
                    element.classList.add(listOfElements.classStr);
                    element.setAttribute('data-opened', '1')
                } else {
                    element.classList.remove(listOfElements.classStr);
                    element.setAttribute('data-opened', '0');                 
                }
            });

        });
    }
}

export default FooterAccordion;
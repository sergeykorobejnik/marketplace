"use strict"

class NavSubdrop {
    constructor(itemArr, classStr, titleEl) {
        this.listOfElements = {
            itemArr: itemArr,
            classStr: classStr,
            titleEl: titleEl,
            originEl: titleEl.innerHTML
        };
        this.mainFunc();
    }

    mainFunc(listOfElements) {
        listOfElements =this.listOfElements;
        listOfElements.titleEl.style.fontSize = '20px';
        listOfElements.itemArr.forEach(element => {
            element.setAttribute('data-opened', '0');
            element.addEventListener('click', function(event) {
                if(this.getAttribute('data-opened') == '0' && this.lastElementChild.classList.contains('dropdown')) {
                    this.lastElementChild.classList.add(listOfElements.classStr);
                    this.setAttribute('data-opened', '1');
                    listOfElements.titleEl.innerHTML = this.firstElementChild.innerText;
                } else {
                    if(event.target.parentElement.className == 'backward') {
                        this.lastElementChild.classList.remove(listOfElements.classStr);
                        this.setAttribute('data-opened', '0');
                        listOfElements.titleEl.innerHTML = listOfElements.originEl;
                    }
                }
            });
        });

    }

}

export default NavSubdrop;
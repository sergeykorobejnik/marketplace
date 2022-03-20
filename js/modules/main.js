"use strict";

let elemList = new Object;

elemList.bodyEl = document.querySelector('body');
elemList.navEl = document.querySelector('.nav');
console.log(elemList);


import navPopup from "./modules/nav-popup.js";

navPopup.push([elemList.bodyEl, elemList.navEl]);



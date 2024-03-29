//Usaremos la ultima versión de javascript
'use strict';
//importaciones
//gets
import {getsHtml,imgs,namePlan} from './getHtml/getsHtml.js';
//lógica del funciones y btons
import {namePlanet,next,back,calculo,showInfo} from './logicPlant/logicPlant.js';
//animaciones 
import {loaderAnimation,resultHide,toasShow} from './effect/effect.js';
//loader
window.addEventListener('load',() => {
    //animation loader
    loaderAnimation();
    //img
    getsHtml.planet.innerHTML = '<img src=" ' + imgs[0] + '" class="img-plant" alt="'+ namePlan[getsHtml.x]+'-img" >';
    namePlanet(getsHtml.x);       
    //bootstrap
    toasShow();
    //btons
    getsHtml.btnNext.addEventListener('click',next)
    getsHtml.btnBack.addEventListener('click',back)
    getsHtml.calcular.addEventListener('click',calculo) 
    showInfo();
})



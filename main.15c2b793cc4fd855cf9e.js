(()=>{"use strict";var e={766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(91),o=n.n(r),a=new URL(n(274),n.b);const i='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width,initial-scale=1"> <link rel="icon" href="'+o()(a)+'"> <title>Race-Api</title> </head> <body> </body> </html>'},91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},204:(e,t,n)=>{n.r(t)},724:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function d(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.stopCars=t.startCars=t.startStopCar=t.updateCar=t.getCar=t.deleteCar=t.createCar=t.getCars=void 0;const r="http://127.0.0.1:3000",o=`${r}/garage`,a=`${r}/engine`;t.getCars=()=>n(void 0,void 0,void 0,(function*(){const e=yield fetch(o);return yield e.json()})),t.createCar=e=>n(void 0,void 0,void 0,(function*(){const t=yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return yield t.json()})),t.deleteCar=e=>n(void 0,void 0,void 0,(function*(){const t=yield fetch(`${o}/${e}`,{method:"DELETE"});return yield t.json()})),t.getCar=e=>n(void 0,void 0,void 0,(function*(){const t=yield fetch(`${o}/${e}`);return yield t.json()})),t.updateCar=(e,t)=>n(void 0,void 0,void 0,(function*(){const n=yield fetch(`${o}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return yield n.json()})),t.startStopCar=e=>n(void 0,void 0,void 0,(function*(){const t=yield fetch(`${a}${((e=[])=>e.length?`?${e.map((e=>`${e.key}=${e.value}`)).join("&")}`:"")(e)}`,{method:"PATCH"});return!!t.ok&&(yield t.json())})),t.startCars=e=>e.map((e=>fetch(`${a}?id=${e}&status=started`,{method:"PATCH"}))),t.stopCars=e=>e.map((e=>fetch(`${a}?id=${e}&status=stopped`,{method:"PATCH"})))},407:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.button=void 0,t.button=(e,t,n)=>{const r=document.createElement("button");return r.classList.add("btn"),r.setAttribute("id",`${t}`),n&&r.setAttribute(n,""),r.textContent=e,r}},940:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SPEED_CORRECTION=t.QUANTITY_CARS_PAGE=t.ADD_CARS=void 0,t.ADD_CARS=10,t.QUANTITY_CARS_PAGE=5,t.SPEED_CORRECTION=7},167:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.inputColor=t.input=void 0,t.input=(e,t)=>{const n=document.createElement("input");return n.classList.add("input"),n.setAttribute("id",e),t&&n.setAttribute(t,""),n},t.inputColor=(e,t)=>{const n=document.createElement("input");return n.classList.add("input-color"),n.setAttribute("id",e),n.setAttribute("type","color"),n.setAttribute("value","#ff0000"),t&&n.setAttribute(t,""),n}},261:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.carModels=void 0,t.carModels={Mercedes:["GLC Coupe","GLA SUV","EQS SUV","Maybach GLS SUV","E-Class Sedan","E-Class Wagon","C-Class Coupe","Mercedes-AMG GT","SL Roadster","E-Class Cabriolet"],Audi:["Q4 e-tron®","Q3","SQ5","Audi Q5 Sportback","SQ7","A4 Sedan","A5 Coupe","RS 5 Coupe","RS 6 Avant","TTS Coupe"],Ford:["EcoSport S","Edge ST","Explorer ST","Bronco® SUV","MUSTANG MACH-E","F-150® RAPTOR","Escape","Ranger XLT","Ranger LARIAT","MAVERICK"],Opel:["Astra Electric","Crossland","Mokka","Corsa-e","Grandland","Vivaro-combi","Zafira-e Life","Combo-e Life","Grandland Electric","Astra Hatchback Hybrid"]}},200:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomNameCar=t.getRandomColorHex=t.storage=void 0;const r=n(261);t.storage={currentIdUpdate:0,quantityCarsGarage:0,numberCurrentPage:1,createName:"",createColor:"#ff0000",updateName:"",updateColor:"#ff0000"},t.getRandomColorHex=()=>{const e=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];let t="#";for(let n=0;n<6;n++)t+=e[Math.floor(Math.random()*e.length)];return t},t.getRandomNameCar=()=>{const e=Object.entries(r.carModels),t=Math.floor(4*Math.random()),n=Math.floor(10*Math.random());return`${e[t][0]} ${e[t][1][n]}`}},11:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function d(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.moveCar=t.onOffButtonsPage=t.renderNumberCarsTitle=void 0;const o=n(724),a=n(200),i=n(940);t.renderNumberCarsTitle=()=>r(void 0,void 0,void 0,(function*(){var e;const t=null===(e=document.querySelector(".page-title"))||void 0===e?void 0:e.children[0],n=yield(0,o.getCars)();t&&(0!==n.length?t.textContent=` (${n.length})`:t.textContent="")})),t.onOffButtonsPage=()=>r(void 0,void 0,void 0,(function*(){const e=document.getElementById("prev"),t=document.getElementById("next"),n=yield(0,o.getCars)();a.storage.numberCurrentPage*i.QUANTITY_CARS_PAGE-i.QUANTITY_CARS_PAGE>0?null==e||e.removeAttribute("disabled"):null==e||e.setAttribute("disabled",""),a.storage.numberCurrentPage*i.QUANTITY_CARS_PAGE<n.length?null==t||t.removeAttribute("disabled"):null==t||t.setAttribute("disabled","")})),t.moveCar=(e,t)=>r(void 0,void 0,void 0,(function*(){const n=document.getElementById(`car${e}`),r=null==n?void 0:n.children[1].children[0],a=null==n?void 0:n.children[0].children[3],d=null==n?void 0:n.children[0].children[4],c=r.clientWidth;let s=0;(null==n?void 0:n.clientWidth)&&(s=n.clientWidth-c);const l=t/i.SPEED_CORRECTION;let u=0,p=!1,m=!1;const v=setInterval((function(){if(u>s||m)return clearInterval(v),void(d&&d.removeAttribute("disabled"));var e;e=u,r.style.transform=`translateX(${e}px)`,u+=3,u>s-5&&(p=!0)}),l);return(yield(0,o.startStopCar)([{key:"id",value:e},{key:"status",value:"drive"}]))||(yield(0,o.startStopCar)([{key:"id",value:e},{key:"status",value:"stopped"}]))&&(m=!0),a&&a.setAttribute("disabled",""),!!p&&e}))},556:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function d(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getObjCar=t.getImageCar=void 0;const o=n(407),a=n(724),i=n(200),d=n(11),c=n(611),s=e=>{const t=e.target,n=Number(t.id[t.id.length-1]),o=document.getElementById("inp-name-update"),d=document.getElementById("inp-color-update"),c=document.getElementById("update");o.removeAttribute("disabled"),d.removeAttribute("disabled"),c.removeAttribute("disabled"),r(void 0,void 0,void 0,(function*(){const e=yield(0,a.getCar)(n);o.value=e.name,d.value=e.color,i.storage.currentIdUpdate=e.id,i.storage.updateName=e.name,i.storage.updateColor=e.color}))},l=e=>r(void 0,void 0,void 0,(function*(){var t;const n=e.target,r=Number(n.id.slice(6));yield(0,a.deleteCar)(r),null===(t=document.getElementById(`car${r}`))||void 0===t||t.remove(),(0,c.renderGaragePage)(i.storage.numberCurrentPage),(0,d.renderNumberCarsTitle)()})),u=e=>r(void 0,void 0,void 0,(function*(){var t,n,r;const o=e.target,i=o.id.slice(5),c=null===(n=null===(t=o.parentElement)||void 0===t?void 0:t.nextElementSibling)||void 0===n?void 0:n.children[0];if("A"===o.textContent){const e=yield(0,a.startStopCar)([{key:"id",value:i},{key:"status",value:"started"}]);(0,d.moveCar)(i,e.velocity)}else(yield(0,a.startStopCar)([{key:"id",value:i},{key:"status",value:"stopped"}]))&&(c.style.transform="translateX(0)",c.style.transition="0s",null===(r=o.previousElementSibling)||void 0===r||r.removeAttribute("disabled"),o.setAttribute("disabled",""))}));t.getImageCar=e=>{const t=document.createElement("div");return t.classList.add("car"),t.innerHTML=`<svg class="car-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">\n    <defs>\n    </defs>\n    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >\n        <circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n        <circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n        <path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${e}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />\n    </g>\n    </svg>`,t},t.getObjCar=e=>{const n=document.createElement("div");n.classList.add("wrap-car"),n.setAttribute("id",`car${e.id}`);const r=document.createElement("div"),a=document.createElement("h4"),i=(0,o.button)("SELECT",`select${e.id}`),d=(0,o.button)("REMOVE",`remove${e.id}`),c=(0,o.button)("A",`start${e.id}`),p=(0,o.button)("B",`stopp${e.id}`,"disabled");c.classList.add("start-car"),p.classList.add("stop-car"),i.addEventListener("click",s),d.addEventListener("click",l),c.addEventListener("click",u),p.addEventListener("click",u),r.classList.add("control-car"),a.textContent=`${e.name}`,r.append(a),r.append(i),r.append(d),r.append(c),r.append(p);const m=(0,t.getImageCar)(e.color);return n.append(r),n.append(m),n}},214:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function d(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getGarageControls=void 0;const o=n(407),a=n(167),i=n(724),d=n(556),c=n(200),s=n(611),l=n(11),u=n(940),p={name:"",color:"#ff0000"},m=e=>{const t=e.target;p.name=t.value,c.storage.createName=t.value},v=e=>{const t=e.target;c.storage.updateName=t.value},g=e=>{const t=e.target;p.color=t.value,c.storage.createColor=t.value},f=e=>{const t=e.target;c.storage.updateColor=t.value},h=()=>{const e=document.querySelector(".garage");r(void 0,void 0,void 0,(function*(){const t=yield(0,i.createCar)(p),n=(0,d.getObjCar)(t);null==e||e.append(n)}))},C=()=>{const e=document.getElementById(`car${c.storage.currentIdUpdate}`),t=null==e?void 0:e.childNodes[0].childNodes[0],n=null==e?void 0:e.children[1],o=document.getElementById("inp-name-update"),a=document.getElementById("inp-color-update"),s=document.getElementById("update");o.setAttribute("disabled",""),a.setAttribute("disabled",""),s.setAttribute("disabled",""),r(void 0,void 0,void 0,(function*(){yield(0,i.updateCar)(c.storage.currentIdUpdate,{name:c.storage.updateName,color:c.storage.updateColor});const e=(0,d.getImageCar)(c.storage.updateColor);t&&(t.textContent=c.storage.updateName),(null==n?void 0:n.innerHTML)&&(n.innerHTML=e.innerHTML)}))},b=()=>{const e=document.querySelectorAll(".wrap-car");let t=[];e.forEach((e=>{t.push(e.id.slice(3))}));const n=(0,i.startCars)(t);Promise.all(n).then((e=>Promise.all(e.map((e=>e.json()))))).then((e=>e.forEach(((e,n)=>{(0,l.moveCar)(t[n],e.velocity)}))))},y=()=>r(void 0,void 0,void 0,(function*(){const e=document.querySelector(".wrap-car");let t="";e&&(t=e.id.slice(3));const n=document.querySelectorAll(".start-car"),r=document.querySelectorAll(".stop-car"),o=document.querySelectorAll(".car-icon");(yield(0,i.startStopCar)([{key:"id",value:t},{key:"status",value:"stopped"}]))&&(o.forEach((e=>{const t=e;t.style.transform="translateX(0)",t.style.transition="0s"})),r.forEach((e=>e.setAttribute("disabled",""))),n.forEach((e=>e.removeAttribute("disabled"))))})),E=()=>r(void 0,void 0,void 0,(function*(){const e=document.getElementById("delete");for(let e=0;e<u.ADD_CARS;e+=1){const e=(0,c.getRandomNameCar)(),t=(0,c.getRandomColorHex)();yield(0,i.createCar)({name:e,color:t})}(0,l.renderNumberCarsTitle)(),(0,s.renderGaragePage)(c.storage.numberCurrentPage),0!==(yield(0,i.getCars)()).length&&null!==e&&e.removeAttribute("disabled")})),A=e=>{const t=e.target;(0,s.deleteAllCars)(),c.storage.numberCurrentPage=1,setTimeout((()=>{(0,l.onOffButtonsPage)()}),400),t.setAttribute("disabled",""),function(){r(this,void 0,void 0,(function*(){0===(yield(0,i.getCars)()).length&&(0,l.renderNumberCarsTitle)()}))}()},S=()=>{const e=document.createElement("div");e.classList.add("groupe-controls","race");const t=(0,o.button)("RACE","race"),n=(0,o.button)("RESET","reset"),a=(0,o.button)("GENERATE CARS","generate"),d=(0,o.button)("DELETE CARS","delete");return function(){r(this,void 0,void 0,(function*(){0===(yield(0,i.getCars)()).length&&d.setAttribute("disabled","")}))}(),t.addEventListener("click",b),n.addEventListener("click",y),a.addEventListener("click",E),d.addEventListener("click",A),e.append(t),e.append(n),e.append(a),e.append(d),e};t.getGarageControls=()=>{const e=document.createElement("div");e.classList.add("wrap-garage-control");const t=(()=>{const e=document.createElement("div");e.classList.add("groupe-controls","create");const t=(0,a.input)("inp-name-create"),n=(0,a.inputColor)("inp-color-create"),r=(0,o.button)("CREATE","create");return t.value=c.storage.createName,n.value=c.storage.createColor,t.addEventListener("change",m),n.addEventListener("change",g),r.addEventListener("click",h),e.append(t),e.append(n),e.append(r),e})(),n=(()=>{const e=document.createElement("div");e.classList.add("groupe-controls","update");const t=(0,a.input)("inp-name-update","disabled"),n=(0,a.inputColor)("inp-color-update","disabled"),r=(0,o.button)("UPDATE","update","disabled");return t.value=c.storage.updateName,n.value=c.storage.updateColor,t.addEventListener("change",v),n.addEventListener("change",f),r.addEventListener("click",C),e.append(t),e.append(n),e.append(r),e})(),r=S();return e.append(t),e.append(n),e.append(r),e}},611:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function d(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deleteAllCars=t.renderGaragePage=void 0;const o=n(556),a=n(724),i=n(940),d=n(11);t.renderGaragePage=e=>r(void 0,void 0,void 0,(function*(){const t=document.querySelector(".garage");document.querySelectorAll(".wrap-car").forEach((e=>e.remove()));const n=(e-1)*i.QUANTITY_CARS_PAGE,r=n+i.QUANTITY_CARS_PAGE,c=(yield(0,a.getCars)()).filter(((e,t)=>t>=n&&t<r));for(let e of c)null==t||t.append((0,o.getObjCar)(e));(0,d.onOffButtonsPage)()})),t.deleteAllCars=()=>r(void 0,void 0,void 0,(function*(){const e=document.querySelector(".page-title");(yield(0,a.getCars)()).map((e=>e.id)).forEach((e=>(0,a.deleteCar)(e))),document.querySelectorAll(".wrap-car").forEach((e=>e.remove())),(null==e?void 0:e.children[0])&&(e.children[0].textContent="")}))},55:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function d(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getMain=void 0;const o=n(407),a=n(724),i=n(556),d=n(214),c=n(571),s=n(940),l=n(611),u=n(200),p=()=>{const e=document.createElement("div");e.classList.add("garage");const t=document.createElement("h3"),n=document.createElement("h4");t.classList.add("page-title"),t.textContent="Garage",n.classList.add("number-page"),n.textContent="Page - ";const o=document.createElement("span"),c=document.createElement("span");c.textContent=`${u.storage.numberCurrentPage}`,t.append(o),n.append(c),e.append((0,d.getGarageControls)()),e.append(t),e.append(n);const l=(u.storage.numberCurrentPage-1)*s.QUANTITY_CARS_PAGE,p=l+s.QUANTITY_CARS_PAGE;return r(void 0,void 0,void 0,(function*(){const t=yield(0,a.getCars)(),n=t.filter(((e,t)=>t>=l&&t<p));for(let t of n)e.append((0,i.getObjCar)(t));0!==t.length?o.textContent=` (${t.length})`:o.textContent=""})),e},m=e=>{const t=document.querySelector(".number-page span"),n=e.target;"prev"===n.id?u.storage.numberCurrentPage-=1:"next"===n.id&&(u.storage.numberCurrentPage+=1),(0,l.renderGaragePage)(u.storage.numberCurrentPage),t&&(t.textContent=`${u.storage.numberCurrentPage}`)},v=()=>{const e=document.createElement("div");e.classList.add("footer");const t=(0,o.button)("PREV","prev","disabled"),n=(0,o.button)("NEXT","next");return function(){r(this,void 0,void 0,(function*(){(yield(0,a.getCars)()).length<s.QUANTITY_CARS_PAGE?n.setAttribute("disabled",""):n.removeAttribute("disabled")}))}(),t.addEventListener("click",m),n.addEventListener("click",m),e.append(t),e.append(n),e},g=e=>{const t=e.target,n=document.querySelector(".main");n&&(n.innerHTML=""),"to-garage"===t.id?null==n||n.append(p()):"to-winners"===t.id&&(null==n||n.append((()=>{const e=document.createElement("div");e.classList.add("winners");const t=document.createElement("h3"),n=document.createElement("h4");t.classList.add("page-title"),t.textContent="Winners",n.classList.add("number-page"),n.textContent="Page - ";const r=document.createElement("span"),o=document.createElement("span");return o.textContent=`${u.storage.numberCurrentPage}`,t.append(r),n.append(o),e.append(t),e.append(n),e.append((0,c.getWinnerControls)()),e})()))};t.getMain=()=>{const e=document.createElement("div");e.classList.add("wrap-main");const t=document.createElement("div");t.classList.add("header");const n=(0,o.button)("TO GARAGE","to-garage"),r=(0,o.button)("TO WINNERS","to-winners");t.append(n),t.append(r),t.addEventListener("click",g);const a=document.createElement("div");return a.classList.add("main"),a.append(p()),e.append(t),e.append(a),e.append(v()),e}},571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getWinnerControls=void 0,t.getWinnerControls=()=>{const e=document.createElement("table");e.classList.add("tbl-winners");const t=document.createElement("tr");t.innerHTML="<th>№</th><th>Image of the car</th><th>Name of the car</th><th>Wins number</th><th>Best time in seconds</th>";const n=document.createElement("tr");return n.innerHTML="<td</td><td</td><td</td><td</td><td</td>",e.append(t),e.append(n),e}},274:(e,t,n)=>{e.exports=n.p+"assets/iconcare6c1969f83df99760540.ico"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{n(766),n(204);const e=n(55);alert('Добрый день. Не доделал раздел "Winners", но добавил кнопку "Delete cars", прошу это оценить. Заранее благодарю. :-)'),document.body.append((0,e.getMain)())})()})();
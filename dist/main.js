(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"#header {\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n}\n#form {\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n}\n#current-weather-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 5em;\n}\n#hourly-weather-container {\n  overflow: auto;\n  white-space: nowrap;\n}\n.hourly-weather-card {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\nul {\n  padding: 0;\n  margin-top: 2em;\n}\n#daily-weather-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nli {\n  list-style: none;\n  padding: 1em;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),d=n.n(i),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f="746149ecb44c6b9cbab720bddd6eeee5";document.getElementById("container"),function(e){const t=document.getElementById("container"),n=document.createElement("div");n.id="header";const r=document.createElement("div");r.id="header-icon",r.textContent="X";const o=document.createElement("div");o.id="header-text",o.textContent="Weather",n.appendChild(r),n.appendChild(o),t.appendChild(n);const a=document.createElement("form");a.id="form";const c=document.createElement("input");c.id="search-input";const i=document.createElement("button");i.id="search-button",i.setAttribute("type","button"),a.appendChild(c),a.appendChild(i),t.appendChild(a);const d=document.createElement("div");d.id="current-weather-container";const l=document.createElement("div");l.id="city",l.textContent="Ogulin";const s=document.createElement("div");s.id="current-temperature",s.textContent="8",d.appendChild(l),d.appendChild(s),t.appendChild(d);const u=document.createElement("ul");u.id="hourly-weather-container";for(let e=0;e<=24;e++){const e=document.createElement("li");e.classList="hourly-weather-card";const t=document.createElement("div");t.classList="hourly-weather-time",e.appendChild(t);const n=document.createElement("div");n.classList="hourly-weather-temperature",e.appendChild(n);const r=document.createElement("div");r.classList="hourly-weather-icon",e.appendChild(r);const o=document.createElement("div");o.classList="hourly-weather-humidity",e.appendChild(o),u.appendChild(e)}t.appendChild(u);const p=document.createElement("ul");p.id="daily-weather-container";for(let e=0;e<=7;e++){const t=document.createElement("li");t.classList="daily-weather-card",t.textContent=e,p.appendChild(t)}t.appendChild(p)}();const y=document.getElementById("search-input"),v=document.getElementById("search-button");class g{constructor(e,t,n,r,o){this.currentTemp=e,this.currentHumidity=t,this.currentTime=n,this.hourly=r,this.daily=o}}v.addEventListener("click",(()=>{!async function(e){try{const t=await async function(e){try{const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&exclude=daily&APPID=${f}&units=metric`,{mode:"cors"});return await t.json()}catch{alert("ERROR")}}(e);console.log(t);const n=await async function(e,t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=minutely&appid=${f}`,{mode:"cors"});return await n.json()}catch{alert("ERROR")}}(t.coord.lat,t.coord.lon);console.log(n);const r=new g(n.current.temp,n.current.humidity,n.current.dt,n.hourly,n.daily);!function(e,t){const n=document.getElementById("city"),r=document.getElementById("current-temperature"),o=document.getElementById("current-weather-container");n.textContent=t,r.textContent=e.currentTemp,o.appendChild(n),o.appendChild(r)}(r,t.name),function(e){let t=0;document.querySelectorAll(".hourly-weather-temperature").forEach((n=>{n.textContent=e.hourly[t].temp,t++}))}(r),function(e){let t=0;document.querySelectorAll(".hourly-weather-time").forEach((n=>{var r;n.textContent=(r=e.hourly[t].dt,new Date(1e3*r).getHours()),t++}))}(r),function(e){const t=document.querySelectorAll(".daily-weather-card");let n=0;t.forEach((t=>{t.textContent=e.daily[n].temp.day,n++}))}(r),console.log(r)}catch{console.log("processWeatherData Error!")}}(y.value)}))})()})();
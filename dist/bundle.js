!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(5),n(6);var r=function(t){for(var e=document.querySelectorAll(".div_menu"),n=0;n<e.length;n++)e[n].style.display="none";""!=t&&("menu_sembako"==t?alert("Maaf menu ini belum tersedia"):document.getElementById(t).style.display="block")};r("menu_pemeteaan"),window.SwitchMenu=r,fetch("https://api.kawalcorona.com/indonesia/",{credentials:"same-origin",headers:{"Content-Type":"application/json","X-Auth-Token":"12345"}}).then((function(t){return alert(JSON.stringify(t)),t.json()})).then((function(t){alert("msg"),document.getElementById("lbl_positif").innerHTML=t[0].positif,document.getElementById("lbl_sembuh").innerHTML=t[0].sembuh,document.getElementById("lbl_meninggal").innerHTML=t[0].meninggal,console.log(t)})).catch((function(t){console.log(t)})),fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/layanan").then((function(t){return t.json()})).then((function(t){for(var e=0;e<t.length;e++){var n=document.createElement("customelement-card-item");n.setAttribute("src",t[e].cover),n.setAttribute("caption",t[e].caption),n.setAttribute("desc",t[e].desc),n.className="col-md-3 mb-2",document.getElementById("main_data_layanan").appendChild(n)}})).catch((function(t){console.log(t)})),fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/berita").then((function(t){return t.json()})).then((function(t){for(var e=0;e<t.length;e++){var n=document.createElement("customelement-card-item");n.setAttribute("src",t[e].img),n.setAttribute("caption",t[e].title),n.setAttribute("desc",t[e].desc),n.className="col-md-3 mb-2",document.getElementById("main_data_berita").appendChild(n)}})).catch((function(t){console.log(t)})),fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/tips").then((function(t){return t.json()})).then((function(t){for(var e=t.gejala,n=0;n<e.length;n++)(c=document.createElement("customelement-card-item")).setAttribute("src",e[n].img),c.setAttribute("caption",e[n].title),c.setAttribute("desc",e[n].desc),c.className="col-md-3 mb-2",document.getElementById("main_data_gejala").appendChild(c);for(var r=t.jenis_pasien,o=0;o<r.length;o++){var c;(c=document.createElement("customelement-card-item")).setAttribute("src",r[o].img),c.setAttribute("caption",r[o].title),c.setAttribute("desc",r[o].desc),c.className="col-md-3 mb-2",document.getElementById("main_data_jenis_pasien").appendChild(c)}})).catch((function(t){console.log(t)})),fetch("https://my-json-server.typicode.com/gandatadyo/data-dummy/kegiatan").then((function(t){return t.json()})).then((function(t){for(var e=0;e<t.length;e++){var n=document.createElement("customelement-card-item");n.setAttribute("caption",t[e].title),n.setAttribute("desc",t[e].desc),n.className="col-md-3 mb-2",document.getElementById("main_data_kegiatan").appendChild(n)}})).catch((function(t){console.log(t)}))},function(t,e,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var c={insert:"head",singleton:!1},i=(r(o,c),o.locals?o.locals:{});t.exports=i},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],u=e.base?c[0]+e.base:c[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:h(p,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=c(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var c=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(c,i[e]):t.appendChild(c)}}function d(t,e,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),c&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,y=0;function h(t,e){var n,r,o;if(e.singleton){var c=y++;n=m||(m=s(e)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else n=s(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=u(t,e),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,"",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),c=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(c).concat([o]).join("\n")}var i,a,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function a(t,e,n){return(a=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(p,t);var e,n,i,a,f=(e=p,function(){var t,n=l(e);if(u()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function p(){return r(this,p),f.apply(this,arguments)}return n=p,(i=[{key:"connectedCallback",value:function(){this.src=this.getAttribute("src")||null,this.caption=this.getAttribute("caption")||null,this.desc=this.getAttribute("desc")||null,this.innerHTML='\n            <div class="card">\n                <div class="card-body">\n                    <img src="'.concat(this.src,'" alt="" style="width: 100%;height: 150px;object-fit: cover;">\n                    <h5 class="card-title mt-3">').concat(this.caption,"</h5>\n                    <P>").concat(this.desc,"</P>\n                </div>\n            </div>\n        ")}}])&&o(n.prototype,i),a&&o(n,a),p}(i(HTMLElement));customElements.define("customelement-card-item",f)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function a(t,e,n){return(a=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(p,t);var e,n,i,a,f=(e=p,function(){var t,n=l(e);if(u()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return c(this,t)});function p(){return r(this,p),f.apply(this,arguments)}return n=p,(i=[{key:"connectedCallback",value:function(){this.src=this.getAttribute("src")||null,this.caption=this.getAttribute("caption")||null,this.desc=this.getAttribute("desc")||null,this.innerHTML='\n            <div class="card">\n                <div class="card-body">\n                    <img src="'.concat(this.src,'"\n                        style="width: 100%;max-height: 200px;border-top-left-radius: 10px;border-top-right-radius: 10px;object-fit: cover;"\n                        alt="">\n                    <div style="padding: 10px 20px;">\n                        <h3><b>').concat(this.caption,"</b></h3>\n                        <P>").concat(this.desc,"</P>\n                    </div>\n                </div>\n            </div>\n        ")}}])&&o(n.prototype,i),a&&o(n,a),p}(i(HTMLElement));customElements.define("customelement-card-news",f)}]);
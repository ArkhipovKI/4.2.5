!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);function r(e,t,n,r,o,c,i){try{var a=e[c](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var i=e.apply(t,n);function a(e){r(i,o,c,a,u,"next",e)}function u(e){r(i,o,c,a,u,"throw",e)}a(void 0)}))}}var c=document.getElementById("mySearch"),i=document.querySelector("body"),a=document.createElement("div");a.className="autocomplite-wrap",c.parentNode.insertBefore(a,c),a.appendChild(c);var u,s=document.querySelector(".autocomplite-list");function l(){s.innerHTML=""}a.appendChild(s);var d,p,m,f=function(e){e.forEach((function(e){var t=e.name,n=e.owner,r=e.stargazers_count,o=document.createElement("li");o.className="autocomplite-item",o.innerText=t,o.addEventListener("click",(function e(a){if(a.target===o){var u=document.createElement("div"),d=document.createElement("div");d.className="images-block",u.className="added-block",u.appendChild(d);var p=document.createElement("div"),m=document.createElement("IMG"),f=document.createElement("IMG");m.src="img/Vector_7.png",f.src="img/Vector_8.png",m.className="crossRight",f.className="crossLeft",d.appendChild(m),d.appendChild(f),d.addEventListener("click",(function e(t){u.remove(),this.removeEventListener("click",e)})),p.className="inner-block",u.appendChild(p);var v="Name: ".concat(t)+"<br >"+"Owner: ".concat(n.login)+"<br >"+"Stars: ".concat(r);p.innerHTML+=v,i.appendChild(u),c.value="",s.setAttribute("style","display:none"),this.removeEventListener("click",e),l()}})),s.appendChild(o)}))},v=(d=function(e){return h.apply(this,arguments)},p=300,function(){var e=arguments,t=this;clearTimeout(m),m=setTimeout((function(){return d.apply(t,e)}),p)});function h(){return(h=o(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(),s.setAttribute("style","display:block"),""!==(n=t.target.value).trim()){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch("https://api.github.com/search/repositories?q=".concat(n,"in:name&per_page=5&sort=stars"));case 7:return r=e.sent,e.next=10,r.json();case 10:u=e.sent.items,f(u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.addEventListener("input",v)},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map
!function(){"use strict";var t=document.querySelector(".content"),e=document.querySelector(".js-restart");t.insertAdjacentHTML("beforeend",r()),t.addEventListener("click",(function(t){t.target.textContent?alert("Change!"):(t.target.textContent=n,n="X"===n?"O":"X")})),e.addEventListener("click",(function(){n="X",t.innerHTML=r()}));var n="X";function r(){for(var t="",e=1;e<=9;e+=1)t+='<div class="item" data-id="'.concat(e,'"></div>');return t}}();
//# sourceMappingURL=goit-test-08-016.3abbf992.js.map
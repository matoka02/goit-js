!function(){"use strict";var e=document.querySelector(".session"),o=document.querySelector(".local"),l=document.querySelector(".remove");e.addEventListener("click",(function(){try{var e=JSON.parse(localStorage.getItem("local"));if(e.length<2)throw new Error("Array is empty");console.log(e),e.forEach((function(e){console.log(e)}))}catch(e){console.log(e)}finally{console.log("hello world")}}));var t=[1,2,3,4];o.addEventListener("click",(function(){localStorage.setItem("local","arr"),localStorage.setItem("local-01",JSON.stringify(t)),localStorage.setItem("local-02",JSON.stringify(t))})),l.addEventListener("click",(function(){localStorage.clear()}))}();
//# sourceMappingURL=goit-test-08-016.7e4f972e.js.map

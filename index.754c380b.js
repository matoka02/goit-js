!function(){"use strict";var t={staticItems:document.querySelectorAll(".js-item"),dynamicItems:document.getElementsByClassName("js-item"),ul:document.querySelector("ul")},i=[{id:1,car:"Honda",type:"Civic",price:12e3,img:"https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"},{id:2,car:"Audi",type:"QT",price:4e4,img:"https://images.unsplash.com/photo-1623776025811-fd139155a39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"},{id:3,car:"BMW",type:"5 siries",price:9e3,img:"https://images.unsplash.com/photo-1562965795-16cb921c6c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=825&q=80"},{id:4,car:"Honda",type:"Accord",number:"+380958752729",price:2e4,img:"https://images.unsplash.com/photo-1468679950062-7f9630082231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"},{id:5,car:"Volvo",type:"X6",price:7e3,img:"https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"}],e=document.querySelector(".js-list"),c=i.reduce((function(t,i){var e=i.car,c=i.type,o=i.price,a=i.img,r=i.id;return t+'<li data-id="'.concat(r,'">\n<img src="').concat(a,'" alt="').concat(c,'">\n<h2>Марка: ').concat(e,"</h2>\n<h2>Модель: ").concat(c,"</h2>\n<p>Цена: ").concat(o,"</p>\n</li>")}),"");e.insertAdjacentHTML("beforeend",c);var o=document.querySelectorAll("li");o.forEach((function(t){return t.style.width="300px"})),console.log(o),t.ul.insertAdjacentHTML("beforeend",c),t.ul.addEventListener("click",(function(t){if(t.target.closest("li")){var e=t.target.closest("li").dataset.id,c=i.find((function(t){return t.id===Number(e)}));console.log(c)}}))}();
//# sourceMappingURL=index.754c380b.js.map

!function(){"use strict";var t=document.querySelector(".js-search"),n=document.querySelector(".js-list"),e="http://api.weatherapi.com/v1/forecast.json",c="0f1a18797cc1430781a80508232606";t.addEventListener("submit",(function(t){t.preventDefault();var o=t.currentTarget.elements,a=o.query.value,r=o.days.value;if(!a)return void alert("Empty field");(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Kiev",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"7";return fetch("".concat(e,"?key=").concat(c,"&q=").concat(t,"&days=").concat(n)).then((function(t){if(console.log(t),!t.ok)throw new Error(t.statusText);return t.json()})).catch((function(t){return console.error(t)}))})(a,r).then((function(t){var e,c;console.log(t.forecast.forecastday),e=t.forecast.forecastday,c=e.map((function(t){return'<li>\n    <img src="'.concat(t.day.condition.icon,'" alt="">\n    <span>').concat(t.day.condition.text,"</span>\n    <h2>Day: ").concat(t.date,"</h2>\n    <h3>Temperature: ").concat(t.day.avgtemp_c,"&#8451;</h3>\n    </li>")})).join(""),n.innerHTML=c}))}))}();
//# sourceMappingURL=goit-test-10-019.986a413f.js.map
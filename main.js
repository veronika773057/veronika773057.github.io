var calculator = document.getElementById("calcBlock"); 

var services = [ 
{ 
name: "разработать дизайн", 
price: 7000 
}, 
{ 
name: "сверстать сайт", 
price: 3000 
}, 

{ 
name: "добавить электронные продажи", 
price: 5000 
}, 
{ 
name: "добавить функционал", 
price: 7000 
}, 
{ 
name: "разработать логику приложения", 
price: 20000 
}, 
{ 
name: "создать базу данных", 
price: 5000 
}, 
{ 
name: "публикация сайта", 
price: 3000 
}, 
{ 
name: "поддержка сайта", 
price: 2000 
} 
]; 
var navButtons = document.getElementsByClassName('navButton');
var container = document.getElementById("container");
var miniContainers = document.getElementsByClassName("miniCon");
var result = document.getElementById('result');
// навигационное меню
for(var i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener('click', ChangeNav.bind(event))
}

function ChangeNav(event) {
	for(var i = 0; i < miniContainers.length; i++)
		miniContainers[i].style.display = "none";
	container.getElementsByClassName(event.target.id)[0].style.display = "block";
}

// калькулятор

for(var i=0; i< services.length;i++){ 
	calculator.innerHTML+=`<div><input class="setPrice" data-price=${services[i].price} type="checkbox">${services[i].name} ${services[i].price}</div><br>` 
	console.log(services[i].name)

} 
var sum = 0;
for(var c = 0; c < document.getElementsByClassName("setPrice").length; c++)
	document.getElementsByClassName('setPrice')[c].onclick = function(e) {
		sum += parseInt(e.target.dataset.price);
		result.innerHTML = "Сумма услуг: " + sum;
	}
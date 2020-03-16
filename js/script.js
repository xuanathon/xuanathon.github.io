document.addEventListener('DOMContentLoaded', function(){
	// console.log('finished loading');

	var burger = document.getElementById('burger'),
		navMenu = document.getElementById('nav-overlay');

	burger.onclick = function() {
		navMenu.classList.toggle('open');
	}


	document.getElementById('current-year').innerText = new Date().getFullYear();
});




// burger.addEventListener('click', function(){
// 	// console.log('clicked burger');
// 	navMenu.toggleClass('open');
//
// 	classList
// });

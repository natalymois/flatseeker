/*----------------------------- выпадающее меню main-navigation------------------------------*/

var mediaMenu = document.getElementById ('mediaMenu'); // mediaMenu == div.responsive-centerfix
var menuA = mediaMenu.getElementsByTagName('a')[0];

var mediaTopMenu = document.getElementsByClassName('hidden-top')[0];
var menuTopA = mediaTopMenu.getElementsByTagName('a')[0];

if (window.innerWidth <= 750) {
	mediaMenu.onclick = function() {
		this.classList.toggle('responsive');
		menuA.classList.toggle('responsive');
	}
	mediaTopMenu.onclick = function() {
		this.classList.toggle('responsive');
		menuTopA.classList.toggle('responsive');
	}
}
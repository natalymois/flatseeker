$(function() {
  $("#price-range").slider({
  range: true,
  min: 7000, 
  max: 11000000, 
  values: [7000, 11000000],
  slide: function(event, ui) {
  $("#price-min").val(ui.values[0]);
  $("#price-max").val(ui.values[1]);
  }
  });
  $("#price-min").val($("#price-range").slider("values", 0));
  $("#price-max").val($("#price-range").slider("values", 1));
  
});

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
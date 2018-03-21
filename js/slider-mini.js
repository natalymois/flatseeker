$(document).ready(function() {
  $("#mini-slider-1").makeSlider({
    time: 6000,
	dots: false,
  });
  $("#mini-slider-2").makeSlider({
    time: 6000,
    dots: false,
    control: true,
    autoplay: true,
  });
  $("#mini-slider-3").makeSlider({
	time: 6000,
	dots: false,
	control: true,
	autoplay: true,
  });
  $("#mini-slider-4").makeSlider({
    time: 6000,
    dots: false,
    control: true,
    autoplay: true,
  });
  $("#mini-slider-5").makeSlider({
    time: 6000,
    dots: false,
    control: true,
    autoplay: true,
  });
  $("#mini-slider-6").makeSlider({
    time: 6000,
    dots: false,
    control: true,
    autoplay: true,
  });
  $("#mini-slider-7").makeSlider({
    time: 6000,
    dots: false,
    control: true,
    autoplay: true,
  });
  $("#mini-slider-8").makeSlider({
    time: 6000,
    dots: false,
    control: true,
    autoplay: true,
  });
});
	/*$("#mini-slider-2").hover(function(){
		 $.fn.makeSlider = function(options){
		 settings.autoplay == false;
		 }  
	}, $.fn.makeSlider = function(options){
	   
    settings.autoplay == true;

	}
);*/

(function($) {
  $.fn.makeSlider = function(options) {

    var settings = $.extend({  //Объединяет содержимое двух или более объектов - Имитация наследования в объектно-ориентированных языках программирования
      //time: 5000,
      dots: true,
      control: true,
      autoplay: true
    }, options);

    var mySlider = this;
    var slideTimer;
    var listOfSlides = mySlider.find(".carousel .item").toArray();
    var nowSlide = listOfSlides[0];
    var listaInd = mySlider.find(".carousel-tab li").toArray();
    var currentInd = listaInd[0];
    var nextSlide;
    var index = 0;
	var maxIndex = 7;

    function checkIndex() {
      if (index < maxIndex) {
        index++;
        nextSlide = listOfSlides[index];
        nextInd = listaInd[index];
      } else {
        index = 0;
        nextSlide = listOfSlides[0];
        nextInd = listaInd[0];
      }
    }

    function doTransition() {
      mySlider.find(".carousel .item").each(function() {
        if ($(this).hasClass("active")) {
          $(this).fadeIn(1000); /*время исчезновения картинки*/
        } else {
          $(this).fadeOut(1000); /*время появления картинки*/
        }
      });
    }

    function pushSlide() {
      $(nowSlide).removeClass("active");
      $(nextSlide).addClass("active");
      currentInd.removeClass('active');
      $(nextInd).addClass("active");
      doTransition();
    }

    function slide() {
      nowSlide = mySlider.find(".carousel .item.active");
      currentInd = mySlider.find(".carousel-tab li.active");
      checkIndex();
      pushSlide();
    }

    if (settings.control == true) {

      mySlider.find('.control_next').click(function() {
        clearInterval(slideTimer);
        slideTimer = window.setInterval(slide, settings.time);
        currentInd = mySlider.find(".carousel-tab li.active");
        checkIndex();
        mySlider.find(".carousel .item").removeClass('active');
        pushSlide();
      });

      mySlider.find('.control_prev').click(function() {
        clearInterval(slideTimer);
        slideTimer = window.setInterval(slide, settings.time);
        currentInd = mySlider.find(".carousel-tab li.active");
        if (index > 0) {
          index--;
          nextSlide = listOfSlides[index];
          nextInd = listaInd[index];
        } else {
          index = maxIndex;
          nextSlide = listOfSlides[maxIndex];
          nextInd = listaInd[maxIndex];
        }
        mySlider.find(".carousel .item").removeClass('active');
        pushSlide();
      });
    } else {
      mySlider.find(".control").hide();
    }

        mySlider.find('.carousel-tab').each(function() {
          var $a = $(this).find('li');
          $a.on('click', function(e) {

            if (settings.dots == true) {

            mySlider.find('.carousel .item.active').hide();
            clearInterval(slideTimer);
            slideTimer = window.setInterval(slide, settings.time);
            var $this = $(this);

            var href = $this.attr('data-slide-to');

            var $target = mySlider.find(".carousel").find('.item');

            if ($target.length) {
              e.preventDefault();

              $this.siblings('li').removeClass('active');

              $this.addClass('active');

              $target.siblings('.item').removeClass('active');
              $target.addClass('active').fadeIn('slow');
            }
            }
          });
        });
      


    $(document).ready(function() {
      index = 0;

      if (settings.autoplay == true) {
        slideTimer = window.setInterval(slide, settings.time);
        doTransition();
      } else {
        mySlider.find(".item").hide();
        mySlider.find(".item.active").show();
      }

    if (settings.dots != true)  {
        mySlider.find(".carousel-tab").hide();
      }

    });
  }
}(jQuery));
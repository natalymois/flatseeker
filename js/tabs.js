$(function(){

/* Переключение вкладок (раскрывающихся списков select) при выборе позиции из родительского раскрывающегося списка
<select id="rent-sale" ...> :*/

 $('#rent-sale_r').change(function(){
     var myTabs = $(':selected').val();
	 if(myTabs == 1) {
	   $('.rent_r').css('display','none');
	   $('.sale_r').css('display','none');
	 }
	 else if(myTabs == 2){
	   
	   $('.rent_r').css('display','block');
	   $('.sale_r').css('display','none');
	 }
	 
	 else if(myTabs == 3){
	  
	   $('.rent_r').css('display','none');
	   $('.sale_r').css('display','block');
	 }
	 
  });
 $('#rent-sale_c').change(function(){
     var myTabsCom = $(':selected').val();
	 if(myTabsCom == 1) {
	   $('.rent_c').css('display','none');
	   $('.sale_c').css('display','none');
	 }
	 else if(myTabsCom == 2){
	   
	   $('.rent_c').css('display','block');
	   $('.sale_c').css('display','none');
	 }
	 
	 else if(myTabsCom == 3){
	  
	   $('.rent_c').css('display','none');
	   $('.sale_c').css('display','block');
	 }
	 
  });  
   
  });  // Конец ready
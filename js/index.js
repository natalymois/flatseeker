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


$("li").click(function(){
  // Convert "this" into a jQuery object and assign it to a variable with name $this
  var $this = $(this);

  // Get the color from id
  var color = $this.attr('id');

  // Get the background color
  $('body').css('background-color', color);
});
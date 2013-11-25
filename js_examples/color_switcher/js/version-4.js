$("#gray").click(function(){
  switchColor('gray')
});

$("#white").click(function(){
  switchColor('white')
});

$("#blue").click(function(){
  switchColor('blue')
});

$("#yellow").click(function(){
  switchColor('yellow')
});

function switchColor(color) {
  $('body').css('background-color', color);
}
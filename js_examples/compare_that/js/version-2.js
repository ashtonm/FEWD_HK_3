$('#submit').click(function(){
  var a = $('#a').val();
  var b = $('#b').val();
  if (a < b) {
    $('#comparison').text('<')
  } else if (a > b) {
    $('#comparison').text('>')
  } else if (a == b) {
    $('#comparison').text('=')
  }
});
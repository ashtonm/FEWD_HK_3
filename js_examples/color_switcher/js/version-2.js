document.getElementById('gray').onclick = function () { switchColor('gray'); }
document.getElementById('white').onclick = function () { switchColor('white'); }
document.getElementById('blue').onclick = function () { switchColor('blue'); }
document.getElementById('yellow').onclick = function () { switchColor('yellow'); }

function switchColor(color) {
  document.getElementsByTagName('body')[0].style.backgroundColor = color; 
}

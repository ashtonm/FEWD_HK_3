document.getElementById('gray').onclick = switchGray;
document.getElementById('white').onclick = switchWhite;
document.getElementById('blue').onclick = switchBlue;
document.getElementById('yellow').onclick = switchYellow;

function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'; 
}

function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white'; 
}

function switchBlue() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'; 
}

function switchYellow() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'; 
}

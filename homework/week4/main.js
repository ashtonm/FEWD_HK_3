var total = 0;

document.getElementById('convertf').onclick = convertf;

    var celsius = document.getElementById('num1').value;
    var fahrenheit = document.getElementById('num2').value;
 
function convertf() {
  total = (fahrenheit - 32) *  5 /9 ;

  document.getElementById("num1").value = total;
}


document.getElementById('convertc').onclick = convertc;

 
function convertc() {
  total = celsius * 9/5 + 32;

  document.getElementById("num2").value = total;
}


/*
    °C  x   = °F

(°F  -  32)  x  5/9 = °C


function convertCelsiusToFarhenheit(celsius){
	var farhenheit = 9/5 * celsius + 32
	return farhenheit; 
}

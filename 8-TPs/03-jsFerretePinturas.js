/*Pereyra Ian DIV D
  TPs 03
*/

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var temperaturaTransformada;

	temperaturaIngresada = document.getElementById('txtIdTemperatura').value;

	temperaturaIngresada = parseInt(temperaturaIngresada);

	temperaturaTransformada = (temperaturaIngresada - 32) * 5/9;

	alert(temperaturaIngresada + " Fahrenheit son " + temperaturaTransformada.toFixed(2) + " centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
	var temperaturaTransformada;

	temperaturaIngresada = document.getElementById('txtIdTemperatura').value;

	temperaturaIngresada = parseInt(temperaturaIngresada);

	temperaturaTransformada = (temperaturaIngresada * 9/5) + 32;

	alert(temperaturaIngresada + " centígrados son " + temperaturaTransformada.toFixed(2) + " Fahrenheit");
}

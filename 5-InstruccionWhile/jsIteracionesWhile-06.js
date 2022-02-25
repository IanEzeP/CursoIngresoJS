/* Pereyra Ian 
Div D While 06
*/
/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	
	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
	}
	
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador / 5;
}
/*Pereyra Ian 
Div D For 07
*/
/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{
	var numeroPedido;
	var numeroDivisor;
	var contadorDivisor;

	contadorDivisor = 0;
	numeroPedido = prompt("Ingrese un numero:");
	numeroPedido = parseInt(numeroPedido);
	
	for(var i=1; i<=numeroPedido; i++)
	{
		numeroDivisor = numeroPedido % i;	
		if(numeroDivisor == 0)
		{
			document.write(i + "<br>");
			contadorDivisor++;
		}
	}

	document.write("La cantidad de numeros divisores encontrados es " + contadorDivisor + "<br>");
}
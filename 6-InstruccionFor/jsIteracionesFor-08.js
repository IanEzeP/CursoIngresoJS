/*Pereyra Ian 
Div D For 08
*/
/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

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
			contadorDivisor++;
		}
	}

	if(contadorDivisor == 2)
	{
		document.write("Es un numero primo.");
	}
	else
	{
		document.write("No es un numero primo.");
	}

}
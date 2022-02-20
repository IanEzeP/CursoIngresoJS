/* Pereyra Ian 
Div D While 09
*/
/*Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	banderaDelPrimero = "es el primero";
	respuesta = 'si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt('Ingrese un número');
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{
			banderaDelPrimero = "ya no es el primero";
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = prompt("¿Desea continuar? (si o no)");

		if(respuesta != 'si' && respuesta != 'no')
		{
			respuesta = prompt("Respuesta invalida, ¿Desea continuar?  (si o no)");
		}
	}

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}
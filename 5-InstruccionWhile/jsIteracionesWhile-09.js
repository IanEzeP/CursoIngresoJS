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
	
	banderaDelPrimero = false;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt('Ingrese un número');
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == false)
		{
			banderaDelPrimero = true;
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

		respuesta = confirm("¿Desea continuar?");
	}

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;

	/*if(numeroIngresado < numeroMinimo || banderaDelPrimero == false)
	{
		numeroMinimo = numeroIngresado;
	}
	if(numeroIngresado > numeroMaximo || banderaDelPrimero == false)
	{
		numeroMaximo = numeroIngresado;
		banderaDelPrimero = true;
	}*/
}
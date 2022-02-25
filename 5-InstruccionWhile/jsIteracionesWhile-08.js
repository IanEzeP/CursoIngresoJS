/* Pereyra Ian 
Div D While 08
*/
/*Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt('Ingrese un número entero');
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > -1)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = confirm('¿Desea ingresar otro numero?');
	}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}
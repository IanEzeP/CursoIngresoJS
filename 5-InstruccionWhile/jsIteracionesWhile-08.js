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
	respuesta = 'si';

	while(respuesta == 'si')
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

		respuesta = prompt('¿Desea ingresar otro numero? (si o no)');

		if(respuesta != 'si' && respuesta != 'no')
		{
			respuesta = prompt('Respuesta invalida. ¿Desea ingresar otro numero? (si o no)');
		}
	}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}
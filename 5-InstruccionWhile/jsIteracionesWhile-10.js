/* Pereyra Ian 
Div D While 10
*/
/*Al presionar el botón pedir  números hasta que el usuario quiera, 
mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */

function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var calculoPar;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var acumuladorDeCeros = 0;
	var acumuladorDePares = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt('Ingrese un numero:');
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado == 0)
		{
			acumuladorDeCeros++;
		}
		else
		{	
			if(numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				acumuladorNegativos++;
			}
			else
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				acumuladorPositivos++;
			}
		}

		calculoPar = numeroIngresado % 2;
		if(calculoPar == 0)
		{
			acumuladorDePares++;
		}

		respuesta = prompt("¿Desea continuar? (si o no)");
		if(respuesta != 'si' && respuesta != 'no')
		{
			respuesta = prompt("Respuesta invalida, ¿Desea continuar? (si o no)");
		}
	}

	promedioPositivos = sumaPositivos / acumuladorPositivos;
	promedioNegativos = sumaNegativos / acumuladorNegativos;
	diferenciaPositivosNegativos = sumaPositivos + sumaNegativos;

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de positivos es: " + acumuladorPositivos + "<br>");
	document.write("La cantidad de negativos es: " + acumuladorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + acumuladorDeCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + acumuladorDePares + "<br>");
	document.write("El promedio de los numeros postivos es: " + promedioPositivos + "<br>");
	document.write("El promedio de los numeros negativos es: " + promedioNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos: " + diferenciaPositivosNegativos); 
}


	/*switch(numeroIngresado)
	{
		case 0:
			acumuladorDeCeros++;
			break;
		default:
			if(numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				acumuladorNegativos++;
			}
			else
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				acumuladorPositivos++;
			}
			break;
	}*/
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
9-Diferencia entre positivos y negativos, (positivos-negativos).
10- De los positivos el mas grande.
11- De los negativos el mas chico. */

function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var calculoPar;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	/*var banderaPositivoMax;
	var banderaNegativoMin;*/
	var numeroMaximoPositivo;
	var numeroMinimoNegativo;

	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorDeCeros = 0;
	var contadorDePares = 0;

	respuesta = true;
	/*banderaPositivoMax = true;
	banderaNegativoMin = true;*/

	while(respuesta == true)
	{
		numeroIngresado = prompt('Ingrese un número:');
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt('Por favor ingrese un número:');
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado; //sumaPositivos +=numeroIngresado
			contadorPositivos++;

			if(contadorPositivos == 1 || numeroIngresado > numeroMaximoPositivo)
			{
				numeroMaximoPositivo = numeroIngresado;
			}
		}
		else
		{	
			if(numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado; //sumaNegativos +=numeroIngresado
				contadorNegativos++;

				if(contadorNegativos == 1 || numeroIngresado < numeroMinimoNegativo)
				{
					numeroMinimoNegativo = numeroIngresado;
				}
			}
			else
			{
				contadorDeCeros++;
			}
		}

		calculoPar = numeroIngresado % 2;
		if(calculoPar == 0)
		{
			contadorDePares++;
		}

		respuesta = confirm("¿Desea continuar?");
	}
	
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorDeCeros + "<br>");
	document.write("La cantidad de números pares es: " + contadorDePares + "<br>");
	if(contadorPositivos>0)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
		document.write("El promedio de los números positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("El promedio de los números positivos no se pudo calcular." + "<br>");
	}

	if(contadorNegativos>0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
		document.write("El promedio de los números positivos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("El promedio de los números negativos no se pudo calcular." + "<br>");
	}
	document.write("La diferencia entre positivos y negativos: " + diferenciaPositivosNegativos + "<br>");
	document.write("El maximo de los numeros positivos es " + numeroMaximoPositivo + "<br>"); 
	document.write("El minimo de los numeros negativos es " + numeroMinimoNegativo );
}


	/*switch(numeroIngresado)
	{
		case 0:
			contadorDeCeros++;
			break;
		default:
			if(numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativos++;
			}
			else
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;
			}
			break;
	}*/
	/*if(numeroIngresado < numeroMinimoNegativo || banderaNegativoMin == true)
		{
			numeroMinimoNegativo = numeroIngresado;
			banderaNegativoMin = false;
		}
		if(numeroIngresado > numeroMaximoPositivo || banderaPositivoMax == true)
		{
			numeroMaximoPositivo = numeroIngresado;
			banderaPositivoMax = false;
		}*/
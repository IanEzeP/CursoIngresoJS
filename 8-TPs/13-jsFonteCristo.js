/* Pereyra Ian 
Div D TPs 13
*/
/*El departamento de NUMEROS ESPECIALES  del instituto matemático FonteCristo 
 nos está pidiendo una aplicación que verifique las distintas cualidades de los números.
13.	Para cada una de estas acciones debemos realizar la lógica para verificar las cualidades pedidas:
A. Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
B. Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
C. Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
D. Se pedirán un número positivo y se mostrará si el número es un número primo o no.
E. Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/


function NumerosPares()
{
	var numeroIngresado;
	var i;
	var numeroPar;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);

	for(i=numeroIngresado; i>=0; i--)
	{
		numeroPar = i % 2;	
		if(numeroPar == 0)
		{
			document.write(i + "<br>");
			
		}
	}
	
}

function NumerosImpares()
{
	var numeroIngresado;
	var i;
	var numeroImpar;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);

	for(i=numeroIngresado; i>=0; i--)
	{
		numeroImpar = i % 2;	
		if(numeroImpar == 1)
		{
			document.write(i + "<br>");
			
		}
	}
}

function NumerosDivisibles()
{
	var numeroIngresado;
	var numeroDivisor;
	var i;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);

	for(i=1; i<=100; i++)
	{
		numeroDivisor = numeroIngresado % i;	
		if(numeroDivisor == 0)
		{
			document.write(i + "<br>");

		}
	}
}

function VerificarPrimo()
{
	var numeroIngresado;
	var numeroDivisor;
	var contadorDivisor;

	contadorDivisor = 0;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);
	
	for(var i=1; i<=numeroIngresado; i++)
	{
		numeroDivisor = numeroIngresado % i;	
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

function NumerosPrimos()
{
	var numeroIngresado;
	var i;
	var j;
	var numeroDivisor;
	var contadorDivisor;

	contadorDivisor = 0;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);
	
	for(i=numeroIngresado; i>=0; i--)
	{
		for(j=1; j<=i; j++)
		{
			numeroDivisor = i % j;	
			if(numeroDivisor == 0)
			{
				contadorDivisor++;
			}
		}
		if(contadorDivisor == 2)
		{
			document.write(i + "<br>");
		}
		contadorDivisor = 0;
	}
}


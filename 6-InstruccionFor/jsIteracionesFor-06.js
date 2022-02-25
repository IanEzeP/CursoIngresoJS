/*Pereyra Ian 
Div D For 06*/
/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1
 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	var numeroPedido;
	var numeroPar;
	var contadorPar;

	contadorPar = 0;
	numeroPedido = prompt("Ingrese un numero:");
	numeroPedido = parseInt(numeroPedido);

	for(var i=1; i<=numeroPedido; i++)
	{
		numeroPar = i % 2;	
		if(numeroPar == 0)
		{
			document.write(i + "<br>");
			contadorPar++;
		}
	}
	
	document.write("Cantidad de numeros pares:" + contadorPar + "<br>");
}
/*Pereyra Ian 
Div D For 03*/
/*al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar()
{
	var repeticiones = prompt("ingrese el número de repeticiones");

	for(var i=0; i<repeticiones; i++)
	{
		document.write("Hola UTN FRA <br>");
	}


}
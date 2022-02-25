/*Pereyra Ian 
Div D For 04*/
/*al presionar el botón repetir hasta que utilizamos 'BREAK'.*/

function mostrar()
{
	var repeticiones;

	for(;;)
	{
		alert("Hola");
		repeticiones = prompt("Desea ver el mensaje nuevamente? (si o no)");

		if(repeticiones == 'no')
		{
			break;
		}

	}

}
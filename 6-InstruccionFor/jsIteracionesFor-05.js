/*Pereyra Ian 
Div D For 05*/
/*al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/

function mostrar()
{
	var repeticiones;

	for(;;)
	{
		repeticiones = prompt("Ingrese un número:");
		repeticiones = parseInt(repeticiones);
		//alert(repeticiones);

		if(repeticiones == 9)
		{
			break;
		}
	}

}
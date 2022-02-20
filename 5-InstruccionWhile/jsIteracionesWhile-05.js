/* Pereyra Ian 
Div D While 05
*/
/*Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese 'F' ó 'M'.");

	while(sexoIngresado != 'F' && sexoIngresado != 'M')
	{
		sexoIngresado = prompt("Opcion invalida, por favor ingrese `F´ ó `M´ .");
	}

	if(sexoIngresado == 'M')
	{
		sexoIngresado = "Masculino";
	}
	else
	{
		sexoIngresado = "Femenino";
	}

	document.getElementById('txtIdSexo').value = sexoIngresado;
	
}
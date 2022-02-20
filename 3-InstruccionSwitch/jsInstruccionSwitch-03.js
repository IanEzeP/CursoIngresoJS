/* Pereyra Ian
Div D SWITCH 03
*/
/* al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"*/

function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;
	//En este caso, usar un if-else seria lo mas optimo.
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;

		default:
			mensaje = "Este mes tiene 30 o más días";
			break;
	}

	alert(mensaje);
}
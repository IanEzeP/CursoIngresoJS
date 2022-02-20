/* Pereyra Ian
Div D SWITCH 04
*/
/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "este mes tiene 28 días";
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "este mes tiene 31 días";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días";
			break;
	}

	alert(mensaje);
}
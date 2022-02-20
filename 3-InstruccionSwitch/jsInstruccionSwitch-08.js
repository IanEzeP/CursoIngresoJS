/* Pereyra Ian
Div D SWITCH 08
*/
/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frío en este destino";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor en este destino";
			break;
	}
	
	alert(mensaje);

}
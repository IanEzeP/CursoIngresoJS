/* Pereyra Ian
Div D SWITCH 07
*/
/*Al selecionar un destino, indicar el punto cardinal de nuestro pais en donde se encuentra
 Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Se encuentra al Oeste";
			break;

		case "Cataratas":
			mensaje = "Se encuentra al Norte";
			break;

		case "Mar del plata":
			mensaje = "Se encuentra al Este";
			break;

		case "Ushuaia":
			mensaje = "Se encuentra al Sur";
			break;
	}
	
	alert(mensaje);
}
/* Pereyra Ian
Div D SWITCH 10
*/
/* Una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
 informar si "Se viaja" o "No se viaja" a ese lugar
En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
En Verano: Se viaja a Mar del plata y Cataratas solamente
En Otoño: Se viaja a todos los destinos.
En primavera: solo no se viaja a Bariloche*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;
	var seViaja;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	seViaja = false;
	mensaje = "No se viaja";

	switch(estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				seViaja = true;
			}
			/*switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja";
					break;

				default:
					mensaje = "No se viaja";
					break;
			}*/
			break;

		case "Verano":
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata")
			{
				seViaja = true;
			}
			/*switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;

				default:
					mensaje = "No se viaja";
					break;
			}*/
			break;

		case "Primavera":
			if(destinoIngresado != "Bariloche")
			{
				seViaja = true;
			}
			/*switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;

				default:
					mensaje = "Se viaja";
					break;
			}*/
			break;
			
		default:
			seViaja = true;
			//mensaje = "Se viaja";
			break;
	}
	if(seViaja == true)
	{
		mensaje = "Se viaja";
	}
	
	alert(mensaje);
}//La forma mas optima es hacerlo con switch{if-else}, porque a pesar de las opciones hay solo dos salidas.
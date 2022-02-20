/* Pereyra Ian
Div D SWITCH 09
*/
/* Una agencia de viajes debe sacar las tarifas de los viajes, se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10%
 y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;
	var estadiaBase;
	var descuento;
	var aumento;
	var precioFinal;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	estadiaBase = 15000;
	descuento = 0;
	aumento = 0;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 20;
					break;
				case "Cordoba":
				case "Cataratas":
					descuento = 10;
					break;
				default:
					descuento = 20;
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 20;
					break;
				case "Cordoba":
				case "Cataratas":
					aumento = 10;
					break;
				default:
					aumento = 20;
					break;
			}
			break;

		default:
			if(destinoIngresado != "Cordoba")
			{
				aumento = 10;
			}
			break;
		/*case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 10;
					break;
				case "Mar del plata":
					aumento = 10;
					break;
				case "Cataratas":
					aumento = 10;
					break;
					
			}
			break;*/
	}
	aumento = estadiaBase * aumento /100;
	descuento = estadiaBase * descuento /100;
	precioFinal = estadiaBase + aumento - descuento;
	mensaje = "Con destino a " + destinoIngresado + " en la estación de " + estacionIngresada + ", el precio final a pagar será: $" + precioFinal;
	alert(mensaje);
}
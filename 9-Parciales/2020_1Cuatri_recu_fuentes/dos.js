/*Ian Pereyra Division D Punto 2*/

/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
d) El tipo mas caro*/

function mostrar()
{
	var tipoProducto;
	var cantidadBolsas;
	var precioBolsa;
	var precioBruto;
	var precioFinal;
	var tipoMasComprado;
	var tipoMasCaro;
	var respuesta;
	var rebaja;

	var descuento = 0;
	var totalBolsas = 0;
	var precioAcumuladorArena = 0;
	var precioAcumuladorCal = 0;
	var precioAcumuladorCemento = 0;
	var cantidadAcumuladorCal = 0;
	var cantidadAcumuladorArena = 0;
	var cantidadAcumuladorCemento = 0;
	var totalArena = 0;
	var totalCal = 0;
	var totalCemento = 0;

	respuesta = true;

	while(respuesta == true)
	{
		tipoProducto = prompt("Ingrese el tipo: (arena, cal o cemento)");
		tipoProducto = tipoProducto.toLowerCase();
		while(tipoProducto != 'arena' && tipoProducto != 'cal' && tipoProducto != 'cemento')
		{
			tipoProducto = prompt("Error! Reingrese el tipo: (arena, cal o cemento)");
		}

		cantidadBolsas = prompt("Ingrese la cantidad de bolsas a comprar:");
		cantidadBolsas = parseInt(cantidadBolsas);
		while(isNaN(cantidadBolsas) || cantidadBolsas < 1)
		{
			cantidadBolsas = prompt("Error! Reingrese la cantidad de bolsas:");
			cantidadBolsas = parseInt(cantidadBolsas);
		}

		precioBolsa = prompt("Ingrese el precio por bolsa:");
		precioBolsa = parseInt(precioBolsa);
		while(isNaN(precioBolsa) || precioBolsa < 1)
		{
			precioBolsa = prompt("Error! Reingrese el precio por bolsa:");
			precioBolsa = parseInt(precioBolsa);
		}

		switch(tipoProducto)
		{
			case 'arena':
				totalArena = precioBolsa * cantidadBolsas;
				precioAcumuladorArena += totalArena;
				cantidadAcumuladorArena += cantidadBolsas;
				break;
			case 'cal':
				totalCal = precioBolsa * cantidadBolsas;
				precioAcumuladorCal += totalCal;
				cantidadAcumuladorCal += cantidadBolsas;
				break;
			default:
				totalCemento = precioBolsa * cantidadBolsas;
				precioAcumuladorCemento += totalCemento;
				cantidadAcumuladorCemento += cantidadBolsas;
				break;
		}



		respuesta = confirm("Desea ingresar otro producto?");
	}

	if(cantidadAcumuladorArena > cantidadAcumuladorCal && cantidadAcumuladorArena > cantidadAcumuladorCemento)
	{
		tipoMasComprado = "arena";
	}
	else
	{
		if(cantidadAcumuladorCal > cantidadAcumuladorCemento)
		{
			tipoMasComprado = "cal";
		}
		else
		{
			tipoMasComprado = "cemento";
		}
	}

	if(precioAcumuladorArena > precioAcumuladorCal && precioAcumuladorArena > precioAcumuladorCemento)
	{
		tipoMasCaro = "arena";
	}
	else
	{
		if(precioAcumuladorCal > precioAcumuladorCemento)
		{
			tipoMasCaro = "cal";
		}
		else
		{
			tipoMasCaro = "cemento"; 
		}
	}

	totalBolsas = cantidadAcumuladorArena + cantidadAcumuladorCemento + cantidadAcumuladorCal;

	if(totalBolsas > 10 && totalBolsas < 31)
	{
		descuento = 15;
	}
	else
	{
		if(totalBolsas > 30)
		{
			descuento = 25;
		}
	}

	precioBruto = totalCal + totalArena + totalCemento;
	rebaja = precioBruto * descuento / 100;
	precioFinal = precioBruto - rebaja;

	document.write("El precio bruto es $" + precioBruto + "<br>");
	if(descuento == 0)
	{
		document.write("No se aplico ningun descuento. <br>");
	}
	else
	{
		document.write("Se le aplico un descuento del " + descuento + "% por lo que el precio final es de $" + precioFinal + "<br>");
	}
	document.write("El tipo de producto con mas cantidad de bolsas en el total de compra es " + tipoMasComprado + "<br>");
	document.write("El tipo de producto mas caro es " + tipoMasCaro);

}

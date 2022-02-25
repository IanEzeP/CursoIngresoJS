/*Ian Pereyra Division D Punto 2*/
/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
	var respuesta;
	var tipoMaterial;
	var cantidadBolsas;
	var precioPorBolsa;
	var precioBruto;
	var calculoDescuento;
	var precioFinal;
	var tipoMaximo;
	var cantidadMaxima;
	var tipoCaro;
	var precioCaro;

	var descuento = 0;
	var acumuladorArena = 0;
	var acumuladorCal = 0;
	var acumuladorCemento = 0;
	var acumuladorPrecioArena = 0;
	var acumuladorPrecioCal = 0;
	var acumuladorPrecioCemento = 0;
	var precioArena = 0;
	var precioCal = 0;
	var precioCemento = 0;
	var sumaCantidad = 0;
	var sumaImporte = 0;

	respuesta = true;

	while(respuesta == true)
	{
		tipoMaterial = prompt("Ingrese el tipo de material: (arena, cal, cemento)");
		while(tipoMaterial != "arena" && tipoMaterial != "cal" && tipoMaterial != "cemento")
		{
			tipoMaterial = prompt("Error! Reingrese el tipo de material: (arena, cal, cemento)");
		}

		cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
		cantidadBolsas = parseInt(cantidadBolsas);
		while(isNaN(cantidadBolsas)==true)
		{
			cantidadBolsas = prompt("Error! Reingrese la cantidad de bolsas");
			cantidadBolsas = parseInt(cantidadBolsas);
		}

		precioPorBolsa = prompt("Ingrese el precio por bolsa: (Mayor a 0)");
		precioPorBolsa = parseInt(precioPorBolsa);
		while(isNaN(cantidadBolsas)==true || precioPorBolsa<1)
		{
			precioPorBolsa = prompt("Error! Reingrese el precio por bolsa: (Mayor a 0)");
			precioPorBolsa = parseInt(precioPorBolsa);
		}

		switch(tipoMaterial)
		{
			case "arena":
				acumuladorArena = acumuladorArena + cantidadBolsas;
				precioArena = precioPorBolsa * cantidadBolsas;
				acumuladorPrecioArena = acumuladorPrecioArena + precioArena;
				break;
			case "cal":
				acumuladorCal = acumuladorCal + cantidadBolsas;
				precioCal = precioPorBolsa * cantidadBolsas;
				acumuladorPrecioCal = acumuladorPrecioCal + precioCal;
				break;
			default:
				acumuladorCemento = acumuladorCemento + cantidadBolsas;
				precioCemento = precioPorBolsa * cantidadBolsas;
				acumuladorPrecioCemento = acumuladorPrecioCemento + precioCemento;
				break;
		}

		respuesta = confirm("Desea ingresar otro material?");
	}

	if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal)
	{
		tipoMaximo = "arena";
		cantidadMaxima = acumuladorArena;
	}
	else
	{
		if(acumuladorCemento > acumuladorCal)
		{
			tipoMaximo = "cemento";
			cantidadMaxima = acumuladorCemento;
		}
		else
		{
			tipoMaximo = "cal";
			cantidadMaxima = acumuladorCal;
		}
	}

	if(precioArena > precioCemento && precioArena > precioCal)
	{
		tipoCaro = "arena";
		precioCaro = precioArena;
	}
	else
	{
		if(precioCemento > precioCal)
		{
			tipoCaro = "cemento";
			precioCaro = precioCemento;
		}
		else
		{
			tipoCaro = "cal";
			precioCaro = precioCal;
		}
	}

	sumaImporte = acumuladorPrecioCemento + acumuladorPrecioCal + acumuladorPrecioArena;
	sumaCantidad = acumuladorCal + acumuladorCemento + acumuladorArena;

	if(sumaCantidad > 10 && sumaCantidad < 31)
	{
		descuento = 15;
	}
	else
	{
		if(sumaCantidad > 30)
		{
			descuento = 25;
		}
	}


	precioBruto = sumaImporte;
	calculoDescuento = precioBruto * descuento /100;
	precioFinal = precioBruto - calculoDescuento;
 	

	document.write("El importe bruto a pagar es " + precioBruto + "<br>");
	if(descuento == 0)
	{
		document.write("No se le aplicó ningún descuento. <br>" );
	}
	else
	{
		document.write("Se le aplico un descuento del " + descuento + "%, por lo que el importe total a pagar será: " + precioFinal + "<br>");
	}
	document.write("El tipo de producto más comprado es " + tipoMaximo + " con una cantidad de " + cantidadMaxima + " bolsas. <br>");
	document.write("El tipo de producto más caro es " + tipoCaro + " con un precio de " + precioCaro);
}

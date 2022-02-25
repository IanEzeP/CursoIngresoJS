/*Ian Pereyra Division D Punto 1*/
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabon" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{

	var productos;
	var tipoProducto;
	var precioUnitario;
	var unidadesProducto;
	var marcaProductos;
	var fabricanteProductos;
	var promedio;
	var tipoMaximo;

	var alcoholBarato = 0;
	var cantUnidadesBarato;
	var fabricanteBarato;
	var acumuladorUnidadesBarbijo = 0;
	var acumuladorUnidadesJabon = 0;
	var acumuladorUnidadesAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlcohol = 0;

	for(productos = 0; productos<5; productos++)
	{

		tipoProducto = prompt("Ingrese el " + (productos+1) + "º tipo de producto: (barbijo , jabon o alcohol)");
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Error. Reigrese el tipo de producto: (barbijo , jabon o alcohol)");
		}

		precioUnitario = prompt("Ingrese su precio: (100 a 300)");
		precioUnitario = parseInt(precioUnitario);
		while(precioUnitario < 100 || precioUnitario > 300)
		{
			precioUnitario = prompt("Error. Reingrese su precio: (100 a 300)");
			precioUnitario = parseInt(precioUnitario);
		}

		unidadesProducto = prompt("Ingrese la cantidad a comprar: (no debe superar las 1000 unidades)");
		unidadesProducto = parseInt(unidadesProducto);
		while(unidadesProducto < 1 || unidadesProducto > 1000)
		{
			unidadesProducto = prompt("Error. Reingrese la cantidad a comprar: (no debe superar las 1000 unidades)");
			unidadesProducto = parseInt(unidadesProducto);
		}

		marcaProductos = prompt("Ingrese la marca correspondiente:");
		fabricanteProductos = prompt("Ingrese el fabricante correspondiente:");

		switch(tipoProducto)
		{
			case "barbijo":
				acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + unidadesProducto;
				contadorBarbijo++;
				break;

			case "jabon":
				acumuladorUnidadesJabon = acumuladorUnidadesJabon + unidadesProducto;
				contadorJabon++;
				break;

			default:
				acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + unidadesProducto;
				contadorAlcohol++;
				if(contadorAlcohol == 1 || precioUnitario < alcoholBarato)
				{
					alcoholBarato = precioUnitario;
					cantUnidadesBarato = unidadesProducto;
					fabricanteBarato = fabricanteProductos;
				}
				break;
		}

	}

	if(acumuladorUnidadesAlcohol > acumuladorUnidadesJabon && acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijo)
	{
		promedio = acumuladorUnidadesAlcohol / contadorAlcohol;
		tipoMaximo = "alcohol";
	}
	else
	{
		if(acumuladorUnidadesBarbijo > acumuladorUnidadesJabon)
		{
			promedio = acumuladorUnidadesBarbijo / contadorBarbijo;
			tipoMaximo = "barbijo";
		}
		else
		{
			promedio = acumuladorUnidadesJabon / contadorJabon;
			tipoMaximo = "jabon";
		}
	}

	document.write("Del mas barato de los alcoholes la cantidad es de " + cantUnidadesBarato + " y el fabricante es " + fabricanteBarato + "<br>");
	document.write("El tipo de producto con mas unidades es " + tipoMaximo + " y su promedio es de " + promedio + "<br>");
	document.write("Hay " + acumuladorUnidadesJabon + " jabones en total");


}

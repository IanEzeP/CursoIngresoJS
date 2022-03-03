/*Ian Pereyra Division D Punto 1*/

/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabon" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var productos;
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var banderaJabonCaro;
	var cantidadUnidadesJabon;
	var fabricanteJabon;
	var tipoMasUnidades;

	var promedio = 0;
	var jabonCaro = 0;
	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	var contadorJabon = 0;
	var acumuladorBarbijo = 0;
	var acumuladorAlcohol = 0;
	var acumuladorJabon = 0;

	fabricanteJabon = true;

	for(productos = 0; productos < 5; productos++)
	{
		tipo = prompt('Ingrese el tipo de productos: ("barbijo" , "jabon" o "alcohol")');
		tipo = tipo.toLowerCase();
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt('Error. Reingrese el tipo de productos: ("barbijo" , "jabon" o "alcohol")');
			tipo = tipo.toLowerCase()
		}

		precio = prompt("Ingrese el valor: (100 a 300)");
		precio = parseInt(precio);
		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = prompt("Ingrese el valor: (100 a 300)");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad: (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
		cantidad = parseInt(cantidad);
		while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("Error. Reingrese la cantidad: (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese la marca");
		while(marca == "")
		{
			marca = prompt("Error! Reingrese la marca");
		}

		fabricante = prompt("Ingrese el fabricante");
		while(fabricante == "")
		{
			fabricante = prompt("Error! Reingrese el fabricante");
		}

		switch(tipo)
		{
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabon += cantidad;
				contadorJabon++;
				if(banderaJabonCaro == true || precio > jabonCaro)
				{
					jabonCaro = precio;
					cantidadUnidadesJabon = cantidad;
					fabricanteJabon = fabricante;
					banderaJabonCaro = false;
				}
				break;
			default:
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				break;
		}

	}

	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
	{
		promedio = acumuladorAlcohol / contadorAlcohol;
		tipoMasUnidades = "alcohol";
	}
	else
	{
		if(acumuladorJabon > acumuladorBarbijo)
		{
			promedio = acumuladorJabon / contadorJabon;
			tipoMasUnidades = "jabon";
		}
		else
		{
			promedio = acumuladorBarbijo / contadorBarbijo;
			tipoMasUnidades = "barbijo";
		}
	}


	if(banderaJabonCaro == true)
	{
		document.write("No se ingreso ningún jabon. <br>");
	}
	else
	{
		document.write("Del jabon mas caro ingresado la cantidad de unidades es " + cantidadUnidadesJabon + " y el fabricante es " + fabricanteJabon + "<br>");
	}
	document.write("El tipo de producto con mas unidades fue " + tipoMasUnidades + " y el promedio por compra fue de " + promedio + "<br>");
	if(contadorBarbijo == 0)
	{
		document.write("No se compró ningún barbijo.");
	}
	else
	{
		document.write("En total se compraron " + acumuladorBarbijo + " unidades de barbijos.");
	}
}

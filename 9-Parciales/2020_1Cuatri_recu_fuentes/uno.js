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

	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	var contadorJabon = 0;
	var acumuladorBarbijo = 0;
	var acumuladorAlcohol = 0;
	var acumuladorJabon = 0;

	for(productos = 0; productos < 5; productos++)
	{
		tipo = prompt('Ingrese el tipo de productos: ("barbijo" , "jabon" o "alcohol")');
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt('Error. Reingrese el tipo de productos: ("barbijo" , "jabon" o "alcohol")');
		}

		precio = prompt("Ingrese el valor: (100 a 300)");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
			precio = prompt("Ingrese el valor: (100 a 300)");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad: (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
		cantidad = parseInt(cantidad);
		while(cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("Error. Reingrese la cantidad: (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
			cantidad = parseInt(cantidad);
		}

		marca = prompt ("Ingrese la marca");
		fabricante = prompt ("Ingrese el fabricante");

		switch(tipo)
		{
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabon += cantidad;
				contadorJabon++;
				break;
			default:
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				break;
		}





	}


}

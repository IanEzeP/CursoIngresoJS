/*Pereyra Ian DIV D
  TPs 01
*/


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	var producto1;
	var producto2;
	var producto3;
	var sumatoria;

	producto1 = document.getElementById('txtIdPrecioUno').value;
	producto2 = document.getElementById('txtIdPrecioDos').value;
	producto3 = document.getElementById('txtIdPrecioTres').value;

	producto1 = parseInt(producto1);
	producto2 = parseInt(producto2);
	producto3 = parseInt(producto3);

	sumatoria = producto1 + producto2 + producto3;

	alert("El resultado es " + sumatoria);

}

function Promedio () 
{
	var producto1;
	var producto2;
	var producto3;
	var promedio;

	producto1 = document.getElementById('txtIdPrecioUno').value;
	producto2 = document.getElementById('txtIdPrecioDos').value;
	producto3 = document.getElementById('txtIdPrecioTres').value;

	producto1 = parseInt(producto1);
	producto2 = parseInt(producto2);
	producto3 = parseInt(producto3);

	promedio = (producto1 + producto2 + producto3) / 3;

	alert("El promedio es " + promedio.toFixed(2));

}

function PrecioFinal () 
{
	var producto1;
	var producto2;
	var producto3;
	var calculoIVA;
	var precioFinal;

	producto1 = document.getElementById('txtIdPrecioUno').value;
	producto2 = document.getElementById('txtIdPrecioDos').value;
	producto3 = document.getElementById('txtIdPrecioTres').value;

	producto1 = parseInt(producto1);
	producto2 = parseInt(producto2);
	producto3 = parseInt(producto3);

	calculoIVA = (producto1 + producto2 + producto3) * 0.21;

	precioFinal = producto1 + producto2 + producto3 + calculoIVA;

	alert("El precio final es " + precioFinal.toFixed(2));

}
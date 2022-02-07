/*Pereyra Ian DIV D
  E/S 01

*/
/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla" */
function mostrar()
{
	alert("Esto funciona de maravilla");
}

/* Pereyra Ian
Div D Ejercicio 1 (Sabado)
*/

/*Ejercicio 1 (Podes usar el ejercicio E/S 01 del curso de ingreso)

Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los precios y 
el precio final total más iva(21%), pedir un porcentaje de descuento y aplicarlo al precio final , 
mostrar todos los datos calculados e ingresados por alerta. (solo una alerta en el código). 
Los datos se piden por prompt.
function mostrar()
{

    var producto1;
    var producto2;
    var producto3;
    var precioProducto1;
    var precioProducto2;
    var precioProducto3;
    var precioBruto;
    var promedio;
    var calculoIVA;
    var precioFinal;
    var descuentoIngresado;
    var calculoDescuento;
    var precioFinalConDescuento;
    var mensaje1;
    var mensaje2;

    producto1 = prompt("Nombre de producto");
    producto2 = prompt("Nombre del segundo producto");
    producto3 = prompt("Nombre del tercer producto");
    precioProducto1 = prompt("Precio del primer producto");
    precioProducto2 = prompt("Precio del segundo producto");
    precioProducto3 = prompt("Precio del tercer producto");
    descuentoIngresado = prompt("Ingresar un descuento inferior al 100%");

    precioProducto1 = parseInt(precioProducto1);
    precioProducto2 = parseInt(precioProducto2);
    precioProducto3 = parseInt(precioProducto3);
    descuentoIngresado = parseInt(descuentoIngresado);

    precioBruto = precioProducto1 + precioProducto2 + precioProducto3;
    promedio = precioBruto / 3;
    calculoIVA = precioBruto * 0.21;
    precioFinal = precioBruto + calculoIVA;
    calculoDescuento = descuentoIngresado * precioFinal / 100;
    precioFinalConDescuento = precioFinal - calculoDescuento;

    mensaje1 = "Primer producto: " + producto1 + " " + precioProducto1 + "$. Segundo producto: " + producto2 + " " + precioProducto2 + "$. Tercer producto: " + producto3 + " " + precioProducto3 + "$.";
    mensaje2 = "Precio bruto: " + precioBruto + "$. El promedio es: " + promedio + "$. Precio final: " + precioFinal + "$. Precio final menos descuento del " + calculoDescuento.toFixed(2) + "$: " + precioFinalConDescuento.toFixed(2) + "$.";

    alert(mensaje1 + mensaje2); */

    /* mensaje1 = "Primer producto: " + producto1 + " $" + precioProducto1 + ", Segundo producto: " + producto2 + " $" + precioProducto2 + ", Tercer producto: " + producto3 + " $" + precioProducto3 + ",";
    mensaje2 = " Precio bruto: $" + precioBruto + ", El promedio es: $" + promedio + ", Precio final: $" + precioFinal + ", Precio final menos descuento del $" + calculoDescuento.toFixed(2) + ": $" + precioFinalConDescuento.toFixed(2) + ".";

}*/


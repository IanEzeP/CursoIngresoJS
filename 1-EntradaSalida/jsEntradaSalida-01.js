/*Pereyra Ian DIV D
  E/S 01

*/
/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla" */
/*function mostrar()
{
	alert("Esto funciona de maravilla");
}*/

/*La juguetería El MUNDO DE OCTAVIO nos encarga un programa para conocer qué cantidad de materiales se necesita para la fabricación de distintos juguetes.
COMETA: 
AB = Diámetro mayor
DC = diámetro menor
BD y BC = lados menores
AD y AC = lados mayores
Todos los datos se ingresan por prompt. Pueden usar el mismo html del ejercicio 01 de E/S
Debemos tener en cuenta que la estructura del cometa estará dada por un perímetro de varillas de plástico y
los correspondientes entrecruces (DC y AB) del mismo material para mantener la forma del cometa.
El cometa estará construido con papel de alta resistencia. La cola del mismo se construirá con el mismo papel que el cuerpo 
y representará un 10% adicional del necesario para el cuerpo.
Necesitamos saber cuántos Mts de varillas de plástico y cuántos de papel son necesarios para la construcción en masa de 10 cometas.
Tener en cuenta que los valores de entrada están expresados en Cms.

COMETA BICOLOR
Ahora necesitamos saber cuánto papel de cada color necesitamos. Las entradas son las mismas.
*/

function mostrar()
{
    var tipoCometa;
    var diametroMayorAB;
    var diametroMenorDC;
    var ladosMayores;
    var ladosMenores;
    var longitudTotalVarillas;
    var medidaExterior;
    var longitudEnMetros;
    var perimetroTotal;
    var totalPapelMonocolor;
    var totalPapelBicolor;
    var mensaje;

    diametroMayorAB = prompt("Ingrese el diametro mayor de los cometas (en cms. ningun valor menor a 50 o mayor a 200)");
    diametroMayorAB = parseInt(diametroMayorAB);
    while(isNaN(diametroMayorAB) || diametroMayorAB < 50 || diametroMayorAB > 200)
    {
        diametroMayorAB = prompt("Error, Reingrese el diametro mayor (en cms. ningun valor menor a 50 o mayor a 200)");
        diametroMayorAB = parseInt(diametroMayorAB);
    }

    diametroMenorDC = prompt("Ingrese el diametro menor de los cometas (en cms. ningun valor menor a 40 o superior al diametro mayor)");
    diametroMenorDC = parseInt(diametroMenorDC);
    while(isNaN(diametroMenorDC) || diametroMenorDC < 40 || diametroMenorDC > diametroMayorAB) 
    {
        diametroMenorDC = prompt("Error, reingrese el diametro menor (en cms. ningun valor menor a 40 o superior al diametro mayor)")
    }

    ladosMayores = prompt("Ingrese la medida de los lados mayores (en cms, menor al diametro mayor)");
    ladosMayores = parseInt(ladosMayores);
    while(isNaN(ladosMayores) || ladosMayores < 20 || ladosMayores > diametroMayorAB)
    {
        ladosMayores = prompt("Error, reingrese la medida de los lados mayores (en cms, menor al diametro mayor)");
        ladosMayores = parseInt(ladosMayores);
    }

    ladosMenores = prompt("Ingrese la medida de los lados menores (en cms, inferior al diametro menor y los lados mayores");
    ladosMenores = parseInt(ladosMenores);
    while(isNaN(ladosMenores) || ladosMenores < 10 || ladosMenores > ladosMayores || ladosMenores > diametroMenorDC)
    {
        ladosMenores = prompt("Error, reingrese la medida de los lados menores (en cms, inferior al diametro menor y los lados mayores)");
        ladosMenores = parseInt(ladosMenores);
    }

    tipoCometa = prompt("Ingrese el tipo de cometa: (monocolor o bicolor)");
    tipoCometa = tipoCometa.toLowerCase();
    while(tipoCometa != "monocolor" && tipoCometa != "bicolor")
    {
        tipoCometa = prompt("Error, reingrese el tipo de cometa: (monocolor o bicolor)");
        tipoCometa = tipoCometa.toLowerCase();
    }

    medidaExterior = (ladosMayores * 2) + (ladosMenores * 2);
    longitudTotalVarillas = diametroMayorAB + diametroMenorDC + medidaExterior;
    longitudEnMetros = longitudTotalVarillas / 100;
    perimetroTotal = (medidaExterior /100) * 2;
    totalPapelMonocolor = perimetroTotal + (perimetroTotal *10 /100);
    
    if(tipoCometa == "monocolor")
    {
        mensaje = "Para la construccion en masa de 10 cometas se necesitaran " + longitudEnMetros + " mts. de varillas y " + totalPapelMonocolor + " mts. de papel.";
    }
    else
    {
        totalPapelBicolor = totalPapelMonocolor /2;
        mensaje = "Para la construccion en masa de 10 cometas bicolor se necesitaran " + longitudEnMetros + " mts. de varillas y " + totalPapelBicolor + " mts. de papel de cada color.";
    }

    alert(mensaje);
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


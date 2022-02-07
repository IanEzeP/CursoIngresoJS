/*Pereyra Ian DIV D
  TPs 02
*/

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
El terreno se mide en metros cuadrados. el alambre en metros.
*/

function Rectangulo () 
{
	var largoDeTerreno;
	var anchoDeTerreno;
	var perimetroTotal;
	var cantidadAlambre;

	largoDeTerreno = document.getElementById('txtIdLargo').value;
	anchoDeTerreno = document.getElementById('txtIdAncho').value;

	largoDeTerreno = parseInt(largoDeTerreno);
	anchoDeTerreno = parseInt(anchoDeTerreno);

	perimetroTotal = (largoDeTerreno + anchoDeTerreno) * 2;
	cantidadAlambre = perimetroTotal * 3;

	alert("Cantidad de alambre a comprar: " + cantidadAlambre + " metros.");

}

function Circulo () 
{
	var radioDeTerreno;
	var circunferenciaDelTerreno;
	var cantidadAlambre;

	radioDeTerreno = document.getElementById('txtIdRadio').value;

	radioDeTerreno = parseInt(radioDeTerreno);

	circunferenciaDelTerreno = radioDeTerreno * 2 * Math.PI;
	cantidadAlambre = circunferenciaDelTerreno * 3;

	alert("Cantidad de alambre a comprar: " + cantidadAlambre.toFixed(2) + " metros."); 

}

function Materiales () 
{
	var largoDeTerreno;
	var anchoDeTerreno;
	var perimetroTotal;
	var bolsasCemento;
	var bolsasCal;

	largoDeTerreno = document.getElementById('txtIdLargo').value;
	anchoDeTerreno = document.getElementById('txtIdAncho').value;

	largoDeTerreno = parseInt(largoDeTerreno);
	anchoDeTerreno = parseInt(anchoDeTerreno);

	perimetroTotal = largoDeTerreno * anchoDeTerreno;
	bolsasCemento = perimetroTotal * 2;
	bolsasCal = perimetroTotal * 3;

	alert("Para el terreno rectangular se necesitan " + bolsasCemento + " bolsas de cemento, y " + bolsasCal + " bolsas de cal.")

}
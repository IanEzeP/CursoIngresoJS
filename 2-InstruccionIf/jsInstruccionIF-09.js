/* Pereyra Ian
Div D IF 09
*/
/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;
	
	alert("Obtuviste el número " + numeroRandom)
}
/*Pereyra Ian DIV D
  E/S 09
*/

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var total;

	importe = document.getElementById('txtIdSueldo').value;

	importe = parseInt(importe);

	porcentaje = importe * 0.1;

	/* forma 1 */

	total = importe + porcentaje;

	document.getElementById('txtIdResultado').value = total;

	/* forma 2

	total = importe + (importe * 0.1);

	document.getElementById('txtIdResultado').value = total; */


	/* forma 3
	total = importe * 1.1; 

	document.getElementById('txtIdResultado').value = total; */

}

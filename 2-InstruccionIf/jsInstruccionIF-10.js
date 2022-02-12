/* Pereyra Ian
Div D IF 10
*/
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	var notaExamen;
	var mensaje;

	notaExamen = Math.floor(Math.random() * 10) + 1;
	
	if(notaExamen < 4)
	{
		mensaje = " Vamos, la proxima se puede.";
	}
	else
	{
		if(notaExamen < 9)
		{
			mensaje = " APROBÓ";
		}
		else
		{
			mensaje = " EXCELENTE";
		}
	}
	alert("Tu nota es: " + notaExamen + mensaje);
}
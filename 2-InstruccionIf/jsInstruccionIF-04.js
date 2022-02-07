/* Pereyra Ian 
Div D IF 04
*/
/*Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive). */

function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18)
	{
		alert("Usted es adolescente.");
	}
}
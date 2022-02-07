/* Pereyra Ian
Div D IF 06
*/
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad < 13)
	{
		mensaje = "Usted es un niño.";
	}
	else
	{
		if(edad > 12 && edad < 18)
		{
			mensaje = "Usted es adolescente.";
		}
		else
		{
			mensaje = "Usted es adulto."
		}
	}
	alert(mensaje);
}
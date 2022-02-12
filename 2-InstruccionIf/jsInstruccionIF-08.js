/* Pereyra Ian
Div D IF 08
*/
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
NO HACER NADA, pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

function mostrar()
{
	var edad;
	var estadoCivilIngresado;
	var mensaje;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivilIngresado = document.getElementById('estadoCivil').value;

	edad = parseInt(edad);

	if(edad > 17 && estadoCivilIngresado == "Soltero")
	{
		mensaje = "Es soltero y no es menor";
		alert(mensaje);
	}
	
}
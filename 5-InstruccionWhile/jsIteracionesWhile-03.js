/* Pereyra Ian 
Div D While 03
*/
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	var claveIngresada;
	var contraseña;

	contraseña = "utn750";
	claveIngresada = prompt("Ingrese la clave: ");

	while(claveIngresada != contraseña)
	{
		claveIngresada = prompt("Intente nuevamente.");

	}

	alert("Bienvenido!");
}
/*
function mostrar()
{
	var claveIngresada;
	var contraseña;
	var intentos;

	intentos = 3
	contraseña = "utn750";
	claveIngresada = prompt("Ingrese la clave: ");

	while(claveIngresada != contraseña && intentos > 1)
	{
		intentos--;
		claveIngresada = prompt("Contraseña incorrecta, intente nuevamente:");

	}

	if(claveIngresada == contraseña)
	{
		alert("Bienvenido!");
	}
	else
	{
		alert("Demasiados intentos fallidos. Usuario bloqueado");
	}
	
}*/
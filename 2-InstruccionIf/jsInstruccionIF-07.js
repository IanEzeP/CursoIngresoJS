/* Pereyra Ian
Div D IF 07

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	var edad;
	var estadoCivilIngresado;
	var mensaje;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivilIngresado = document.getElementById('estadoCivil').value;

	edad = parseInt(edad);

	if(edad < 18 && estadoCivilIngresado != "Soltero" )
	{
		mensaje = "Es muy pequeño para NO ser soltero.";
		alert(mensaje);
	}
	
}*/

/* 
3. Ejercicio 07 BIS V3(Realizar en los archivos  del ejercicio 07 del IF)
 además de los datos ya ingresados , solicitar el nombre .
a. si es menor de 13 , , mostrar el mensaje “feliz día”.
b. Si es adolescente el mensaje es “usted es adolexcente”)
 si tiene 17 años además mostrar el mensaje “último año!!!”
c. Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
 si tiene 33 años , además mostrar el mensaje “como cristo”
 si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
 si tiene 88, además mostrar el mensaje “lindo número''
d. si la edad es par , además mostrar , “sos par!!”.
e. si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
f. si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
g. si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’.
h. Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
i. Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
j. Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’*/

/*Pereyra Ian
Div D Ejercicio 2 (Sabado)*/

function mostrar()
{
	var edad;
	var mensaje;
	var nombre;
	var estadoCivilIngresado;

	edad = document.getElementById('txtIdEdad').value;
	estadoCivilIngresado = document.getElementById('estadoCivil').value;

	edad = parseInt(edad);

	nombre = prompt("Ingrese su nombre:");

	if(edad < 13)
	{
		mensaje = "Feliz día";

		if(nombre == "Ricardo") 
		{
			mensaje = mensaje + ", muy chiquito para ese nombre";
		}
	}
	else
	{
		if(edad < 18)
		{
			mensaje = "Usted es adolescente";

			if(edad == 17)
			{
				mensaje = mensaje + ". Último año!!!";
			}
			if(nombre == "Violeta")
			{
				mensaje = mensaje + ", como un color!!";
			}
			if(estadoCivilIngresado == "Divorciado")
			{
				mensaje = mensaje + ", toda una vida por delante";
			}
		}
		else
		{
			mensaje = "Tenés edad de laburar";

			if(edad < 61)
			{
				if(estadoCivilIngresado == "Soltero")
				{
					mensaje = mensaje + ", a salir";
				}
				if(edad == 33)
				{
					mensaje = mensaje + ", como Cristo";
				}
			}	
			else
			{
				mensaje = mensaje + ", a jubilarse";

				if(edad == 88)
				{
					mensaje = mensaje + ". Lindo número";
				}
				if(nombre == "Alfredo")
				{
					mensaje = mensaje + ", como el de Queen";
				}
				
			}
			
		}
		if(estadoCivilIngresado == "Casado")
		{
			mensaje = mensaje + ", casada quiere casa";
		}
	}
	if(edad % 2 == 0)
	{
		mensaje = mensaje + ", sos par!!";
	}

	alert(mensaje);
}	
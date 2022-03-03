/*Ian Pereyra Division D Punto 3*/

/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad, edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo") y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad (más de 17) estan solteros.
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad (mas de 60 años), tienen mas de 38 de temperatura.
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var banderaMayorTemperatura;
	var mayorTemperatura;
	var nacionalidadMasTemperatura;
	var contadorSolterosMayores;
	var contadorMujeresViudas;
	var contadorMujeresSolteras;
	var contadorMujeresCasadas;
	var contadorMayoresConFiebre;
	var acumuladorEdadCasadas;
	var promedioEdadMujeres;

	promedioEdadMujeres = 0;
	acumuladorEdadCasadas = 0;
	contadorMujeresCasadas = 0;
	contadorMayoresConFiebre = 0;
	contadorMujeresViudas = 0;
	contadorMujeresSolteras = 0;
	contadorSolterosMayores = 0;
	banderaMayorTemperatura = true;
	mayorTemperatura = 0;
	respuesta = true;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese su nombre:");
		while(nombre == "")
		{
			nombre = prompt("Reingrese su nombre:");
		}

		nacionalidad = prompt("Ingrese su nacionalidad: ");
		while(nacionalidad == "")
		{
			nacionalidad = prompt("Reingrese su nacionalidad:");
		}

		edad = prompt("Ingrese su edad: (0 a 100)");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0 && edad > 100)
		{
			edad = prompt("Reingrese su edad: (0 a 100)");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo: (f o m)");
		sexo = sexo.toLowerCase();
		while(sexo != 'f' && sexo != 'm')
		{
			sexo = prompt("Reingrese su sexo: (f o m)");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese su estado civil: (soltero, casado o viudo)")
		estadoCivil = estadoCivil.toLowerCase();
		while(estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo')
		{
			estadoCivil = prompt("Reingrese su estado civil: (soltero, casado o viudo)");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperatura = prompt("Ingrese su temperatura: (35 a 42)");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) || temperatura < 35 || temperatura > 42)
		{
			temperatura = prompt("Reingrese su temperatura: (35 a 42)");
			temperatura = parseInt(temperatura);
		}

		switch(estadoCivil)
		{
			case 'soltero':
				if(edad > 17)
				{
					contadorSolterosMayores++;
				}
				if(sexo == 'f')
				{
					contadorMujeresSolteras++;
				}
				break;
			case 'casado':
				if(sexo == 'f')
				{
					contadorMujeresCasadas++;
					acumuladorEdadCasadas += edad;
				}
				break;
			default:
				if(sexo == 'f')
				{
					contadorMujeresViudas++;
				}
				break;
		}

		if(banderaMayorTemperatura == true || temperatura > mayorTemperatura)
		{
			mayorTemperatura = temperatura;
			nacionalidadMasTemperatura = nacionalidad;
			banderaMayorTemperatura = false;
		}

		if(edad > 60 && temperatura > 38)
		{
			contadorMayoresConFiebre++;
		}

		respuesta = confirm("Desea ingresar otro tripulante?");
	}

	if(contadorMujeresCasadas == 0)
	{
		promedioEdadMujeres = 0;
	}
	else
	{
		promedioEdadMujeres = acumuladorEdadCasadas / contadorMujeresCasadas;
	}

	document.write("La nacionalidad de la persona con mayor temperatura es " + nacionalidadMasTemperatura + "<br>");
	document.write("La cantidad de solteros mayores de edad es de " + contadorSolterosMayores + "<br>");
	document.write("La cantidad de mujeres solteras es de " + contadorMujeresSolteras + "<br>");
	document.write("La cantidad de mujeres viudas es de " + contadorMujeresViudas + "<br>");
	document.write("La cantidad de personas de la tercera edad con una temperatura mayor a 38 es " + contadorMayoresConFiebre + "<br>");
	if(promedioEdadMujeres == 0)
	{
		document.write("No hay mujeres casadas abordo");
	}
	else
	{
		document.write("El promedio de edad entre las mujeres casadas es de " + promedioEdadMujeres);
	}
	
}

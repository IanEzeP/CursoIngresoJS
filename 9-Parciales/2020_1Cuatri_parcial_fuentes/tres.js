/*Ian Pereyra Division D Punto 3*/
/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var nombreFiebre;
	
	var promedio = 0;
	var acumuladorEdad = 0;
	var contadorAncianosFiebre = 0;
	var contadorViudos = 0;
	var contadorHombreViudos = 0;
	var contadorHombreSolteros = 0;
	var mayorTemperatura = 0;

	respuesta = true;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese su nombre:");

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(isNaN(edad))
		{
			edad = prompt("Por favor ingrese una edad valida:");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo: ('f' o 'm')");
		while(sexo != 'f' && sexo != 'm')
		{
			sexo = prompt("Opcion invalida, por favor ingrese 'f' o 'm':");
		}

		estadoCivil = prompt("Ingrese su estado civil: ('soltero', 'casado' o 'viudo')");
		while(estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo')
		{
			estadoCivil = prompt("Por favor ingrese un estado civil válido: ('soltero', 'casado' o 'viudo')");
		}

		temperatura = prompt("Ingrese su temperatura: ");
		temperatura = parseInt(temperatura);
		while(temperatura < 35 || temperatura > 45)
		{
			temperatura = prompt("Por favor ingrese una temperatura adecuada: ")
			temperatura = parseInt(temperatura);
		}

		if(temperatura > mayorTemperatura)
		{
			mayorTemperatura = temperatura;
			nombreFiebre = nombre;
		}

		
		if(edad > 60 && temperatura > 38)
		{
			contadorAncianosFiebre++;
		}

		switch(estadoCivil)
		{
			case 'soltero':
				if(sexo == 'm')
				{
					contadorHombreSolteros++;
					acumuladorEdad = acumuladorEdad + edad;
				}
				break;
			case 'viudo':
				if(sexo == 'm')
				{
					contadorHombreViudos++;
				}
				if(edad > 17)
				{
					contadorViudos++;
				}
				break;
			default:
				break;
		}

		respuesta = confirm("¿Desea ingresar otro tripulante?");
	}

	promedio = acumuladorEdad / contadorHombreSolteros;

	document.write("El nombre de la persona con más temperatura es " + nombreFiebre + " y su temperatura es de " + mayorTemperatura + "º <br>");
	document.write("La cantidad de tripulantes mayores de edad y viudos son " + contadorViudos + "<br>");
	document.write("La cantidad de hombres solteros es " + contadorHombreSolteros + " y la cantidad de hombre viudos es de " + contadorHombreViudos + "<br>");
	document.write("La cantidad de tripulantes de la tercera edad con mas de 38º de temperatura son " + contadorAncianosFiebre + "<br>");
	document.write("El promedio de la edad de los hombres mayores de edad y solteros es de " + promedio);

}

/* Pereyra Ian 
Div D While 07
*/
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

function mostrar()
{
	var contadorIngresos;
	var acumuladorSuma;
	var respuesta;
	var numeroIngresado;

	contadorIngresos = 0;
	acumuladorSuma = 0;
	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumuladorSuma = acumuladorSuma + numeroIngresado;
		contadorIngresos++;

		respuesta = confirm("Desea ingresar un nuevo numero? (si o no)");
	}
	
	document.getElementById('txtIdSuma').value = acumuladorSuma;
	document.getElementById('txtIdPromedio').value = acumuladorSuma / contadorIngresos;

}
*/

/*Ejercicio While 07 V1 (Realizar en los archivos del ejercicio 07 del WHILE)
Realizar el algoritmo que permita el ingreso por prompt de
	1-alturas en centimetros (validar entre 0 y 250),
	2-la edad (validar)
	3-temperatura (validar)
	4-el sexo (validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre 
	de 5 estudiantes de la UTN.

informar :
	a)El promedio de las alturas totales.
	b)Cantidad de personas de cada sexo.
	c)Cantidad de aprobados(más de 6)
	d)La cantidad de mujeres que su altura supere
	 los 190 centímetros.
	e)Que sexo tiene mas alumnos
	f)el nombre de la persona más alta 
	g)la edad de la primera persona con fiebre (más de 37)
	h)el nombre de la primer mujer aprobada
	i)la altura promedio de los aprobados
	j)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
	k)Qué porcentaje de aprobados hay sobre el total de alumnos
	l)La nota y el nombre del primer varón más alto de 200cm 
	m)Qué porcentaje hay de personas con fiebre mayores a 50 años , 
	*sobre los que tienen fiebre .
	*y también sobre el total de Alumnos. */
/*Pereyra Ian
Div D Ejercicio 3 (Sabado)*/

function mostrar()
{
	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombre;
	var mensaje;
	var sexoMayor;
	var promedioAlturaAprobados;
	var porcentajeDeAprobados;
	var porcentajeMayoresFiebreSobreEnfermos;
	var porcentajeMayoresFiebreSobreAlumnos;

	var contador;
	var alumnosConFiebre = 0;
	var mayoresConFiebre = 0;
	var alturaAcumulador = 0;
	var alturaAprobados = 0;
	var sexoAcumuladorF = 0;
	var sexoAcumuladorM = 0;
	var sexoAcumuladorNB = 0;
	var notaAcumuladorAprobado = 0;
	var notaAcumuladorDesaprobado = 0;
	var acumuladorDeMujeresAltas = 0;
	var personaMasAlta = 0;
	var edadGuardada = 0;
	var notaHombreAltoGuardado = 0;
	var nombreHombreAltoGuardado;
	var nombreMujerGuardada;
	var nombreHombreGuardado;
	var banderaDesaprobado = true;
	var banderaTemperatura = true;		
	var banderaAprobada = true;	
	var banderaMuyAlto = true;
	
	for(contador = 0; contador < 5; contador++)
	{
		altura = prompt("Ingrese su altura en centímetros entre 0cm y 250cm:");
		altura = parseInt(altura);
		while(altura < 0 || altura > 250)
		{
			altura = prompt("Por favor ingrese un valor posible de altura (0cm a 250cm):");
			altura = parseInt(altura);
		}

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(edad < 17)
		{
			edad = prompt("Por favor ingrese una edad valida:");
			edad = parseInt(edad);
		}

		temperatura = prompt("Ingrese su temperatura en grados centígrados:");
		temperatura = parseInt(temperatura);
		while(temperatura < 35 || temperatura > 42)
		{
			temperatura = prompt("Por favor ingrese una temperatura adecuada:")
			temperatura = parseInt(temperatura);
		}

		sexo = prompt("Ingrese 'f', 'm' o 'nb' según su género:");
		while(sexo != 'f' && sexo != 'm' && sexo != 'nb')
		{
			sexo = prompt("Opcion invalida, por favor ingrese 'f', 'm' o 'nb':");
		}

		nota = prompt("Ingrese su calificación entre 0 y 10:");
		nota = parseInt(nota);
		while(nota < 1 || nota > 10)
		{
			nota = prompt("Nota improbable, ingrese una calificacion entre 0 y 10:");
			nota = parseInt(nota);
		}

		nombre = prompt("Ingrese su nombre:");

		alturaAcumulador = alturaAcumulador + altura;

		if(altura > personaMasAlta)
		{
			personaMasAlta = altura;
			nombreGuardado = nombre; 
		}

		if(temperatura > 37) 
		{
			alumnosConFiebre++;
			if(banderaTemperatura == true)
			{
				edadGuardada = edad;
				banderaTemperatura = false;
			}
			if(edad > 50)
			{
				mayoresConFiebre++;
			}
		}

		switch(sexo)
		{
			case 'f':
				sexoAcumuladorF++;	
				if(altura > 190)
				{
					acumuladorDeMujeresAltas++;	
				}
				if(banderaAprobada == true && nota > 6)
				{
					nombreMujerGuardada = nombre;
					banderaAprobada = false;
				}
				break;
			case 'm':
				sexoAcumuladorM++;
				if(banderaDesaprobado == true && nota < 7 && altura < 160)
				{
					nombreHombreGuardado = nombre;
					banderaDesaprobado = false;
				}
				if(banderaMuyAlto == true && altura > 200)
				{
					notaHombreAltoGuardado = nota;
					nombreHombreAltoGuardado = nombre;
					banderaMuyAlto = false;
				}
				break;
			default:
				sexoAcumuladorNB++;
				break;
		}

		if(nota > 6)
		{
			notaAcumuladorAprobado++;
			alturaAprobados = alturaAprobados + altura;
		}
		else
		{
			notaAcumuladorDesaprobado++;
		}
		
	}

	alturaAcumulador = alturaAcumulador / contador;
	promedioAlturaAprobados = alturaAprobados / notaAcumuladorAprobado;
	porcentajeDeAprobados = notaAcumuladorAprobado / contador * 100;
	porcentajeMayoresFiebreSobreEnfermos = mayoresConFiebre / alumnosConFiebre * 100;
	porcentajeMayoresFiebreSobreAlumnos = mayoresConFiebre / contador * 100;
	

	if(sexoAcumuladorF > sexoAcumuladorM && sexoAcumuladorF > sexoAcumuladorNB)
	{
		sexoMayor = "Hay mas alumnos de sexo femenino que masculino y no binario";
	}
	else
	{
		if(sexoAcumuladorM > sexoAcumuladorNB)
		{
			sexoMayor = "Hay mas alumnos de sexo masculino que femenino y no binario";
		}
		else
		{
			sexoMayor = "Hay mas alumnos de sexo no binario que masculino y femenino";
		}
	}

	mensaje = "a) El promedio de las alturas es de " + alturaAcumulador + 
	" b) Hay " + sexoAcumuladorF + " alumnos de sexo femenino, " + sexoAcumuladorM + " alumnos de sexo masculino y " + sexoAcumuladorNB + " de alumnos de sexo no binario." +
	" c) Cantidad de alumnos aprobados: " + notaAcumuladorAprobado + ". Cantidad de alumnos desaprobados: " + notaAcumuladorDesaprobado +
	". d) La cantidad de mujeres con altura mayor a 190cm: " + acumuladorDeMujeresAltas +
	". e) " + sexoMayor +
	" f) El nombre de la persona con la mayor altura es " + nombreGuardado +
	". g) La edad de la primera persona con fiebre es de " + edadGuardada +
	". h) El nombre de la primera mujer aprobada es " + nombreMujerGuardada +
	". i) El promedio de altura de los aprobados es " + promedioAlturaAprobados +
	". j) El nombre del primer hombre desaprobado y con una altura menor a 160cm es " + nombreHombreGuardado +
	". k) El porcentaje de aprobados sobre el total de alumnos es de " + porcentajeDeAprobados +
	". l) El nombre del hombre que mide mas de 200cm es " + nombreHombreAltoGuardado + " y su nota fue de " + notaHombreAltoGuardado +
	". m) El porcentaje de alumnos mayores de 50 con fiebre sobre el total de gente con fiebre es " + porcentajeMayoresFiebreSobreEnfermos +
	", y sobre el total de alumnos es " + porcentajeMayoresFiebreSobreAlumnos;

	alert(mensaje);
}

/*
while(isNaN(numeroIngresado"X")==true) => while(isNaN(numeroIngresado))
{
	lo que haga que itere hasta que el valor sea falso.
}

			
			else
			{
				if(sexoAcumuladorM == sexoAcumuladorF)
				{
					sexoMayor = "Hay misma cantidad mayor de alumnos masculinos y femeninos que no binarios.";
				}
				else
				{
					if(sexoAcumuladorM == sexoAcumuladorNB)
					{
						sexoMayor = "Hay misma cantidad mayor de alumnos masculinos y no binarios que femeninos.";
					}
					else
					{
						sexoMayor = "Hay misma cantidad mayor de alumnos femeninos y no binarios que masculinos.";
					}
				}
			}
		}
	}*/

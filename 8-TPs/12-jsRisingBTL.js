/* Pereyra Ian 
Div D TPs 12
*/
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
realizar una carga de datos validada e ingresada por ventanas emergentes solamente
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBrutoIngresado;
 	var numeroLegajoIngresado;
 	var nacionalidadIngresada;

 	edadIngresada = prompt("Ingrese su edad: (18 a 90)");
 	edadIngresada = parseInt(edadIngresada);
 	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
 	{
 		edadIngresada = prompt("Respuesta invalida, reingrese su edad: (18 a 90)");
 		edadIngresada = parseInt(edadIngresada);
 	}

 	sexoIngresado = prompt("Ingrese su sexo: ('M' o 'F')");
 	while(sexoIngresado != 'M' && sexoIngresado != 'F')
 	{
 		sexoIngresado = prompt("Respuesta invalida, reingrese su sexo: ('M' o 'F')");
 	}
 	
 	estadoCivilIngresado = prompt("Ingrese su estado civil: (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
 	{
 		estadoCivilIngresado = prompt("Respuesta invalida, reingrese su estado civil: (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	}
 	
 	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto: (no menor a 8000)");
 	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	while(isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado < 8000)
 	{
 		sueldoBrutoIngresado = prompt("Respuesta invalida, reingrese su sueldo bruto: (no menor a 8000)");
 		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	}
 	
 	numeroLegajoIngresado = prompt("Ingrese su número de legajo: (numérico de 4 cifras, sin ceros a la izquierda.)");
 	numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
 	while(isNaN(numeroLegajoIngresado) || numeroLegajoIngresado < 1000 || numeroLegajoIngresado > 9999)
 	{
 		numeroLegajoIngresado = prompt("Respuesta invalida, reingrese su número de legajo: (numérico de 4 cifras, sin ceros a la izquierda.)");
 		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
 	}
 	
 	nacionalidadIngresada = prompt("Ingrese su nacionalidad: ('A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados)");
 	while(nacionalidadIngresada != 'A' && nacionalidadIngresada != 'E' && nacionalidadIngresada != 'N')
 	{
 		nacionalidadIngresada = prompt("Respuesta invalida, reingrese su nacionalidad: (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
 	}

 	if(sexoIngresado == 'F')
 	{
 		sexoIngresado = 'Femenino';
 	}
 	else
 	{
 		sexoIngresado = 'Masculino';
 	}

 	switch(estadoCivilIngresado)
 	{
 		case 1:
 			estadoCivilIngresado = "Soltero";
 			break;

 		case 2:
 			estadoCivilIngresado = "Casado";
 			break;

 		case 3:
 			estadoCivilIngresado = "Divorciado";
 			break;

 		default:
 			estadoCivilIngresado = "Viudo";
 			break;
 	}

 	switch(nacionalidadIngresada)
 	{
 		case 'A':
 			nacionalidadIngresada = "Argentino";
 			break;

 		case 'E':
 			nacionalidadIngresada = "Extranjero";
 			break;

 		default:
 			nacionalidadIngresada = "Nacionalizado";
 			break;
 	}

 	document.getElementById('txtIdEdad').value = edadIngresada;
 	document.getElementById('txtIdSexo').value = sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
 	document.getElementById('txtIdSueldo').value = sueldoBrutoIngresado;
 	document.getElementById('txtIdLegajo').value = numeroLegajoIngresado;
 	document.getElementById('txtIdNacionalidad').value = nacionalidadIngresada;
}

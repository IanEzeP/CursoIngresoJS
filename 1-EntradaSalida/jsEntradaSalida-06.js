/*Pereyra Ian DIV D
  E/S 06
*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;


	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero + segundoNumero;


	alert("La suma es " + resultado);
}


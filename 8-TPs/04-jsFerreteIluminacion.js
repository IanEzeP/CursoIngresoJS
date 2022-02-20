/* Pereyra Ian 
Div D TPs 04
*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var descuento;
 	var precioUnitario;
 	var precioBruto;
 	var iIBB;
 	var calculoDescuento;
 	var calculoImpuesto;
 	var precioFinal;

 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	marcaLamparas = document.getElementById('Marca').value;

 	cantidadLamparas = parseInt(cantidadLamparas);

 	precioUnitario = 35;
 	iIBB = 10;
 	
 	switch(cantidadLamparas)
 	{
 		case 1:
 		case 2:
 			descuento = 0;
 			break;

		case 3:
			descuento = 5;
			if(marcaLamparas == "ArgentinaLuz")
			{
				descuento = 15;
			}
			else
			{
				if(marcaLamparas == "FelipeLamparas")
				{
					descuento = 10;
				}
			}
			break;

		case 4:
			descuento = 20;
			if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
			{
				descuento = 25;
			}
			break;

		case 5:
			descuento = 30;
			if(marca == "ArgentinaLuz")
			{
				descuento = 40;
			}
			break;

		default:
			descuento = 50;
			break;
 	}

 	precioBruto = cantidadLamparas * precioUnitario;
 	calculoDescuento = precioBruto * descuento /100;
 	precioFinal = precioBruto - calculoDescuento;
 	
 	if(precioFinal > 120)
 	{
 		calculoImpuesto = precioFinal * iIBB /100;
 		precioFinal = precioFinal + calculoImpuesto;
 		alert("Usted pago $" + calculoImpuesto + " de IIBB");
 	}

 	document.getElementById('txtIdprecioDescuento').value = precioFinal;	
}

/*switch(cantidadLamparas)
 	{
 		case 1:
 		case 2:
 			descuento = 0;
 			break;

 		case 3:
 			switch(marcaLamparas)
 			{
 				case "ArgentinaLuz":
 					descuento = 15;
 					break;
				case "FelipeLamparas":
					descuento = 10;
					break;
				default:
					descuento = 5;
					break;
 			}
 			break;

		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					descuento = 25;
					break;
				default:
					descuento = 20;
					break;
			}
			break;

		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					descuento = 40;
					break;
				default:
					descuento = 30;
					break;
			}
			break;

		default:
			descuento = 50;
			break;
 	}*/

/*function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var descuento;
 	var precioBruto;
 	var calculoImpuesto;
 	var precioFinal;

 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	marcaLamparas = document.getElementById('Marca').value;

 	cantidadLamparas = parseInt(cantidadLamparas);

 	descuento = 0
 	//A.
 	if(cantidadLamparas > 5)
 	{
 		descuento = 50;
 	}
 	else //B.
 	{
 		if(cantidadLamparas == 5)
 		{
 			if(marcaLamparas == "ArgentinaLuz")
			{
				descuento = 40;
			}
			else
			{
				descuento = 30;
			}
 		}
 		else //C.
 		{
 			if(cantidadLamparas == 4)
 			{
 				if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
 				{
 					descuento = 25;
 				}
 				else
 				{
 					descuento = 20;
 				}
 			}
 			else //D.
 			{
 				if(cantidadLamparas == 3)
 				{
 					if(marcaLamparas == "ArgentinaLuz")
 					{
 						descuento = 15;
 					}
 					else
 					{
 						if(marcaLamparas == "FelipeLamparas")
 						{
 							descuento = 10;
 						}
 						else
 						{
 							descuento = 5;
 						}
 					}
 				}
 			}
 		}
 	}
 	precioBruto = cantidadLamparas * 35;
 	precioFinal = precioBruto - (precioBruto * descuento /100);
 	//E.
 	if(precioFinal > 120)
 	{
 		calculoImpuesto = precioFinal * 10 /100;
 		precioFinal = precioFinal + calculoImpuesto;
 		alert("Usted pago $" + calculoImpuesto + " de IIBB");
 	}

 	document.getElementById('txtIdprecioDescuento').value = precioFinal;	
}
C. (otra forma)
 	else
	{
		if(cantidadLamparas > 4 && (marcaLamparas == "FelipeLamparas" || marcaLamparas == "Argentinaluz"))
	}
Dejar dentro de los condicionales la unica variable que va a cambiar,
fuera de los condicionales utilizar todos los calculos.
*/

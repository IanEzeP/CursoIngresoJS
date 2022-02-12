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
 	var precioConDescuento;
 	var valorDeCompra;
 	var calculoImpuesto;

 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	marcaLamparas = document.getElementById('Marca').value;

 	cantidadLamparas = parseInt(cantidadLamparas);

 	valorDeCompra = cantidadLamparas * 35;
 	precioConDescuento = valorDeCompra;
 	//A.
 	if(cantidadLamparas > 5)
 	{
 		precioConDescuento = valorDeCompra - (valorDeCompra*0.5);
 	}
 	else //B.
 	{
 		if(cantidadLamparas == 5)
 		{
 			if(marcaLamparas == "ArgentinaLuz")
			{
				precioConDescuento = valorDeCompra - (valorDeCompra * 0.4);
			}
			else
			{
				precioConDescuento = valorDeCompra - (valorDeCompra * 0.3);
			}
 		}
 		else //C.
 		{
 			if(cantidadLamparas == 4)
 			{
 				if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
 				{
 					precioConDescuento = valorDeCompra - (valorDeCompra * 0.25);
 				}
 				else
 				{
 					precioConDescuento = valorDeCompra - (valorDeCompra * 0.2);
 				}
 			}
 			else //D.
 			{
 				if(cantidadLamparas == 3)
 				{
 					if(marcaLamparas == "ArgentinaLuz")
 					{
 						precioConDescuento = valorDeCompra - (valorDeCompra * 0.15);
 					}
 					else
 					{
 						if(marcaLamparas == "FelipeLamparas")
 						{
 							precioConDescuento = valorDeCompra - (valorDeCompra * 0.10);
 						}
 						else
 						{
 							precioConDescuento = valorDeCompra - (valorDeCompra * 0.05);
 						}
 					}
 				}
 			}
 		}
 	}
 	//E.
 	if(valorDeCompra > 120)
 	{
 		calculoImpuesto = valorDeCompra * 0.10;
 		valorDeCompra = valorDeCompra + calculoImpuesto;
 		alert("Usted pago $" + calculoImpuesto + " de IIBB");
 	}

 	document.getElementById('txtIdprecioDescuento').value = precioConDescuento;	
}
/*C. (otra forma)
 	else
	{
		if(cantidadLamparas > 4 && (marcaLamparas == "FelipeLamparas" || marcaLamparas == "Argentinaluz"))
	}
Dejar dentro de los condicionales la unica variable que va a cambiar,
fuera de los condicionales utilizar todos los calculos.
*/

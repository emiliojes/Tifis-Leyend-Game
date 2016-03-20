var tablero, direccion;

var teclas = 
{
	up: 38,
	down: 40,
	left: 37,
	right: 39
};

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 40,
	y: 40,
	frenteURL: "diana-frente.png",
	frenteOK: false,
	atrasURL: "diana-atras.png",
	atrasOK: false,
	derURL: "diana-der.png",
	derOK: false,
	izqURL: "diana-izq.png",
	izqOK: false,
	velocidad: 20
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);

}
function teclado(datos)
{
	var codigo = datos.keyCode;
	if (codigo == teclas.up)
	{
		tifis.y -= tifis.velocidad;
	}
	if (codigo == teclas.down)
	{
		tifis.y += tifis.velocidad;
	}
	if (codigo == teclas.left)
	{
		tifis.x -= tifis.velocidad;
	}
	if (codigo == teclas.right)
	{
		tifis.x += tifis.velocidad;
	}

	direccion = codigo;

	dibujar();
}

function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}

function confirmarFondo()
{
	//tablero.drawImage(fondo.imagen, 0, 0);
	//tifis.frenteOK = true;
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	//tablero.drawImage(fondo.imagen, 0, 0);
	tifis.frenteOK = true;
	dibujar();
}
function confirmarAtras()
{
	//tablero.drawImage(fondo.imagen, 0, 0);
	tifis.atrasOK = true;
	dibujar();
}
function confirmarDer()
{
	//tablero.drawImage(fondo.imagen, 0, 0);
	tifis.derOK = true;
	dibujar();
}
function confirmarIzq()
{
	//tablero.drawImage(fondo.imagen, 0, 0);
	tifis.izqOK = true;
	dibujar();
}


function dibujar()
{
	//Fondo
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	//Liz, como lizOK es booleana no necesito comparar
	if(liz.lizOK)
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y)
	}
	//Tifis Frente
	var tifisDibujo = tifis.frente;
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if(direccion == teclas.up)
		{
			tifisDibujo = tifis.atras;
		}
		if(direccion == teclas.down)
		{
			tifisDibujo = tifis.frente;
		}
		if(direccion == teclas.left)
		{
			tifisDibujo = tifis.izq;
		}
		if(direccion == teclas.right)
		{
			tifisDibujo = tifis.der;
		}
		tablero.drawImage(tifisDibujo, tifis.x, tifis.y);
	}
	
}


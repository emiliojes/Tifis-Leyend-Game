var tablero;

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	x: 40,
	y: 40,
	frenteURL: "diana-frente.png",
	frenteOK: false
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

	var m = document.getElementById("mover");
	m.addEventListener("click", movimiento);
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

function dibujar()
{
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	if(tifis.frenteOK == true)
	{
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	}
}

function movimiento()
{
	tifis.x += 10;
	dibujar();
}
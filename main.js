let cantidadInput = document.getElementById('cantidad');
let generarBoton = document.getElementById('generar');
let contrasenaInput = document.getElementById('contrasena');

const caracteresOpciones = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generarContrasena() {
	let numeroDigitado = parseInt(cantidadInput.value);
	if ( numeroDigitado<8 ) {
		alert("Cantidad de caracteres es inferior a lo requerido");
	}
	let contrasena = '';
	for (let i = 0; i < numeroDigitado; i++) {
		let numeroAleatorio = Math.floor(Math.random() * caracteresOpciones.length);
		let caracterAleatorio = caracteresOpciones[numeroAleatorio];
		contrasena += caracterAleatorio;
	}
	contrasenaInput.value = contrasena;
}

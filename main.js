let cantidadInput = document.getElementById('cantidad');
let generarBoton = document.getElementById('generar');
let contrasenaInput = document.getElementById('contrasena');
let limpiarBoton = document.getElementById('limpiar');
let mensajeSpan = document.getElementById('mensaje');
const caracteresOpciones = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generarContrasena() {
	let numeroDigitado = parseInt(cantidadInput.value);
	if ( numeroDigitado<8 || !numeroDigitado) {
		mensajeSpan.innerHTML = "Ingrese una cantidad mayor a 8 caracteres";
		return;
	}
	let contrasena = '';
	for (let i = 0; i < numeroDigitado; i++) {
		let numeroAleatorio = Math.floor(Math.random() * caracteresOpciones.length);
		let caracterAleatorio = caracteresOpciones[numeroAleatorio];
		contrasena += caracterAleatorio;
	}
	validarContraseña(contrasena);
}
function validarContraseña(contrasena) {
	let validarNumeros = contrasena.match(/[0-9]/g) ?? false;
	let validarMayus = contrasena.match(/[A-Z]/g) ?? false;
	let validarCaracteresEspeciales = contrasena.match(/[!@#$%^&*()]/g) ?? false;
	let mensajeContrasenaDebil = "Contraseña Insegura: su contraseña es debil. ";
	
	if (validarNumeros==false) {
		mensajeContrasenaDebil += "No tiene números. ";
	}
	if (validarMayus==false) {
		mensajeContrasenaDebil += "No tiene mayúsculas. ";
	}
	if (validarCaracteresEspeciales==false) {
		mensajeContrasenaDebil += "No tiene caracteres especiales.";
	}
	if (validarCaracteresEspeciales == false || validarMayus == false || validarNumeros == false) {
		contrasenaInput.value = contrasena;
		mensajeSpan.innerHTML = mensajeContrasenaDebil;
		cambiarEstadoBotonLimpiar(false);
		return;
	}

	if ((contrasena.length >= 8) && (validarNumeros.length >= 1) && 
		(validarMayus.length >= 1)&& (validarCaracteresEspeciales.length >= 1)) 
	{
		let mensajeContrasenaFuerte = "Contraseña Segura: Su contraseña es fuerte";
		contrasenaInput.value = contrasena;
		mensajeSpan.innerHTML = mensajeContrasenaFuerte;
		cambiarEstadoBotonLimpiar(false);	
		return;
	}
}

function limpiar() {
	cantidadInput.value = '';
	contrasenaInput.value = '';
	mensajeSpan.innerHTML = '';
	cambiarEstadoBotonLimpiar(true);
}
function cambiarEstadoBotonLimpiar(interruptor) {
	limpiarBoton.hidden = interruptor;
}
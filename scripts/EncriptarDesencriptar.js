/**
 * VALORES PARA LA ENCRIPTACION
 *
 * a -> ai
 * e -> enter
 * i -> imes
 * o -> ober
 * u -> ufat
 *
 * CONSIDERACIONES
 * 1. Solo se deben encriptar palabras en minúsculas.
 * 2. No se permiten caracteres especiales ni letras con acentos.
 * 3. Un texto encriptado debe poder regresar a su forma original o desencriptado.
 */

// Obtenemos las áreas de texto
var textoAEncriptarObjeto = document.getElementById("textoAEncriptar");
var textoEncriptadoObjeto = document.getElementById("textoEncriptado");

// Obtenemos los objetos de botón
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopiar");

/**
 * Añade el evento 'click' al botón de encriptar.
 * Valida el texto antes de encriptarlo.
 */
botonEncriptar.addEventListener('click', function() {
    var texto = textoAEncriptarObjeto.value;
    if (validarTexto(texto)) {
        textoEncriptadoObjeto.value = encriptarTexto(texto);
    } else {
        alert("El texto no es válido");
    }
});

/**
 * Añade el evento 'click' al botón de desencriptar.
 * Valida el texto antes de desencriptarlo.
 */
botonDesencriptar.addEventListener('click', function() {
    var texto = textoAEncriptarObjeto.value;
    if (validarTexto(texto)) {
        textoEncriptadoObjeto.value = desencriptarTexto(texto);
    } else {
        alert("El texto no es válido");
    }
});

/**
 * Añade el evento 'click' al botón de copiar.
 * Copia el texto encriptado al portapapeles.
 */
botonCopiar.addEventListener('click', function() {
    var texto = textoEncriptadoObjeto.value;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(error) {
        alert("Error al copiar el texto: " + error);
    });
});

/**
 * Valida el texto asegurándose de que solo contiene letras minúsculas y espacios.
 *
 * @param {string} texto - El texto a validar.
 * @returns {boolean} - true si el texto es válido, false en caso contrario.
 */
function validarTexto(texto) {
    var regex = /^[a-z ]+$/;
    return regex.test(texto);
}

/**
 * Encripta el texto según las reglas definidas.
 *
 * @param {string} texto - El texto a encriptar.
 * @returns {string} - El texto encriptado.
 */
function encriptarTexto(texto) {
    var textoEncriptado = texto.replace(/a/g, "ai")
                               .replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

/**
 * Desencripta el texto según las reglas definidas.
 *
 * @param {string} texto - El texto a desencriptar.
 * @returns {string} - El texto desencriptado.
 */
function desencriptarTexto(texto) {
    var textoDesencriptado = texto.replace(/ai/g, "a")
                                  .replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

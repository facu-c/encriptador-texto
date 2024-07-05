let resultado = document.querySelector('#resultado');

const reemplazosEncriptar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

const reemplazosDesencriptar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
};

function encriptar() {
    let input = document.querySelector('#encriptar').value; 
    let textoResultado = input.replace(/[aeiou]/gi, vocal => reemplazosEncriptar[vocal.toLowerCase()] || vocal);
    mostrarResultado(textoResultado);
}

function desencriptar() {
    let input = document.querySelector('#encriptar').value;
    let textoResultado = input.replace(/\Bai|enter|imes|ober|ufat\B/gi, patron => reemplazosDesencriptar[patron.toLowerCase()] || patron);
    console.log(textoResultado);    
    mostrarResultado(textoResultado);
}

function mostrarResultado(texto) {
    resultado.innerHTML = ''; // Limpia el resultado anterior
    resultado.classList.add('resultado', 'resultado__hecho');
    resultado.textContent = texto; // Muestra el texto resultado en el elemento resultado
}

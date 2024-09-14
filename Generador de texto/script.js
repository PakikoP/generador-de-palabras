document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const textoOriginal = e.target.result;
            procesarTexto(textoOriginal);
        };
        reader.readAsText(file);
    }
});

function procesarTexto(textoOriginal) {
    // Contar y resaltar "hidalgo"
    const palabraHidalgo = 'hidalgo';
    const regexHidalgo = new RegExp(`(${palabraHidalgo})`, 'gi');
    const cantidadHidalgo = (textoOriginal.match(regexHidalgo) || []).length;

    // Reemplazar "hidalgo" por la versión resaltada
    const textoResaltado = textoOriginal.replace(regexHidalgo, '<span class="highlight">$1</span>');

    // Reemplazar "libros" por emoji de libros
    const textoFinal = textoResaltado.replace(/libros/gi, '📚');

    // Actualizar el contenido del div
    document.getElementById('texto').innerHTML = textoFinal;
    document.getElementById('resultado').innerHTML = `La palabra "hidalgo" aparece ${cantidadHidalgo} vez${cantidadHidalgo !== 1 ? 'es' : ''}.`;
}
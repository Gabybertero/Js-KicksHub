function calcularTalle() {
    var seleccion = document.getElementById("talle");
    var tallaSeleccionada = seleccion.options[seleccion.selectedIndex].value;

    document.getElementById("resultadoTalle").textContent = tallaSeleccionada;
}

const botonCalcularEnvio = document.getElementById('calcularEnvio');

botonCalcularEnvio.addEventListener('click', function() {
    const precio = parseFloat(prompt('Por favor, ingresa el valor del par:'));
    const talle = prompt('Por favor, ingrese su talle');

    const tarifasEnvio = {
        1000: 500,
        1200: 550,
        1500: 600,
        1700: 650,
        1800: 700,
        2000: 750,
    };

    function calcularTarifaEnvio(precio) {
        for (const rango in tarifasEnvio) {
            if (precio <= parseFloat(rango)) {
                return tarifasEnvio[rango];
            }
        }
        return 'No se encontró tarifa de envío para este precio.';
    }

    const tarifaEnvio = calcularTarifaEnvio(precio);

    if (tarifaEnvio !== undefined) {
        const precioFinal = precio + tarifaEnvio;
        alert(`Precio: $${precio}\nTalle: ${talle}\nTarifa de Envío: $${tarifaEnvio}\nPrecio Final: $${precioFinal}`);
    } else {
        alert('Por favor, ingresa un precio válido.');
    }
});


let nombreUsuario;
let apellidoUsuario;
let encuestaNike;

while (true) {
    nombreUsuario = prompt("Ingrese su Nombre");
    apellidoUsuario = prompt("Ingrese su Apellido");

    if (nombreUsuario !== "" && apellidoUsuario !== "") {
        console.log("Nombre: " + nombreUsuario + " Apellido: " + apellidoUsuario);
    } else {
        alert("Todos los campos son obligatorios");
        continue;
    }

    while (true) {
        alert ("Hola " + nombreUsuario + " " + apellidoUsuario + "! Deseamos conocer más sobre ti, así que te invitamos a participar en una encuesta rápida.")

        encuestaNike = prompt(`De estas tres alternativas de Nike, ¿cuál te gusta más? (Conteste según la enumeración establecida):
        1: Nike Dunk Low ~ Naranja
        2: Nike Curt Vision Low ~ Negro
        3: Nike Air Force 1 ~ Blanco
        `);

        switch (encuestaNike) {
            case "1":
                console.log("Nike Dunk Low ~ Naranja");
                break;
            case "2":
                console.log("Nike Curt Vision Low ~ Negro");
                break;
            case "3":
                console.log("Nike Air Force 1 ~ Blanco");
                break;
            default:
                alert("Respuesta no válida. Por favor, elija 1, 2 o 3.");
                continue;
        }

        break
    }

    const repetirEncuesta = confirm("¿Deseas repetir la encuesta? (En el caso que desee repetir la encuesta seleccione aceptar)");
    if (!repetirEncuesta) {
        break
    }
    
    break
} 





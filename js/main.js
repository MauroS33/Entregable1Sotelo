function saludar() {
    console.log("Hola, bienvenido a la familia del club!!");
}
saludar();

const MENSAJE_FIN = "Gracias por colaborar con nosotros, ";

let nombre = prompt("Ingrese su nombre");

let menu = parseInt(prompt("Elija una opción: \n 1-ser jugador \n 2-ser colaborador \n 3-ser esponsor \n 4-ser socio \n 5-salir"));

let mail; 
let emailValido = false; 

let empresas = [];
let jugadores = [];
let colaboradores = [];

function esEmailValido(email) {
    // Agrego una verificacion de mail para ingresar un booleano 
    let atIndex = email.indexOf('@');
    let dotIndex = email.indexOf('.', atIndex);
    return atIndex > 0 && dotIndex > atIndex + 1;
}

while (menu !== 5) {
    switch (menu) {
        case 1:
            let menuJugadores = parseInt(prompt("Categorías: \n 1-Futbol 11 Masculino \n 2-Futbol 5 Masculino \n 3-Futbol 5 Femenino \n 4-Basketball Masculino \n 5-Salir"));
            do {
                mail = prompt("Ingrese su email");
                emailValido = esEmailValido(mail);
                if (!emailValido) {
                    alert("Por favor, ingrese un email válido.");
                }
            } while (!emailValido);

            let jugador = {
                categoria: menuJugadores,
                email: mail,
                nombre: nombre
            };
            
            jugadores.push(jugador);

            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! Nos pondremos en contacto contigo a la brevedad.");
            break;
        case 2:
            let menuColab = parseInt(prompt("Vacantes: \n 1-DT futbol 11 Masculino \n 2-DT Futbol 5 Masculino \n 3- DT Futbol 5 Femenino \n 4- DT Basketball Masculino \n 5-Salir"));
            do {
                mail = prompt("Ingrese su email");
                emailValido = esEmailValido(mail);
                if (!emailValido) {
                    alert("Por favor, ingrese un email válido.");
                }
            } while (!emailValido);

            let colaborador = {
                vacante: menuColab,
                email: mail,
                nombre: nombre
            };
            
            colaboradores.push(colaborador);

            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! En el próximo directorio resolveremos su participación y nos pondremos en contacto contigo a la brevedad.");
            break;
        case 3:
            let menuSponsors = parseInt(prompt("Los sponsors aparecerán en todas las categorías del club: \n 1-Remera Zona Pecho \n 2-Remera Zona Espalda \n 3-Remera Zona Mangas \n 4-Short Zona Frontal \n 5-Short Zona Trasera \n 6-Salir"));
            do {
                mail = prompt("Ingrese su email");
                emailValido = esEmailValido(mail);
                if (!emailValido) {
                    alert("Por favor, ingrese un email válido.");
                }
            } while (!emailValido);
            let nombreEmpresa = prompt("Ingrese el nombre de su empresa");
                
            // Guardo en un objeto respuesta del menuSponsors, el email y nombre de la empresa ya que lo vimos en la ultima clase
            let sponsor = {
                zona: menuSponsors,
                email: mail,
                empresa: nombreEmpresa
            };
            
            empresas.push(sponsor);
            
            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! Actualmente se están ingresando las solicitudes de sponsors para las temporadas 2025/26. Nos pondremos en contacto contigo a la brevedad.");
            break;
        case 4:
            let menuMembresias = parseInt(prompt("Membresías: \n 1-Membresía jugador pago anual (15% off) \n 2-Social \n 3-Beca (Casos Previamente Evaluados) \n 4-Salir"));
            do {
                mail = prompt("Ingrese su email");
                emailValido = esEmailValido(mail);
                if (!emailValido) {
                    alert("Por favor, ingrese un email válido.");
                }
            } while (!emailValido);
            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! Se le enviarán los datos para la transferencia a " + mail + " a la brevedad, gracias.");
            break;
        default:
            alert("Opción incorrecta");
            break;
    }

    menu = parseInt(prompt("Elija una opción: \n 1-ser jugador \n 2-ser colaborador \n 3-ser esponsor \n 4-ser socio \n 5-salir"));
}

alert(MENSAJE_FIN + nombre + "!");
// Array de jugadores
console.log("Jugadores/as que se registraron:");
console.log(jugadores);

// Array de colaboradores
console.log("Colaboradores que se registraron:");
console.log(colaboradores);

// Array de sponsors
console.log("Empresas que se registraron como sponsors:");
console.log(empresas);
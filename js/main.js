function saludar() {
    console.log("Hola, bienvenido a la familia del club!!");
}
saludar();

let nombre = prompt("Ingrese su nombre");

let menu = parseInt(prompt("Elija una opción: \n 1-ser jugador \n 2-ser colaborador \n 3-ser esponsor \n 4-ser socio \n 5-salir"));

let mail; // Variable para almacenar el correo electrónico

let empresas = [];

while (menu !== 5) {
    switch (menu) {
        case 1:
            let menuJugadores = parseInt(prompt("Categorías: \n 1-Futbol 11 Masculino \n 2-Futbol 5 Masculino \n 3-Futbol 5 Femenino \n 4-Basketball Masculino \n 5-Salir"));
            mail = prompt("Ingrese su email");
            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! Nos pondremos en contacto contigo a la brevedad.");
            break;
        case 2:
            let menuColab = parseInt(prompt("Vacantes: \n 1-DT futbol 11 Masculino \n 2-DT Futbol 5 Masculino \n 3- DT Futbol 5 Femenino \n 4- DT Basketball Masculino \n 5-Salir"));
            mail = prompt("Ingrese su email");
            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! En el próximo directorio resolveremos su participación y nos pondremos en contacto contigo a la brevedad.");
            break;
        case 3:
            let menuSponsors = parseInt(prompt("Los sponsors aparecerán en todas las categorías del club: \n 1-Remera Zona Pecho \n 2-Remera Zona Espalda \n 3-Remera Zona Mangas \n 4-Short Zona Frontal \n 5-Short Zona Trasera \n 6-Salir"));
            mail = prompt("Ingrese su email");
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
            mail = prompt("Ingrese su email");
            alert("Gracias por querer ser parte de nuestra familia, " + nombre + "! Se le enviarán los datos para la transferencia a " + mail + " a la brevedad, gracias.");
            break;
        default:
            alert("Opción incorrecta");
            break;
    }

    menu = parseInt(prompt("Elija una opción: \n 1-ser jugador \n 2-ser colaborador \n 3-ser esponsor \n 4-ser socio \n 5-salir"));
}

alert("Gracias por colaborar con nosotros, " + nombre + "!");

// Lista de array de empresas inscriptas
console.log("Empresas que se registraron como sponsors:");
console.log(empresas);
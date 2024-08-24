// Ya no necesitas document.addEventListener('DOMContentLoaded', () => {

    const MENSAJE_FIN = "Gracias por colaborar con nosotros, ";

    const jugadores = JSON.parse(localStorage.getItem('jugadores')) || [];
    const colaboradores = JSON.parse(localStorage.getItem('colaboradores')) || [];
    const empresas =  JSON.parse(localStorage.getItem('empresas')) ||  [];
    
    const menuPrincipal = document.getElementById('menu-principal');
    const formularios = document.querySelectorAll('.formulario');
    const mensajeDiv = document.getElementById('mensaje');
    const mensajeTexto = document.getElementById('mensaje-texto');
    
    const mostrarFormulario = (formulario) => {
        formularios.forEach(form => form.classList.add('oculto'));
        formulario.classList.remove('oculto');
    };
    
    const mostrarMensaje = (mensaje) => {
        formularios.forEach(form => form.classList.add('oculto'));
        mensajeTexto.textContent = mensaje;
        mensajeDiv.classList.remove('oculto');
    };
    
    const esEmailValido = (email) => {
        let atIndex = email.indexOf('@');
        let dotIndex = email.indexOf('.', atIndex);
        return atIndex > 0 && dotIndex > atIndex + 1;
    };
    
    menuPrincipal.addEventListener('click', (e) => {
        const opcion = e.target.getAttribute('data-opcion');
    
        if (opcion === "1") {
            mostrarFormulario(document.getElementById('jugador-form'));
        } else if (opcion === "2") {
            mostrarFormulario(document.getElementById('colaborador-form'));
        } else if (opcion === "3") {
            mostrarFormulario(document.getElementById('sponsor-form'));
        } else if (opcion === "4") {
            mostrarFormulario(document.getElementById('socio-form'));
        } else if (opcion === "5") {
            mostrarMensaje(MENSAJE_FIN);
        }
    });
    
    document.getElementById('guardar-jugador').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-jugador').value;
        const categoria = document.getElementById('categoria-jugador').value;
        const email = document.getElementById('email-jugador').value;
    
        if (esEmailValido(email) && nombre) {
            jugadores.push({ categoria, email, nombre });
            localStorage.setItem('jugadores', JSON.stringify(jugadores));
            mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + nombre + "!");
        } else {
            mostrarMensaje("Por favor, ingrese un nombre y email válidos.");
        }
    });
    
    document.getElementById('guardar-colaborador').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-colaborador').value;
        const vacante = document.getElementById('vacante-colaborador').value;
        const email = document.getElementById('email-colaborador').value;
    
        if (esEmailValido(email) && nombre) {
            colaboradores.push({ vacante, email, nombre });
            localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
            mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + nombre + "!");
        } else {
            mostrarMensaje("Por favor, ingrese un nombre y email válidos.");
        }
    });
    
    document.getElementById('guardar-sponsor').addEventListener('click', () => {
        const empresa = document.getElementById('nombre-empresa').value;
        const zona = document.getElementById('zona-sponsor').value;
        const email = document.getElementById('email-sponsor').value;
    
        if (esEmailValido(email) && empresa) {
            empresas.push({ zona, email, empresa });
            localStorage.setItem('empresas', JSON.stringify(empresas));
            mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + empresa + "!");
        } else {
            mostrarMensaje("Por favor, ingrese un nombre de empresa y email válidos.");
        }
    });
    
    document.getElementById('guardar-socio').addEventListener('click', () => {
        const nombre = document.getElementById('nombre-socio').value;
        const membresia = document.getElementById('membresia-socio').value;
        const email = document.getElementById('email-socio').value;
    
        if (esEmailValido(email) && nombre) {
            mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + nombre + "! Se le enviarán los datos para la transferencia a " + email + " a la brevedad, gracias.");
        } else {
            mostrarMensaje("Por favor, ingrese un nombre y email válidos.");
        }
    });
    
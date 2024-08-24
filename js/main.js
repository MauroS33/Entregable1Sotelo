    const MENSAJE_FIN = "Gracias por colaborar con nosotros, ";

    const jugadores = JSON.parse(localStorage.getItem('jugadores')) || [];
    const colaboradores = JSON.parse(localStorage.getItem('colaboradores')) || [];
    const empresas = JSON.parse(localStorage.getItem('empresas')) || [];

    const menuPrincipal = document.getElementById('menu-principal');
    const formularios = document.querySelectorAll('.formulario');
    const mensajeDiv = document.getElementById('mensaje');
    const mensajeTexto = document.getElementById('mensaje-texto');

    const mostrarFormulario = (formulario) => {
        formularios.forEach(form => form.classList.add('oculto'));
        mensajeDiv.classList.add('oculto');
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

    // Jugadores
    let jugadorActual = { nombre: '', categoria: '', email: '' };
    document.getElementById('continuar-jugador-paso-1').addEventListener('click', () => {
        jugadorActual.nombre = document.getElementById('nombre-jugador').value;
        if (jugadorActual.nombre) {
            document.getElementById('jugador-paso-1').classList.add('oculto');
            document.getElementById('jugador-paso-2').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un nombre.");
        }
    });

    document.getElementById('continuar-jugador-paso-2').addEventListener('click', () => {
        jugadorActual.categoria = document.getElementById('categoria-jugador').value;
        document.getElementById('jugador-paso-2').classList.add('oculto');
        document.getElementById('jugador-paso-3').classList.remove('oculto');
    });

    document.getElementById('continuar-jugador-paso-3').addEventListener('click', () => {
        jugadorActual.email = document.getElementById('email-jugador').value;
        if (esEmailValido(jugadorActual.email)) {
            document.getElementById('jugador-paso-3').classList.add('oculto');
            document.getElementById('resumen-jugador').textContent = 
                `Nombre: ${jugadorActual.nombre}\nCategoría: ${jugadorActual.categoria}\nEmail: ${jugadorActual.email}`;
            document.getElementById('jugador-confirmar').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un email válido.");
        }
    });

    document.getElementById('confirmar-jugador').addEventListener('click', () => {
        jugadores.push(jugadorActual);
        localStorage.setItem('jugadores', JSON.stringify(jugadores));
        mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + jugadorActual.nombre + "! Para nuestro proximo partido amistoso de la categoria nos pondremos en contacto contigo.");
    });

    document.getElementById('modificar-jugador').addEventListener('click', () => {
        document.getElementById('jugador-confirmar').classList.add('oculto');
        document.getElementById('jugador-paso-1').classList.remove('oculto');
    });

    // Colaboradores
    let colaboradorActual = { nombre: '', vacante: '', email: '' };
    document.getElementById('continuar-colaborador-paso-1').addEventListener('click', () => {
        colaboradorActual.nombre = document.getElementById('nombre-colaborador').value;
        if (colaboradorActual.nombre) {
            document.getElementById('colaborador-paso-1').classList.add('oculto');
            document.getElementById('colaborador-paso-2').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un nombre.");
        }
    });

    document.getElementById('continuar-colaborador-paso-2').addEventListener('click', () => {
        colaboradorActual.vacante = document.getElementById('vacante-colaborador').value;
        document.getElementById('colaborador-paso-2').classList.add('oculto');
        document.getElementById('colaborador-paso-3').classList.remove('oculto');
    });

    document.getElementById('continuar-colaborador-paso-3').addEventListener('click', () => {
        colaboradorActual.email = document.getElementById('email-colaborador').value;
        if (esEmailValido(colaboradorActual.email)) {
            document.getElementById('colaborador-paso-3').classList.add('oculto');
            document.getElementById('resumen-colaborador').textContent = 
                `Nombre: ${colaboradorActual.nombre}\nVacante: ${colaboradorActual.vacante}\nEmail: ${colaboradorActual.email}`;
            document.getElementById('colaborador-confirmar').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un email válido.");
        }
    });

    document.getElementById('confirmar-colaborador').addEventListener('click', () => {
        colaboradores.push(colaboradorActual);
        localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
        mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + colaboradorActual.nombre + "! Nos pondremos en contacto contigo luego de la proxima junta directiva.");
    });

    document.getElementById('modificar-colaborador').addEventListener('click', () => {
        document.getElementById('colaborador-confirmar').classList.add('oculto');
        document.getElementById('colaborador-paso-1').classList.remove('oculto');
    });

    // Sponsors
    let sponsorActual = { empresa: '', zona: '', email: '' };
    document.getElementById('continuar-sponsor-paso-1').addEventListener('click', () => {
        sponsorActual.empresa = document.getElementById('nombre-empresa').value;
        if (sponsorActual.empresa) {
            document.getElementById('sponsor-paso-1').classList.add('oculto');
            document.getElementById('sponsor-paso-2').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese el nombre de la empresa.");
        }
    });

    document.getElementById('continuar-sponsor-paso-2').addEventListener('click', () => {
        sponsorActual.zona = document.getElementById('zona-sponsor').value;
        document.getElementById('sponsor-paso-2').classList.add('oculto');
        document.getElementById('sponsor-paso-3').classList.remove('oculto');
    });

    document.getElementById('continuar-sponsor-paso-3').addEventListener('click', () => {
        sponsorActual.email = document.getElementById('email-sponsor').value;
        if (esEmailValido(sponsorActual.email)) {
            document.getElementById('sponsor-paso-3').classList.add('oculto');
            document.getElementById('resumen-sponsor').textContent = 
                `Empresa: ${sponsorActual.empresa}\nZona: ${sponsorActual.zona}\nEmail: ${sponsorActual.email}`;
            document.getElementById('sponsor-confirmar').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un email válido.");
        }
    });

    document.getElementById('confirmar-sponsor').addEventListener('click', () => {
        empresas.push(sponsorActual);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        mostrarMensaje("Gracias por querer ser parte de nuestra familia, " + sponsorActual.empresa + "! Actualmente se estan revisando los sponsors para la temporada 2025 a 2027. Nos pondremos en contacto contigo luego de revisar los postulantes.");
    });

    document.getElementById('modificar-sponsor').addEventListener('click', () => {
        document.getElementById('sponsor-confirmar').classList.add('oculto');
        document.getElementById('sponsor-paso-1').classList.remove('oculto');
    });

    // Socios
    let socioActual = { nombre: '', membresia: '', email: '' };
    document.getElementById('continuar-socio-paso-1').addEventListener('click', () => {
        socioActual.nombre = document.getElementById('nombre-socio').value;
        if (socioActual.nombre) {
            document.getElementById('socio-paso-1').classList.add('oculto');
            document.getElementById('socio-paso-2').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un nombre.");
        }
    });

    document.getElementById('continuar-socio-paso-2').addEventListener('click', () => {
        socioActual.membresia = document.getElementById('membresia-socio').value;
        document.getElementById('socio-paso-2').classList.add('oculto');
        document.getElementById('socio-paso-3').classList.remove('oculto');
    });

    document.getElementById('continuar-socio-paso-3').addEventListener('click', () => {
        socioActual.email = document.getElementById('email-socio').value;
        if (esEmailValido(socioActual.email)) {
            document.getElementById('socio-paso-3').classList.add('oculto');
            document.getElementById('resumen-socio').textContent = 
                `Nombre: ${socioActual.nombre}\nMembresía: ${socioActual.membresia}\nEmail: ${socioActual.email}`;
            document.getElementById('socio-confirmar').classList.remove('oculto');
        } else {
            alert("Por favor, ingrese un email válido.");
        }
    });

    document.getElementById('confirmar-socio').addEventListener('click', () => {
        let socios = JSON.parse(localStorage.getItem('socios')) || [];
        socios.push(socioActual);
        localStorage.setItem('socios', JSON.stringify(socios));
        mostrarMensaje("Gracias por ser parte de nuestra familia, " + socioActual.nombre + "! Te enviaremos la informacion de pago a " + socioActual.email + ".");
    });

    document.getElementById('modificar-socio').addEventListener('click', () => {
        document.getElementById('socio-confirmar').classList.add('oculto');
        document.getElementById('socio-paso-1').classList.remove('oculto');
    });

    // Menú principal
    document.querySelectorAll('#menu-principal button').forEach(button => {
        button.addEventListener('click', (event) => {
            const opcion = event.target.getAttribute('data-opcion');
            switch (opcion) {
                case '1':
                    mostrarFormulario(document.getElementById('jugador-form'));
                    break;
                case '2':
                    mostrarFormulario(document.getElementById('colaborador-form'));
                    break;
                case '3':
                    mostrarFormulario(document.getElementById('sponsor-form'));
                    break;
                case '4':
                    mostrarFormulario(document.getElementById('socio-form'));
                    break;
                case '5':
                    mostrarMensaje("Gracias por visitar nuestra web.");
                    break;
            }
        });
    });
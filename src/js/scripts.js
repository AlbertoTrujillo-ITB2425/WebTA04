document.addEventListener("DOMContentLoaded", async function () {
    const splash = document.getElementById("splash");
    const contenido = document.querySelector(".container");

    try {
        // Obtener fecha y hora actuales
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString();
        const hora = ahora.toLocaleTimeString();

        // Obtener IP pública del usuario con tiempo de espera
        let ipPublica = "No disponible";

        const obtenerIP = fetch('https://api.ipify.org?format=json')
            .then(respuesta => respuesta.json())
            .then(datos => datos.ip)
            .catch(() => "No disponible");

        // Timeout de 3 segundos
        const timeout = new Promise((_, reject) => setTimeout(() => reject('Timeout'), 3000));

        // Intentar obtener la IP pública o saltarse si hay error o timeout
        ipPublica = await Promise.race([obtenerIP, timeout]);

        console.log(`Fecha: ${fecha}, Hora: ${hora}, IP Pública: ${ipPublica}`);
    } catch (error) {
        console.error("Error al cargar la información:", error);
    }

    // Ocultar el splash automáticamente después de 2 segundos
    setTimeout(() => {
        splash.classList.add("opacity-0"); // Suavizar salida con opacidad
        setTimeout(() => {
            splash.classList.add("hidden"); // Ocultar completamente después de la animación
            contenido.classList.remove("hidden"); // Mostrar el contenido principal
        }, 1000); // Tiempo de animación (1s)
    }, 2000); // Esperar 2 segundos
});

// Validar email con una expresión regular y mostrar feedback visual
document.getElementById('email').addEventListener('input', function() {
    var email = this.value;
    var emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var feedback = document.getElementById('email-feedback');
    
    if (!emailValid.test(email)) {
        feedback.textContent = 'Correo electrónico inválido';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Correo electrónico válido';
        feedback.style.color = 'green';
    }
});

// Monitorear eventos sospechosos de clic en el DOM
document.body.addEventListener('click', function(event) {
    if (event.target.id === 'login-button') {
        console.log('Intento de inicio de sesión registrado');
        // Aquí podrías enviar el log a un servidor de monitoreo o alertar a un administrador
    }
});

// Bloquear el uso de console.log
if (window.console && (typeof console.log === "function")) {
    console.log = function() {
        // Hacer que no se ejecute ningún código al llamar a console.log
    };
}

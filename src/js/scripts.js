document.addEventListener("DOMContentLoaded", async function () {
    const splash = document.getElementById("splash");
    const contenido = document.querySelector(".container");

    // Obtener fecha y hora actuales
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    // Obtener IP pública
    let ipPublica = "No disponible";
    try {
        const respuesta = await fetch("https://api.ipify.org?format=json");
        if (respuesta.ok) {
            const datos = await respuesta.json();
            ipPublica = datos.ip;
        }
    } catch (error) {
        console.error("No se pudo obtener la IP pública:", error);
    }

    // Mostrar mensaje en el splash
    document.getElementById("mensaje").innerHTML = `
        Estás en el portafolio de Alberto. <br>
        📅 Fecha actual: ${fecha} <br>
        🕒 Hora actual: ${hora} <br>
        🌐 Tu IP pública: ${ipPublica}
    `;

    // Ocultar el splash después de 10 segundos
    setTimeout(() => {
        splash.classList.add("opacity-0", "transition-opacity", "duration-1000");
        setTimeout(() => {
            splash.classList.add("hidden");
            contenido.classList.remove("hidden");
        }, 1000); // Espera al final de la transición para ocultarlo completamente
    }, 4000); // 4 segundos
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

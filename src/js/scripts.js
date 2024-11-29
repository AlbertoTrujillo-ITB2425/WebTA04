document.addEventListener("DOMContentLoaded", async function () {
    const splash = document.getElementById("splash");
    const contenido = document.querySelector(".container");

    try {
        // Obtener fecha y hora actuales
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString();
        const hora = ahora.toLocaleTimeString();

        // Obtener IP pública del usuario
        let ipPublica = "No disponible";
        const respuesta = await fetch('https://api.ipify.org?format=json');
        if (respuesta.ok) {
            const datos = await respuesta.json();
            ipPublica = datos.ip;
        }

        // Construir el mensaje
        const mensaje = `
            Estás en el portafolio de Alberto.
            📅 Fecha actual: ${fecha}
            🕒 Hora actual: ${hora}
            🌐 Tu IP pública es: ${ipPublica}
        `;

        // Mostrar el mensaje en el splash
        document.getElementById("mensaje").innerHTML = mensaje.replace(/\n/g, '<br>');

    } catch (error) {
        console.error("Error al cargar la información:", error);
        document.getElementById("mensaje").textContent = "No se pudo cargar la información.";
    }

    // Ocultar el splash automáticamente después de 10 segundos
    setTimeout(() => {
        splash.classList.add("opacity-0"); // Suavizar salida con opacidad
        setTimeout(() => {
            splash.classList.add("hidden"); // Ocultar completamente después de la animación
            contenido.classList.remove("hidden"); // Mostrar el contenido principal
        }, 1000); // Tiempo de animación (1s)
    }, 5000); // Esperar 5 segundos
});

// Validación de Contraseña
document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var passwordStrengthMessage = document.getElementById('password-strength');

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
        passwordStrengthMessage.classList.remove('hidden');
    } else {
        passwordStrengthMessage.classList.add('hidden');
        alert('Registro exitoso');
    }
});

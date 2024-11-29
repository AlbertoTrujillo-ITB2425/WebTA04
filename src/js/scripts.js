document.addEventListener("DOMContentLoaded", async function () {
    // Obtener fecha y hora actuales
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    // Obtener IP pública del usuario
    let ipPublica = "No disponible";
    try {
        const respuesta = await fetch('https://api.ipify.org?format=json');
        const datos = await respuesta.json();
        ipPublica = datos.ip;
    } catch (error) {
        console.error("Error al obtener la IP pública:", error);
    }

    // Mostrar mensaje en la página
    const mensaje = `
        Estás en el portafolio de Alberto. 
        Fecha actual: ${fecha}, Hora actual: ${hora}.
        Tu IP pública es: ${ipPublica}.
    `;
    document.getElementById("mensaje").textContent = mensaje;
});

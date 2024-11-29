// Función para mostrar u ocultar detalles adicionales de los proyectos
function toggleInfo(button) {
    const info = button.closest('.proyecto').querySelector('.expandir-info');
    info.style.display = info.style.display === 'block' ? 'none' : 'block'; // Alternar visibilidad
    button.textContent = info.style.display === 'block' ? 'Ocultar' : 'Más'; // Cambiar texto del botón
}

// Validación del formulario de contacto
document.querySelector('form').addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert('Por favor, complete todos los campos.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Por favor, ingrese un email válido.');
    }
});

// Bloqueo de clic derecho y herramientas de desarrollador
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Bloquear clic derecho
    alert('El clic derecho está deshabilitado.');
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault(); // Bloquear herramientas de desarrollo
        alert('Alerta: acceso restringido.');
    }
});

// Guardar datos del formulario como archivo de texto
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Crear contenido del archivo en formato de texto
    const contenido = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;
    const blob = new Blob([contenido], { type: 'text/plain' });

    // Crear un enlace de descarga y dispararlo automáticamente
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'contactos.txt';
    enlace.click();
});

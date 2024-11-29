// Función para mostrar u ocultar detalles adicionales de los proyectos
function toggleInfo(button) {
    const info = button.closest('.proyecto').querySelector('.expandir-info');
    // Alternar la visibilidad del contenido adicional
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';  // Mostrar información
        info.style.animation = 'fadeIn 0.5s ease';  // Aplicar animación de aparición
        button.textContent = 'Ocultar';  // Cambiar el texto del botón
    } else {
        info.style.display = 'none';  // Ocultar la información
        button.textContent = 'Más';  // Cambiar el texto del botón
    }
}

// Validación del formulario de contacto
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Verificar si los campos están vacíos
    if (!nombre || !email || !mensaje) {
        e.preventDefault(); // Cancelar el envío si algún campo está vacío
        alert('Por favor, complete todos los campos.'); // Advertencia al usuario
    } 
    // Verificar si el correo electrónico es válido usando expresión regular
    else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault(); // Cancelar el envío si el email no es válido
        alert('Por favor, ingrese un email válido.'); // Advertencia de email inválido
    }
});

// Comprimir HTML en una sola línea al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenido HTML de la página y eliminar saltos de línea y espacios extra
    document.body.innerHTML = document.body.innerHTML.replace(/\n/g, '').replace(/\s+/g, ' ').trim();
});

// Bloqueo de acceso a herramientas de desarrollo (Ctrl+U, F12) y clic derecho
document.addEventListener('keydown', function (e) {
    // Detectar la tecla F12 (herramientas de desarrollador)
    if (e.key === 'F12') {
        alert('Alerta: vas a entrar al modo programador.'); // Advertencia al usuario
    }
});

document.addEventListener('contextmenu', function (e) {
    // Bloquear clic derecho
    alert('Advertencia: El clic derecho está deshabilitado.'); // Mensaje de advertencia
});

// Guardar los datos del formulario de contacto en un archivo Excel
document.querySelector('.form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();  // Evitar que el formulario se envíe

    // Capturar los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear un array con los datos para el archivo Excel
    const data = [
        ['Nombre', 'Email', 'Mensaje'], // Encabezados
        [nombre, email, mensaje],       // Contenido
    ];

    // Crear un objeto de libro de trabajo Excel usando la librería XLSX
    const worksheet = XLSX.utils.aoa_to_sheet(data);  // Convertir los datos a una hoja de cálculo
    const workbook = XLSX.utils.book_new();  // Crear un nuevo libro de trabajo
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contactos');  // Agregar la hoja de contactos al libro

    // Descargar el archivo Excel con el nombre 'contactos.xlsx'
    XLSX.writeFile(workbook, 'contactos.xlsx');
});

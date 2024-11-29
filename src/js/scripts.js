// Función para mostrar/ocultar detalles adicionales de los proyectos
function toggleInfo(button) {
    const info = button.closest('.proyecto').querySelector('.expandir-info');
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
        info.style.animation = 'fadeIn 0.5s ease'; // Animación de aparición
        button.textContent = 'Ocultar';
    } else {
        info.style.display = 'none';
        button.textContent = 'Más';
    }
}

// Validación del formulario de contacto
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        e.preventDefault(); // Cancelar envío
        alert('Por favor, complete todos los campos.'); // Advertencia al usuario
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault(); // Cancelar envío
        alert('Por favor, ingrese un email válido.'); // Advertencia para email inválido
    }
});


// Bloqueo de acceso a herramientas de desarrollo (Ctrl+U, F12) y clic derecho
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault(); // Bloquea Ctrl+U
        alert('No puedes hacer ctrl+U si necesitas ver nuestro codigo lo puedes encontrar en github.'); // Mensaje de advertencia
    }
    if (e.key === 'F12') {
        alert('Alerta vas a entrar al modo programador.'); // Mensaje de advertencia
    }
});

document.addEventListener('contextmenu', function (e) {
    alert('Estas clicando el clic derecho.'); // Mensaje de advertencia
});

// Formulario de Contacto guarda un excel con los datos introduccidos 
document.querySelector('.form-contacto').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulari s'enviï
  
    // Capturar valors dels camps del formulari
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    // Crear un objecte de dades
    const data = [
      ['Nombre', 'Email', 'Mensaje'], // Capçaleres
      [nombre, email, mensaje],       // Contingut
    ];
  
    // Crear un llibre de treball Excel
    const worksheet = XLSX.utils.aoa_to_sheet(data); // Converteix dades a full Excel
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contactos'); // Afegir el full al llibre
  
    // Descarregar el fitxer Excel
    XLSX.writeFile(workbook, 'contactos.xlsx');
  });
  

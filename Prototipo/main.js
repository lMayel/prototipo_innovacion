function toggleContent(sectionId) {
    // Obtener la sección de contenido correspondiente
    var activeSection = document.getElementById(sectionId);

    // Obtener todas las secciones de contenido
    var sections = document.querySelectorAll('.content-section');

    // Si la sección seleccionada ya está activa, la ocultamos
    if (activeSection.classList.contains('active')) {
        activeSection.classList.remove('active');
    } else {
        // Si otra sección está activa, la ocultamos antes de mostrar la nueva
        sections.forEach(function(section) {
            section.classList.remove('active');
        });

        // Mostramos la nueva sección
        activeSection.classList.add('active');
    }
}


// Ejemplo de contador de likes para cada botón de like
document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", () => {
        const likes = parseInt(button.textContent.match(/\d+/)) || 0;
        button.textContent = `❤️ Like ${likes + 1}`;
    });
});

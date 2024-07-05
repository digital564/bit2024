document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar una sección desde un archivo HTML
    function loadSection(sectionId, filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Could not load ${filePath}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading section:', error);
            });
    }

    // Cargar las secciones
    loadSection('header', 'sections/header.html');
    loadSection('footer', 'sections/footer.html');
    loadSection('inicio', 'sections/inicio.html');
    loadSection('sobre-nosotros', 'sections/sobre-nosotros.html');
    loadSection('servicios', 'sections/servicios.html');
    loadSection('proceso', 'sections/proceso.html');
    loadSection('por-que-elegirnos', 'sections/por-que-elegirnos.html');
    loadSection('industrias', 'sections/industrias.html');
    loadSection('recursos', 'sections/recursos.html');
    loadSection('contacto', 'sections/contacto.html');

    // Configurar el botón del menú
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('menu-visible');
    });
});

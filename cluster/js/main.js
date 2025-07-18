function cargarComponente(idContenedor, ruta) {
    fetch(ruta)
        .then(res => res.text())
        .then(html => {
            document.getElementById(idContenedor).innerHTML = html;
        })
        .catch(err => console.error(`Error al cargar ${ruta}:`, err));
}

cargarComponente('header-container', 'cluster/components/header.html');
cargarComponente('productos-container', 'cluster/components/productos.html');
cargarComponente('caracteristicas-container', 'cluster/components/caracteristicas.html');
cargarComponente('footer-container', 'cluster/components/footer.html');

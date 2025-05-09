function abrirProvincia(areaElement) {
    const nombreProvincia = areaElement.getAttribute('data-provincia');
    
    // Ruta destino (puede personalizarse según estructura)
    const url = `${nombreProvincia}.html`;
  
    // Redirecciona a la página correspondiente
    window.location.href = url;
  }
  
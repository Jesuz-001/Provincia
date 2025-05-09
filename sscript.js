function animarSecciones() {
  const secciones = document.querySelectorAll('section');
  secciones.forEach((sec, i) => {
    setTimeout(() => {
      sec.classList.add('show');
    }, i * 200);
  });
}

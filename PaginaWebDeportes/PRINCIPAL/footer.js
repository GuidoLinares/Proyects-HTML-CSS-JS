// Agregar clase "active" al enlace de la página actual
let links = document.querySelectorAll('.footer-links ul li a');

for (let i = 0; i < links.length; i++) {
  if (links[i].href === window.location.href) {
    links[i].classList.add('active');
  }
}

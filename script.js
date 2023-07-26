// JavaScript complet pour le comportement du menu mobile
const links = document.querySelectorAll('nav li');

icons.addEventListener("click",() => {
  nav.classList.toggle("active")
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  })
});


const navbar = document.getElementById('nav');
let prevScrollPos = window.pageYOffset;
let isNavbarHidden = false;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Défilement vers le haut, afficher la barre de navigation
    if (isNavbarHidden) {
      navbar.style.transform = 'translateY(0)';
      isNavbarHidden = false;
    }
  } else {
    // Défilement vers le bas, masquer la barre de navigation en mode fixe
    if (!isNavbarHidden) {
      navbar.style.transform = 'translateY(-110%)';
      isNavbarHidden = true;
    }
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);

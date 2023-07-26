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
let isNavbarOpen = false;
const navToggleButton = document.getElementById('icons');
navToggleButton.addEventListener('click', () => {
  if (isNavbarOpen) {
    closeNavbar();
  } else {
    openNavbar();
  }
});

// Gestionnaire de clic sur le document pour fermer la barre de navigation en dehors de celle-ci
document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!navbar.contains(targetElement) && targetElement !== navToggleButton) {
    closeNavbar();
  }
});

// Fonction pour ouvrir la barre de navigation
function openNavbar() {
  navbar.style.transform = 'translateY(0)';
  isNavbarOpen = true;
}

// Fonction pour fermer la barre de navigation
function closeNavbar() {
  navbar.style.transform = 'translateY(-100%)';
  isNavbarOpen = false;
}
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

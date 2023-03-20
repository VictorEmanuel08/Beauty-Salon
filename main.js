// abre e fecha o menu quando clicar no icone hamburguer e x
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// quando clicar em um itemdo menu, esconder o menu
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// mudar o header da página quando der scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // scroll é menor que a altura do header
    header.classList.remove("scroll");
  }
});

// Testimonials Carousel slider swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1 /*slides por visualização*/,
  pagination: {
    el: ".swiper-pagination" /*elemento no pagination*/,
  },
  mousewheel: true /*quando passar o mouse, ele obedece a movimentação*/,
  keyboard: true /*quando usar o teclado, ele obedece a movimentação*/,
});

// ScrollReveal: Mostrar elementos quando usar o scroll na página
const scrollreveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

ScrollReveal().reveal(
  `#home .image, #home .text, 
  #about .image, #about .text, 
  #services header, #services .card, 
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social 
`,
  { interval: 100 }
);

/* BOTÃO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

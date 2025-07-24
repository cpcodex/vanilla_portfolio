// hamburger button
const hamburgerButton = document.querySelector('.hamburger-menu');
const header = document.querySelector('.main-header');

hamburgerButton.addEventListener('click', () => {
    header.classList.toggle('is-menu-open');
  });

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    header.classList.remove('is-menu-open');
  }
});
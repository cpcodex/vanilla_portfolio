window.onload = function () {
    
  // hamburger menu logic
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const header = document.querySelector('.main-header');
  if (hamburgerButton) {
      hamburgerButton.addEventListener('click', () => {
          header.classList.toggle('is-menu-open');
      });
  }
    
  window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          if (header) {
              header.classList.remove('is-menu-open');
          }
      }
  });

  // EmailJS logic
  const contactForm = document.getElementById('contact-form');
    
  if (contactForm) {
      emailjs.init({
          publicKey: "eSvkFlyJcU-cBB_Rd",
      });

      contactForm.addEventListener('submit', function (event) {
          event.preventDefault();
            
          emailjs.sendForm('service_odfd4eo', 'template_main_con', this)
              .then(() => {
                  alert('Your message has been sent successfully!');
                  contactForm.reset();
              }, (error) => {
                  alert('Failed to send the message. Please try again.');
              });
      });
  }
};
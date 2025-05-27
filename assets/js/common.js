console.log('common.js is loaded');

/*=============== Show Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Menu Hide =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== DOM Ready Block ===============*/
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // ✅ Initialize EmailJS
  emailjs.init('py5mxT6kq9OYeigKo');

  /*===== Remove Menu on Mobile when Link Clicked =====*/
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  /*===== Scroll Header Shadow =====*/
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }

    /*===== Scroll Section Active Link =====*/
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  });

  /*=============== Contact Form ===============*/
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        Message = document.getElementById('message'),
        contactMessage = document.getElementById('contact-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (
      contactName.value === '' ||
      contactEmail.value === '' ||
      Message.value === ''
    ) {
      contactMessage.classList.remove('color-light');
      contactMessage.classList.add('color-dark');
      contactMessage.textContent = 'Write all the input fields';
    } else {
      emailjs.sendForm(
        'service_schsera',
        'template_6lvcpnj', // ✅ Your new template ID
        contactForm,
        'py5mxT6kq9OYeigKo'
      ).then(() => {
        contactMessage.classList.remove('color-dark');
        contactMessage.classList.add('color-light');
        contactMessage.textContent = 'Message sent';

        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      }, (error) => {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent = 'Something went wrong. Try again later.';
        console.error('EmailJS Error:', error);
      });

      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
    }
  });
});

/* Your JS here. */
console.log('Hello World!')
window.addEventListener('scroll', function() {
  console.log('scrolled!');
});

const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', function() {
  const navHeight = nav.offsetHeight;

  sections.forEach(function(section) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= navHeight && rect.bottom > navHeight) {
      const id = section.getAttribute('id');

      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      const matchingLink = document.querySelector('nav a[href="#' + id + '"]');
      if (matchingLink) {
        matchingLink.classList.add('active');
      }
    }
  });

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');

  }
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(function(card) {
  card.addEventListener('click', function() {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  });
});

const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const modal = btn.closest('.modal');
    modal.style.display = 'none';
  });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel(skipTranisition) {
  if(skipTranisition) {
    track.style.transition = 'none';
  } else {
    track.style.transition = 'transform 0.5s ease';
  }
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
}

nextBtn.addEventListener('click', function() {
  const isWrapping = currentIndex === slides.length - 1;
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(isWrapping);
});

prevBtn.addEventListener('click', function() {
  const isWrapping = currentIndex === 0;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(isWrapping);
});
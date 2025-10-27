window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Get elements
const modal = document.getElementById('bookingModal');
const btn = document.getElementById('bookBtn');
const span = document.getElementsByClassName('close')[0];

// Open modal
btn.onclick = function (e) {
  e.preventDefault(); // prevent default anchor action
  modal.style.display = 'block';
};

// Close modal
span.onclick = function () {
  modal.style.display = 'none';
};

// Close if clicked outside modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Get all cards and modals
const cards = document.querySelectorAll('.card');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

// Open modal when card button clicked
cards.forEach((card) => {
  card.querySelector('.btn').addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Close modal when 'x' clicked
closes.forEach((close) => {
  close.addEventListener('click', () => {
    close.closest('.modal').style.display = 'none';
  });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

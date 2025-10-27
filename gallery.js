// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Image modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const images = document.querySelectorAll('.gallery-grid img');
const closeModal = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.textContent = img.alt;
    currentIndex = index;
  });
});

closeModal.addEventListener('click', () => (modal.style.display = 'none'));

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
  captionText.textContent = images[currentIndex].alt;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  captionText.textContent = images[currentIndex].alt;
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Book Now Modal
const bookBtns = document.querySelectorAll('.book-btn');
const bookModal = document.getElementById('bookModal');
const closeBook = document.querySelector('.close-book');

bookBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    bookModal.style.display = 'block';
  })
);

closeBook.addEventListener('click', () => {
  bookModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === bookModal) bookModal.style.display = 'none';
});

// get references to book cover and button elements
const bookCover = document.querySelector('.book-cover-container');
const openBookBtn = document.querySelector('#open-book-btn');

// get reference to main content element
const mainContent = document.querySelector('.main-content');

// add click event listener to button
openBookBtn.addEventListener('click', function() {
  // hide book cover and show main content
  bookCover.style.display = 'none';
  mainContent.style.display = 'grid';
});

const pronounceButton = document.querySelector('#pronounce');
const audio = document.querySelector('#audio');

pronounceButton.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});


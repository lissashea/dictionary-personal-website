// // get references to book cover and button elements
// const bookCover = document.querySelector('.book-cover-container');
// const openBookBtn = document.querySelector('#open-book-btn');

// // get reference to main content element aka the body of the site
// const mainContent = document.querySelector('.main-content');

// // add click event listener to button
// openBookBtn.addEventListener('click', function() {
//   // hide book cover and show main content
//   bookCover.style.display = 'none';
//   mainContent.style.display = 'grid';
// });

// // get references to sound byte and button elements
// const pronounceButton = document.querySelector('#pronounce');
// const audio = document.querySelector('#audio');
// // add click event listener to button
// pronounceButton.addEventListener('click', () => {
//   audio.currentTime = 0; /* setting currentTime to 0 that the audio file starts playing from the beginning even if it has already been played before.*/
//   audio.play();
// });

// get references to book cover and button elements
const bookCover = document.querySelector('.book-cover-container');
const openBookBtn = document.querySelector('#open-book-btn');

// get reference to main content element aka the body of the site
const mainContent = document.querySelector('.main-content');

// add click event listener to button
openBookBtn.addEventListener('click', function() {
  // hide book cover and show main content
  bookCover.style.display = 'none';
  /* by setting the display property to 'grid', the element is displayed using the CSS grid layout. */
  mainContent.style.display = 'grid';
});

// get references to sound byte and button elements
const pronounceButton = document.querySelector('#pronounce');
const audio = document.querySelector('#audio');
// add click event listener to button
pronounceButton.addEventListener('click', () => {
  audio.currentTime = 0; /* setting currentTime to 0 ensures that the audio file starts playing from the beginning even if it has already been played before.*/
  audio.play();
});

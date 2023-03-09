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

// get references to sound byte and button elements
const pronounceButton = document.querySelector('#pronounce');
const audio = document.querySelector('#audio');

pronounceButton.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});

// var responsiveSlider = function() {

//   var slider = document.getElementById("slider");
//   var sliderWidth = slider.offsetWidth;
//   var slideList = document.getElementById("slideWrap");
//   var count = 1;
//   var items = slideList.querySelectorAll("li").length;
  
//   window.addEventListener('resize', function() {
//     sliderWidth = slider.offsetWidth;
//   });
  
//   var nextSlide = function() {
//     if(count < items) {
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//     else if(count = items) {
//       slideList.style.left = "0px";
//       count = 1;
//     }
//   };
  
//   setInterval(function() {
//     nextSlide()
//   }, 5000);
  
//   };
  
//   window.onload = function() {
//   responsiveSlider();
//   }
  
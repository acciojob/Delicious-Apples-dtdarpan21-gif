//your code here
// script.js

// Select the main photo element
const mainPhoto = document.querySelector('.photo-main img');

// Select all variant images
const variantImages = document.querySelectorAll('.variant ul li img');


variantImages.forEach(img => {
  img.addEventListener('click', () => {
    
    mainPhoto.src = img.src;
    mainPhoto.alt = img.alt;
  });
});

// Add to cart button functionality
const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', () => {
  alert('Apple added to cart!');
});

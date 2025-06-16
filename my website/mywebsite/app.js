const cakes = [
  { id: 'cake1', name: 'Red Velvet Cake', price: 50, image: 'images/red_velvet.jpg', 
    description: 'A vibrant red cocoa-vanilla layer cake with cream cheese frosting.' },
  { id: 'cake2', name: 'Lemon Tart', price: 40, image: 'images/lemon_tart.jfif', 
    description: 'Buttery pastry crust filled with silky lemon curd.' },
  { id: 'cake3', name: 'Vanilla Cake', price: 45, image: 'images/vanilla_cake.jpg', 
    description: 'Sweet, airy sponge made with vanilla extract.' },
  { id: 'cake4', name: 'Chocolate Fudge Cake', price: 55, image: 'images/chocolate_fudge.jpg', 
    description: 'Dense, fudgy, and intensely chocolatey.' }
];

// Auto-slide every 15s
let currentSlide = 0;
const totalSlides = cakes.length;
const slideWrapper = document.getElementById('slideWrapper');

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 15000);

// Load product grid
const grid = document.getElementById('cakeGrid');
cakes.forEach(cake => {
  grid.innerHTML += `
    <div class="product-card">
      <img src="${cake.image}" alt="${cake.name}">
      <h3>${cake.name}</h3>
      <p>${cake.description}</p>
      <p><strong>RM ${cake.price}</strong></p>
      <a class="button" href="buy.html?name=${encodeURIComponent(cake.name)}&price=${cake.price}">Buy Now</a>
    </div>
  `;
});

// When image clicked, scroll to product section
function showCake(cakeId) {
  document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });
}

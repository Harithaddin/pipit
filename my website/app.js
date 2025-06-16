let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 15000);

function scrollToCake(cakeId) {
  const cakeElement = document.getElementById(cakeId);
  const allCakes = document.querySelectorAll('.cake-full');

  allCakes.forEach(cake => {
    cake.style.display = 'none';
  });

  if (cakeElement) {
    cakeElement.style.display = 'flex';
    cakeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
function scrollToCake(cakeId) {
  document.getElementById(cakeId).scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function() {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function openModal() {
  document.getElementById("orderModal").style.display = "flex";
}


function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}
function showCakeSection(cakeId) {
 
  document.querySelectorAll('.cake-section').forEach(section => {
    section.style.display = 'none';
  });


  document.getElementById(cakeId).style.display = 'flex';

 
  document.getElementById(cakeId).scrollIntoView({ behavior: 'smooth' });
}
function showCakeSection(cakeId) {
  
  document.querySelectorAll('.cake-section').forEach(section => {
    section.style.display = 'none';
  });

  
  document.getElementById(cakeId).style.display = 'flex';

  
  document.getElementById(cakeId).scrollIntoView({ behavior: 'smooth' });
}
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 15000); 
}

showSlides();
function openAdminPage() {
  const password = prompt("Enter admin password:");

  
  if (password === "123456") {
    window.location.href = "admin.php";
  } else {
    alert("Incorrect password!");
  }
}

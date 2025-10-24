// 1️⃣ Tab navigation
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.era-section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(btn.dataset.target).classList.remove('hidden');
  });
});

// 2️⃣ Image hover effects
document.querySelectorAll('.era-img').forEach(img => {
  img.addEventListener('mouseenter', () => img.classList.add('scale-110'));
  img.addEventListener('mouseleave', () => img.classList.remove('scale-110'));
});


// 4️⃣ Random facts
const facts = {
  stone: "Stone Age: First fire discovered",
  ancient: "Ancient: Pyramids built in Egypt",
  medieval: "Medieval: Castles and knights",
  modern: "Modern: Industrial revolution",
  future: "Future: Space colonization"
};


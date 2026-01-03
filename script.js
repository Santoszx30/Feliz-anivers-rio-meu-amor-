  const loading = document.getElementById("loading");
const app = document.getElementById("app");
const mainHeart = document.getElementById("mainHeart");
const startBtn = document.getElementById("startBtn");
const photo = document.getElementById("photo");
const textBox = document.getElementById("textBox");
const music = document.getElementById("bgMusic");
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

/* ELOGIOS */
const elogios = [
  "OIIIII MINHA PRETINHA, teus olhos são meu lugar favorito 🫦",
  "Você é minha <b style='color:#9b5cff'>calma</b> em meio ao caos",
  "Teu sorriso tem um <b style='color:#ff5cf4'>efeito absurdo</b> em mim",
  "Você é <b style='color:#6aa8ff'>beleza</b>, <b style='color:#ff5cf4'>força</b> e amor",
  "Cada detalhe teu me faz sorrir sem perceber 🫦"
];

/* FOTOS */
let index = 0;

/* INICIAR */
function startExperience() {
  music.play().catch(()=>{});
  loading.style.display = "none";
  app.classList.remove("hidden");
  showPhoto();
  startParticles();
}

mainHeart.onclick = startExperience;
startBtn.onclick = startExperience;

/* MOSTRAR FOTO */
function showPhoto() {
  photo.classList.remove("show");

  setTimeout(() => {
    photo.src = `fotos/${index + 1}.jpg`;
    textBox.innerHTML = elogios[index % elogios.length];
    photo.classList.add("show");

    index++;
    if (index < 20) {
      setTimeout(showPhoto, 4000);
    }
  }, 500);
}

/* PARTÍCULAS */
let particles = [];

function startParticles() {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = "#9b5cff";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
  });
  requestAnimationFrame(animate);
}

/* INTERAÇÃO */
canvas.addEventListener("touchstart", e => {
  particles.push({
    x: e.touches[0].clientX,
    y: e.touches[0].clientY,
    r: 4,
    dx: (Math.random()-0.5)*3,
    dy: (Math.random()-0.5)*3
  });
});

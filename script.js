  const screens = document.querySelectorAll(".screen");
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextPhoto");
const revealBtn = document.getElementById("revealBtn");
const photo = document.getElementById("photo");
const compliment = document.getElementById("compliment");
const letter = document.getElementById("letter");

const compliments = [
  "Seus olhos me fazem sorrir sem você perceber",
  "O seu olhar desmonta qualquer defesa minha",
  "Você me faz sentir especial como ninguém",
  "Você transforma qualquer dia ruim",
  "Seu sorriso é meu lugar seguro",
  "Seu toque acalma tudo",
  "Seu abraço é casa",
  "Você é minha princesa",
  "Você é minha pretinha",
  "Você é meu ponto fraco",
  "Seu jeitinho me enlouquece",
  "Você é intensa do jeito certo",
  "Você é doce e forte",
  "Você é confiança",
  "Você é respeito",
  "Você é admiração",
  "Você é conexão",
  "Você é desejo",
  "Você é amor",
  "Você é perigosa… do melhor jeito possível"
];

let index = 0;

startBtn.onclick = () => {
  music.play();
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
};

nextBtn.onclick = () => {
  index++;
  if (index >= 20) return;

  photo.src = `fotos/${index + 1}.jpg`;
  photo.style.transform = "scale(1.2)";
  setTimeout(() => photo.style.transform = "scale(1)", 800);
  compliment.innerText = compliments[index];
};

revealBtn.onclick = () => {
  screens[1].classList.remove("active");
  screens[2].classList.add("active");

  letter.innerHTML = `
  <h2>OIIIII MINHA PRETINHA</h2><br>
  Você é aquela pessoa que me faz sentir <b style="color:#7f7cff">especial</b> como ninguém.
  Seus <b style="color:#ff6ad5">olhos</b> me fazem sorrir sem você perceber.
  Você me ensinou que amar é criar um laço de
  <b style="color:#6ad5ff">confiança</b>,
  <b style="color:#ff6ad5">respeito</b>
  e <b style="color:#9f7cff">admiração</b>.
  <br><br>
  Você é perigosa… do melhor jeito possível 🫦
  `;
};

// PARTÍCULAS SIMPLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({length: 50}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2+1
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(200,100,255,0.5)";
    ctx.fill();
    p.y -= 0.3;
    if (p.y < 0) p.y = canvas.height;
  });
  requestAnimationFrame(animate);
}
animate();

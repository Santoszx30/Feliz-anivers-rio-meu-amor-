  /* ================= PARTICULAS ================= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

function spawnParticles(x, y, count = 20, heart = false) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 60,
      heart
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.font = p.heart ? "18px Arial" : "10px Arial";
    ctx.fillStyle = "#7b2cbf";
    ctx.fillText(p.heart ? "💜" : "•", p.x, p.y);

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

canvas.addEventListener("touchmove", e => {
  const t = e.touches[0];
  spawnParticles(t.clientX, t.clientY, 4);
});

/* ================= SITE ================= */
const screens = [
  document.getElementById("screen1"),
  document.getElementById("screen2"),
  document.getElementById("screen3")
];

const music = document.getElementById("music");
const photo = document.getElementById("photo");
const photoText = document.getElementById("photo-text");
const nextBtn = document.getElementById("nextBtn");
const letter = document.getElementById("letter");
const bigHeart = document.getElementById("big-heart");

let photoIndex = 1;

const elogios = [
  "Seus <b style='color:#6aa8ff'>olhos</b> me fazem sorrir sem você perceber",
  "O seu <b style='color:#6aa8ff'>olhar</b> desmonta qualquer defesa minha",
  "Você me faz sentir <b style='color:#ff79c6'>especial</b> como ninguém",
  "O seu jeitinho… só eu noto 😏",
  "Você é minha <b style='color:#7b2cbf'>princesa</b>",
  "Você é perigosa… do melhor jeito possível 🫦"
];

const textoFinal = `
<b style="color:#7b2cbf">OIIIII MINHA PRETINHA,</b><br><br>
Hoje não é só o dia do seu <b style="color:#6aa8ff">aniversário</b>,
é o dia de celebrar a pessoa que mudou meu jeito de ver o mundo.<br><br>

Você tem o dom de me fazer sentir <b style="color:#ff79c6">especial</b>
melhor do que qualquer pessoa nesse mundo.<br><br>

Com você eu aprendi que amar é criar um laço
<b style="color:#f8f9fa">inquebrável</b> de
<b style="color:#6aa8ff">confiança</b>,
<b style="color:#6aa8ff">respeito</b>
e <b style="color:#6aa8ff">adoração</b>.<br><br>

Obrigado por ser minha <b style="color:#7b2cbf">princesa</b>,
minha <b style="color:#7b2cbf">pequena</b>…<br><br>

Você é perigosa… do melhor jeito possível 🫦
`;

/* CORAÇÕES SUBINDO */
function createHearts() {
  document.querySelectorAll(".hearts").forEach(container => {
    for (let i = 0; i < 20; i++) {
      const span = document.createElement("span");
      span.innerHTML = "💜";
      span.style.left = Math.random() * 100 + "%";
      span.style.animationDuration = 8 + Math.random() * 6 + "s";
      container.appendChild(span);
    }
  });
}
createHearts();

/* PALAVRAS FLUTUANTES */
const palavras = [
  "PRINCESA","PRETINHA","DELÍCIA","GOSTOSA","PITUCHA",
  "PITICA","BUXINN","CACHEADA","CHATA","PRINCESINHA","PEQUENA"
];

document.querySelectorAll(".floating-words").forEach(container => {
  palavras.forEach(p => {
    const span = document.createElement("span");
    span.innerText = p;
    span.style.left = Math.random() * 100 + "%";
    span.style.top = Math.random() * 100 + "%";
    span.style.color = "#6aa8ff";
    container.appendChild(span);
  });
});

/* TELA 1 */
screens[0].onclick = () => {
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
  music.play().catch(() => {});
  spawnParticles(innerWidth / 2, innerHeight / 2, 40, true);
  showPhoto();
};

/* FOTOS */
function showPhoto() {
  photo.classList.remove("show");

  setTimeout(() => {
    photo.src = `fotos/foto${photoIndex}.jpg`;
    photoText.innerHTML =
      elogios[Math.min(photoIndex - 1, elogios.length - 1)];
    photo.classList.add("show");
    spawnParticles(innerWidth / 2, innerHeight / 2, 30, true);
  }, 300);
}

nextBtn.onclick = () => {
  photoIndex++;
  if (photoIndex <= 20) {
    showPhoto();
  } else {
    screens[1].classList.remove("active");
    screens[2].classList.add("active");
    typeText(textoFinal);
  }
};

/* EXPLOSÃO AO CLICAR NO CORAÇÃO */
bigHeart.onclick = e => {
  spawnParticles(e.clientX, e.clientY, 50, true);
};

/* TEXTO DIGITANDO */
function typeText(text) {
  let i = 0;
  letter.innerHTML = "";
  const interval = setInterval(() => {
    letter.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 25);
                }

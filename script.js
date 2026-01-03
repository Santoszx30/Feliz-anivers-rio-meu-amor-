/* ---------- ELEMENTOS ---------- */
const loading = document.getElementById("loading");
const app = document.getElementById("app");
const mainHeart = document.getElementById("mainHeart");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const screen = document.querySelector(".screen");
const photo = document.getElementById("photo");
const photoText = document.getElementById("photoText");
const textBox = document.getElementById("textBox");

let audioUnlocked = false;

/* ---------- DESBLOQUEAR ÁUDIO ---------- */
function unlockAudio() {
  if (!audioUnlocked) {
    music.play().then(() => {
      music.pause();
      audioUnlocked = true;
    }).catch(() => {});
  }
}

/* ---------- TELA 1: ANIMAÇÃO CELULAR ---------- */
const phoneWords = ["LINDA","PRINCESA","ÚNICA","INCRÍVEL","PERFEITA"];

function phoneAnimation() {
  phoneWords.forEach((w, i) => {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "screen-item";
      el.textContent = w;
      el.style.left = Math.random()*60+"%";
      screen.appendChild(el);
      setTimeout(()=>el.remove(),2000);
    }, i * 600);
  });
}

/* ---------- CLIQUE INICIAL ---------- */
mainHeart.onclick = () => {
  unlockAudio();
  phoneAnimation();

  setTimeout(() => {
    loading.style.display = "none";
    app.classList.remove("hidden");
    startFloating();
    insertText();
    showPhoto();
  }, 3000);
};

/* ---------- MÚSICA ---------- */
musicBtn.onclick = () => {
  unlockAudio();
  music.play();
};

/* ---------- GALERIA ---------- */
const elogios = [
  "Teus olhos têm um jeito perigoso de me desmontar.",
  "É no teu olhar que eu sempre me perco sem querer.",
  "Você tem uma beleza que acontece naturalmente.",
  "Seu sorriso muda completamente o ambiente.",
  "Você é linda até nos detalhes invisíveis.",
  "Seu jeito leve esconde intensidade.",
  "Você é calma e caos na medida certa.",
  "Você chama atenção sem esforço.",
  "Você tem presença.",
  "Você é puro charme.",
  "Sua beleza vai além do que se vê.",
  "Você é rara.",
  "Você consegue ser doce e intensa.",
  "Seu jeito me prende.",
  "Você é linda sendo quem é.",
  "Sua energia vicia.",
  "Você transforma momentos simples.",
  "Você é meu detalhe favorito.",
  "Você faz tudo parecer melhor.",
  "Você é perigosa… do melhor jeito possível."
];

let current = 0;

function showPhoto() {
  photo.classList.add("photo-out");
  photoText.style.opacity = 0;

  setTimeout(() => {
    photo.src = `fotos/${current + 1}.jpg`;
    photo.classList.remove("photo-out");
    photoText.innerHTML = elogios[current];
    photoText.style.opacity = 1;
  }, 500);
}

document.getElementById("nextPhoto").onclick = () => {
  if (current < 19) {
    current++;
    showPhoto();
  }
};

/* ---------- TEXTO FINAL ---------- */
function insertText() {
  textBox.innerHTML = `
<strong style="color:#bfafff;">OIIIII MINHA PRETINHA,</strong><br><br>

Você tem o dom de me fazer sentir <strong style="color:#6aa8ff;">especial</strong>
como ninguém nesse mundo.<br><br>

Seu <strong style="color:#6aa8ff;">olhar</strong> sempre me desmonta,
mesmo quando você não percebe.<br><br>

Você me ensinou que amar é construir um laço
<strong style="color:#fff;">inquebrável</strong> de
<strong style="color:#6aa8ff;">confiança</strong>,
<strong style="color:#6aa8ff;">respeito</strong> e
<strong style="color:#6aa8ff;">admiração</strong>.<br><br>

<strong style="color:#ff6a6a;">
Você é perigosa… do melhor jeito possível.
</strong><br><br>🫦
`;
}

/* ---------- PALAVRAS FLUTUANTES ---------- */
const words = ["PRINCESA","PRETINHA","DELÍCIA","GOSTOSA","PITUCHA","PITICA","BUXINN","CACHEADA","CHATA","PEQUENA"];

function startFloating() {
  setInterval(() => {
    for (let i = 0; i < 3; i++) {
      const w = document.createElement("div");
      w.className = "floating";
      w.textContent = words[Math.floor(Math.random()*words.length)];
      w.style.left = Math.random()*80 + 10 + "%";
      w.style.color = ["#bfafff","#6aa8ff","#fff","#ff6a6a"][Math.floor(Math.random()*4)];
      document.body.appendChild(w);
      setTimeout(() => w.remove(), 6000);
    }
  }, 1200);
}

/* ---------- PARTÍCULAS AO TOQUE ---------- */
function spawnParticles(x, y) {
  for (let i = 0; i < 12; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.textContent = "💜";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.fontSize = "14px";
    document.body.appendChild(p);

    const dx = Math.random()*200 - 100;
    const dy = Math.random()*200 - 100;

    requestAnimationFrame(() => {
      p.style.transform = `translate(${dx}px, ${dy}px) scale(0.3)`;
      p.style.opacity = 0;
    });

    setTimeout(() => p.remove(), 1000);
  }
}

document.addEventListener("click", e => spawnParticles(e.clientX, e.clientY));
document.addEventListener("touchstart", e => {
  const t = e.touches[0];
  spawnParticles(t.clientX, t.clientY);
});

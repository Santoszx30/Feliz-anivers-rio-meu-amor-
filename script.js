/* ================= CONFIG ================= */

const compliments = [
  "Tem algo nos seus olhos que me faz sorrir sem você nem perceber.",
  "O seu olhar me desmonta.",
  "Você tem o dom de me fazer sentir especial como ninguém nesse mundo.",
  "Cada detalhe seu prende minha atenção sem esforço.",
  "Você é linda, mas o que mais me encanta é quem você é.",
  "O seu jeito comigo é algo que eu nunca vou esquecer.",
  "Você me faz sentir em casa.",
  "Seu sorriso tem um poder absurdo.",
  "Você é calma e intensa ao mesmo tempo.",
  "Tudo em você me prende.",
  "Você não passa despercebida.",
  "O seu toque muda tudo.",
  "Eu me apaixono pelos detalhes.",
  "Você me ensinou o que é amar.",
  "Confiança, respeito e admiração.",
  "Com você, tudo é mais.",
  "Seu coração me prende.",
  "Seu jeito só comigo é único.",
  "Você desperta tudo em mim.",
  "Você é perigosa… do melhor jeito possível."
];

const floatingWords = [
  "PRINCESA","PRETINHA","DELÍCIA","GOSTOSA","PITUCHA",
  "PITICA","BUXINN","CACHEADA","CHATA","PRINCESINHA","PEQUENA"
];

/* ================= ELOGIOS FLUTUANTES ================= */

const layer = document.getElementById("floating-layer");

floatingWords.forEach(word => {
  const span = document.createElement("span");
  span.className = "floating";
  span.innerText = word;
  span.style.left = Math.random() * 90 + "vw";
  span.style.top = Math.random() * 90 + "vh";
  span.style.fontSize = (12 + Math.random() * 18) + "px";
  span.style.color = ["#bfaaff","#6aa8ff","#ffffff","#ff6a6a"][Math.floor(Math.random()*4)];
  span.style.animationDuration = (8 + Math.random() * 6) + "s";
  layer.appendChild(span);
});

/* ================= TRANSIÇÃO TELA ================= */

setTimeout(() => {
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
}, 10000);

/* ================= SLIDER ================= */

let index = 0;

const heart = document.getElementById("bigHeart");
const slider = document.getElementById("slider");
const photo = document.getElementById("photo");
const compliment = document.getElementById("compliment");

heart.onclick = () => {
  heart.style.display = "none";
  slider.classList.remove("hidden");
  showSlide();
};

function showSlide() {
  photo.src = `photos/${index + 1}.jpg`;
  compliment.innerText = compliments[index];
}

document.getElementById("next").onclick = () => {
  if (index < 19) {
    index++;
    showSlide();
  }
};

/* ================= MÚSICA ================= */

document.getElementById("playMusic").onclick = () => {
  document.getElementById("music").play();
};

/* ================= TEXTO FINAL (innerHTML) ================= */

const reveal = document.getElementById("revealText");
const hidden = document.getElementById("hiddenMessage");

const fullText = `
<strong style="color:#bfaaff;">OIIIII MINHA PRETINHA,</strong><br><br>

Hoje não é só o dia do seu <strong style="color:#6aa8ff;">aniversário</strong>.<br>
É o dia de celebrar a pessoa que mudou meu <strong style="color:#ffffff;">jeito de ver o mundo</strong>.<br><br>

Você me faz sentir <strong style="color:#bfaaff;">especial</strong> como ninguém.
Seu <strong style="color:#6aa8ff;">olhar</strong> sempre me desmonta.<br><br>

Com você, aprendi que amar é construir um laço
<strong style="color:#ffffff;">inquebrável</strong> de
<strong style="color:#6aa8ff;">confiança</strong>,
<strong style="color:#6aa8ff;">respeito</strong> e
<strong style="color:#6aa8ff;">admiração</strong>.<br><br>

Obrigado por ser minha
<strong style="color:#bfaaff;">princesa</strong>,
minha <strong style="color:#ffffff;">pretinha</strong>,
minha <strong style="color:#bfaaff;">pequena</strong>.<br><br>

<strong style="color:#ff6a6a;">Você é perigosa… do melhor jeito possível.</strong> 🫦
`;

reveal.onclick = () => {
  reveal.style.display = "none";
  hidden.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    hidden.innerHTML += fullText.charAt(i);
    i++;
    if (i >= fullText.length) clearInterval(interval);
  }, 25);
};

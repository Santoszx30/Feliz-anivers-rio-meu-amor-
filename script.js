  const screens = document.querySelectorAll(".screen");
const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");

const heartBtn = document.getElementById("heartBtn");
const photo = document.getElementById("photo");
const compliment = document.getElementById("compliment");

const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

/* ========= MÚSICA ========= */
playMusic.onclick = () => {
  music.play();
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
};

/* ========= FOTOS ========= */
const photos = Array.from({ length: 20 }, (_, i) => `fotos/${i + 1}.jpg`);

const compliments = [
  "Seus olhos me fazem sorrir sem você perceber",
  "O seu olhar desmonta qualquer defesa minha",
  "Você me faz sentir especial melhor do que qualquer pessoa nesse mundo",
  "Seu sorriso muda tudo",
  "Seu toque acalma",
  "Minha princesa",
  "Minha pretinha",
  "Meu ponto fraco",
  "Minha paz",
  "Meu desejo",
  "Meu amor",
  "Confiança",
  "Respeito",
  "Admiração",
  "Conexão",
  "Intensidade",
  "Laço inquebrável",
  "Você me ensinou a amar",
  "Você é tudo pra mim",
  "Você é perigosa… do melhor jeito possível"
];

let index = 0;
photo.src = photos[0];
compliment.innerText = compliments[0];

heartBtn.onclick = () => {
  index = (index + 1) % photos.length;
  photo.src = photos[index];
  compliment.innerText = compliments[index];
  photo.style.transform = "scale(1.15)";
  setTimeout(() => photo.style.transform = "scale(1)", 500);
};

/* ========= CARTA ========= */
openLetter.onclick = () => {
  screens[1].classList.remove("active");
  screens[2].classList.add("active");

  letter.innerHTML = `
  <strong>OIIIII MINHA PRETINHA,</strong><br><br>

  Hoje é o seu aniversário, mas quem sente que ganhou um presente fui eu.
  Você entrou na minha vida e mudou tudo de um jeito leve, intenso e verdadeiro.

  <br><br>
  Seus olhos me fazem sorrir sem você perceber, seu jeitinho me prende,
  e com você eu aprendi que amar é construir um laço de
  <strong style="color:#ff6ad5">confiança</strong>,
  <strong style="color:#7f7cff">respeito</strong> e
  <strong style="color:#9f7cff">admiração</strong>.

  <br><br>
  Você me faz sentir especial melhor do que qualquer pessoa nesse mundo,
  e estar ao seu lado me lembra todos os dias que relacionamento
  é parceria, cuidado e escolha.

  <br><br>
  <strong>Você é perigosa… do melhor jeito possível.</strong> 🫦
  `;
};

/* ========= PALAVRAS ========= */
const words = ["PRINCESA","PRETINHA","DELÍCIA","GOSTOSA","PITUCHA","PITICA","CACHEADA"];
const wordContainer = document.getElementById("floatingWords");

words.forEach(word => {
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.className = "floating";
    span.innerText = word;
    span.style.left = Math.random() * 90 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.animationDuration = (8 + Math.random() * 6) + "s";
    wordContainer.appendChild(span);
  }
});

/* ========= CORAÇÕES INFINITOS ========= */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerText = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (8 + Math.random() * 6) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 14000);
}, 500);

/* ========= EXPLOSÃO ========= */
document.addEventListener("click", e => {
  for (let i = 0; i < 10; i++) {
    const mini = document.createElement("div");
    mini.className = "mini-heart";
    mini.innerText = "💜";
    mini.style.left = e.clientX + "px";
    mini.style.top = e.clientY + "px";
    mini.style.setProperty("--x", (Math.random() - 0.5) * 200 + "px");
    mini.style.setProperty("--y", (Math.random() - 0.5) * 200 + "px");
    document.body.appendChild(mini);
    setTimeout(() => mini.remove(), 1200);
  }
});

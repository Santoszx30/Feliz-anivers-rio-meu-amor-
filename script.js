  const screens = document.querySelectorAll(".screen");
const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");
const nextBtn = document.getElementById("next");
const openLetter = document.getElementById("openLetter");
const photo = document.getElementById("photo");
const compliment = document.getElementById("compliment");
const letter = document.getElementById("letter");

const compliments = [
  "Seus olhos me fazem sorrir sem você perceber",
  "O seu olhar desmonta qualquer defesa minha",
  "Você me faz sentir especial melhor do que qualquer pessoa nesse mundo",
  "Seu sorriso muda tudo",
  "Seu toque me acalma",
  "Você é minha princesa",
  "Minha pretinha",
  "Meu ponto fraco",
  "Minha paz",
  "Meu desejo",
  "Meu amor",
  "Você é confiança",
  "Você é respeito",
  "Você é admiração",
  "Você é conexão",
  "Você é intensidade",
  "Você é laço inquebrável",
  "Você é tudo que eu precisava",
  "Você é perfeita do seu jeito",
  "Você é perigosa… do melhor jeito possível"
];

let index = 0;

playBtn.onclick = () => {
  music.muted = false;
  music.load();
  music.play();
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
  compliment.innerText = compliments[0];
};

nextBtn.onclick = () => {
  index++;
  if (index >= 20) return;
  photo.src = `fotos/${index + 1}.jpg`;
  compliment.innerText = compliments[index];
};

openLetter.onclick = () => {
  screens[1].classList.remove("active");
  screens[2].classList.add("active");

  letter.innerHTML = `
  <strong style="color:#7f7cff">OIIIII MINHA PRETINHA,</strong><br><br>

  Hoje não é só o dia do seu <strong style="color:#ff6ad5">aniversário</strong>.
  É o dia de celebrar a pessoa que mudou completamente o meu jeito de ver o mundo.

  <br><br>
  Você tem um <strong style="color:#6ad5ff">olhar</strong> que me desmonta,
  me faz sorrir sem perceber e me lembra todos os dias o quanto eu sou
  <strong style="color:#ff6ad5">especial</strong> por te ter.

  <br><br>
  Com você eu aprendi que um relacionamento é muito mais do que amar.
  É construir um laço <strong style="color:#7f7cff">inquebrável</strong> de
  <strong style="color:#ff6ad5">confiança</strong>,
  <strong style="color:#6ad5ff">respeito</strong> e
  <strong style="color:#9f7cff">admiração</strong>.

  <br><br>
  E aquele jeitinho que só eu noto…
  você sabe.
  <br><br>

  <strong style="color:#ff6ad5">Você é perigosa… do melhor jeito possível.</strong> 🫦
  `;
};

// NOMES + CORAÇÕES FLUTUANDO
const words = ["PRINCESA","PRETINHA","DELÍCIA","GOSTOSA","PITUCHA","PITICA","BUXINN","CACHEADA"];
const container = document.getElementById("floatingWords");

words.forEach(word => {
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.className = "floating";
    span.innerText = word;
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDelay = Math.random() * 10 + "s";
    container.appendChild(span);
  }
});

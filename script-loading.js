const photos = [];
for (let i = 1; i <= 20; i++) {
  photos.push(`fotos/foto${i}.jpg`);
}

const words = [
  "PRINCESA", "PITUCHA", "CACHEADA", "HELLO KITTY",
  "PEQUENA", "LINDA", "MARAVILHOSA", "PERFEITA",
  "CHEIROSA", "ILUMINADA", "ÚNICA", "ESPECIAL",
  "MEU AMOR", "MEU ORGULHO"
];

const phoneScreen = document.getElementById("phoneScreen");
const progress = document.getElementById("progress");

/* Fotos entrando no celular */
let photoIndex = 0;
setInterval(() => {
  if (photoIndex >= photos.length) return;

  const img = document.createElement("img");
  img.src = photos[photoIndex];
  phoneScreen.appendChild(img);

  setTimeout(() => img.remove(), 4000);
  photoIndex++;
}, 500);

/* Barra de loading (10 segundos reais) */
let percent = 0;
const loadingInterval = setInterval(() => {
  percent++;
  progress.style.width = percent + "%";

  if (percent >= 100) {
    clearInterval(loadingInterval);
    setTimeout(() => {
      window.location.href = "surpresa.html";
    }, 500);
  }
}, 100);

/* Corações infinitos */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);

/* Palavras flutuantes */
setInterval(() => {
  const word = document.createElement("div");
  word.className = "word";
  word.innerText = words[Math.floor(Math.random() * words.length)];
  word.style.top = Math.random() * 100 + "vh";
  word.style.animationDuration = (8 + Math.random() * 6) + "s";
  document.body.appendChild(word);

  setTimeout(() => word.remove(), 12000);
}, 600);

  const startScreen = document.getElementById("startScreen");
const app = document.getElementById("app");
const heartStart = document.getElementById("heartStart");
const photo = document.getElementById("photo");
const text = document.getElementById("text");
const music = document.getElementById("music");

const elogios = [
  "OIIIII MINHA <b style='color:#c77dff'>PRETINHA</b>, você é meu lugar seguro 🫦",
  "Seus <b style='color:#6aa8ff'>olhos</b> me fazem sorrir sem você perceber",
  "Você me faz sentir <b style='color:#ff79c6'>especial</b> como ninguém",
  "Seu jeitinho… só eu noto 😏",
  "Você é perigosa… do melhor jeito possível 🫦"
];

let index = 1;

function start() {
  startScreen.style.display = "none";
  app.classList.remove("hidden");
  music.play().catch(() => {});
  showNext();
}

heartStart.onclick = start;
document.getElementById("startText").onclick = start;

function showNext() {
  photo.classList.remove("show");

  setTimeout(() => {
    photo.src = `fotos/foto${index}.jpg`;
    text.innerHTML = elogios[(index - 1) % elogios.length];
    photo.classList.add("show");

    index++;
    if (index <= 20) {
      setTimeout(showNext, 4000);
    }
  }, 600);
      }

  const startScreen = document.getElementById("startScreen");
const app = document.getElementById("app");
const heartStart = document.getElementById("heartStart");
const photo = document.getElementById("photo");
const text = document.getElementById("text");
const music = document.getElementById("music");

const elogios = [
  "OIIIII MINHA <b style='color:#c77dff'>PRETINHA</b>, você é meu lugar seguro 🫦",
  "Sua <b style='color:#ff79c6'>beleza</b> desmonta qualquer defesa minha",
  "Você é <b style='color:#6aa8ff'>força</b> quando eu fraquejo",
  "Te amar é fácil, difícil é não sorrir pensando em você",
  "Você é perigosa… do melhor jeito possível 🫦"
];

let index = 0;

function start() {
  startScreen.style.display = "none";
  app.classList.remove("hidden");
  music.play().catch(()=>{});
  showNext();
}

heartStart.onclick = start;
document.getElementById("startText").onclick = start;

function showNext() {
  photo.classList.remove("show");

  setTimeout(() => {
    photo.src = `fotos/${index + 1}.jpg`;
    text.innerHTML = elogios[index % elogios.length];
    photo.classList.add("show");

    index++;
    if (index < 5) {
      setTimeout(showNext, 4000);
    }
  }, 600);
}

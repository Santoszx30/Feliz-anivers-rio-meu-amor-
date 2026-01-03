  const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");
const heart = document.getElementById("heart");
const photo = document.getElementById("photo");

// Música (GARANTIDO NO ANDROID)
playBtn.addEventListener("click", () => {
  music.play();
});

// Mostrar foto ao clicar no coração
heart.addEventListener("click", () => {
  photo.src = "fotos/1.jpg";
  photo.style.display = "block";
});

// Criar corações flutuando
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💜";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}, 300);

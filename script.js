const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const music = document.getElementById("music");
const heartsContainer = document.getElementById("floating-hearts");

let photoIndex = 1;

heart.addEventListener("click", () => {
  // TOCA A MÚSICA (ANDROID SAFE)
  if (music.paused) {
    music.play().catch(() => {});
  }

  // MOSTRA FOTO
  photo.src = `./fotos/foto${photoIndex}.jpg`;
  photo.classList.add("show");

  photoIndex++;
  if (photoIndex > 20) photoIndex = 1;
});

// CORAÇÕES SUBINDO
setInterval(() => {
  const h = document.createElement("span");
  h.textContent = "💜";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (4 + Math.random() * 4) + "s";
  heartsContainer.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 300);

const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const heartsContainer = document.querySelector(".hearts");

// Mostrar imagem ao clicar no coração
heart.addEventListener("click", () => {
  photo.classList.add("show");
});

// Corações voando
setInterval(() => {
  const span = document.createElement("span");
  span.innerText = "💜";
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (5 + Math.random() * 5) + "s";
  heartsContainer.appendChild(span);

  setTimeout(() => span.remove(), 10000);
}, 300);

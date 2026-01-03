const playBtn = document.getElementById("playMusic");
const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const music = document.getElementById("music");
const heartsContainer = document.querySelector(".hearts");

// ===== Música garantida no Android =====
playBtn.addEventListener("click", ()=>{
  music.currentTime = 0;
  music.play().then(()=>console.log("Música tocando!"))
  .catch(err=>console.log("Erro ao tocar música:",err));
});

// ===== Foto aparece ao clicar no coração =====
heart.addEventListener("click", ()=>{
  photo.style.display = "block";
  photo.style.transform = "scale(1.2)"; // zoom
  setTimeout(()=>photo.style.transform="scale(1)",500);
});

// ===== Corações flutuando infinitamente =====
setInterval(()=>{
  const heartSpan = document.createElement("span");
  heartSpan.innerText = "💜";
  heartSpan.style.left = Math.random()*100 + "vw";
  heartSpan.style.animationDuration = 5 + Math.random()*5 + "s";
  heartsContainer.appendChild(heartSpan);
  setTimeout(()=>heartSpan.remove(),10000);
},300);

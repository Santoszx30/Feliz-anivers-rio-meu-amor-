// ===== VARIÁVEIS =====
const screens = document.querySelectorAll(".screen");
const phone = document.getElementById("phone");
const floatingWords = document.getElementById("floatingWords");
const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");
const heartBtn = document.getElementById("heartBtn");
const photo = document.getElementById("photo");
const compliment = document.getElementById("compliment");
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

// ===== PALAVRAS FLUTUANTES =====
const words = ["PRINCESA","PRETINHA","DELÍCIA","GOSTOSA","PITUCHA","PITICA","BUXINN","CACHEADA","CHATA","PRINCESINHA","PEQUENA"];
words.forEach(word=>{
  for(let i=0;i<3;i++){
    const span=document.createElement("span");
    span.className="floating";
    span.innerText=word;
    span.style.left=Math.random()*90+"vw";
    span.style.top=Math.random()*100+"vh";
    span.style.animationDuration=(8+Math.random()*6)+"s";
    floatingWords.appendChild(span);
  }
});

// ===== CORAÇÕES INFINITOS =====
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart-float";
  heart.innerText="💜";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(8+Math.random()*6)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),14000);
},400);

// ===== EXPLOSÃO DE MINI CORAÇÕES =====
document.addEventListener("click", e=>{
  for(let i=0;i<10;i++){
    const mini=document.createElement("div");
    mini.className="mini-heart";
    mini.innerText="💜";
    mini.style.left=e.clientX+"px";
    mini.style.top=e.clientY+"px";
    mini.style.setProperty("--x",(Math.random()-0.5)*200+"px");
    mini.style.setProperty("--y",(Math.random()-0.5)*200+"px");
    document.body.appendChild(mini);
    setTimeout(()=>mini.remove(),1200);
  }
  spawnParticles(e.clientX,e.clientY,10);
});

// ===== PARTICULAS BRILHANTES =====
function spawnParticles(x,y,count=6){
  for(let i=0;i<count;i++){
    const p = document.createElement("div");
    p.className="particle";
    p.style.left=x+"px";
    p.style.top=y+"px";
    const dx=(Math.random()-0.5)*200;
    const dy=(Math.random()-0.5)*200;
    p.style.setProperty("--dx",dx+"px");
    p.style.setProperty("--dy",dy+"px");
    p.style.background=["#7f7cff","#ff6ad5","#ffffff","#ff2b6f"][Math.floor(Math.random()*4)];
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1200);
  }
}

// ===== MÚSICA =====
playMusic.onclick=()=>{
  music.play();
  screens[0].classList.remove("active");
  screens[1].classList.add("active");
  spawnParticles(window.innerWidth/2,window.innerHeight/2,30);
};

// ===== FOTOS + ELOGIOS =====
const photos = Array.from({length:20},(_,i)=>`fotos/${i+1}.jpg`);
const compliments = [
"Seus olhos me fazem sorrir sem você perceber",
"Seus olhos me desmontam completamente",
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
"Você é perigosa… do melhor jeito possível 🫦"
];
let index=0;
photo.src=photos[0];
compliment.innerText=compliments[0];

// Zoom automático e transição suave
heartBtn.onclick=()=>{
  index=(index+1)%photos.length;
  photo.src=photos[index];
  compliment.innerText=compliments[index];
  photo.style.transform="scale(1.15)";
  spawnParticles(window.innerWidth/2,window.innerHeight/2,20);
  setTimeout(()=>photo.style.transform="scale(1)",500);
};

// ===== ANIMAÇÃO DE PALAVRAS E FOTOS NO CELULAR =====
function animateLoaderWords(){
  photos.slice(0,8).forEach((src,i)=>{
    setTimeout(()=>{
      const img = document.createElement("img");
      img.src = src;
      phone.appendChild(img);
      img.style.transform="translate(-50%, -50%) scale(1)";
      spawnParticles(phone.offsetLeft+100,phone.offsetTop+100,6);
    },i*600);
  });

  words.forEach((word,i)=>{
    setTimeout(()=>{
      const span = document.createElement("span");
      span.innerText = word;
      span.style.position = "absolute";
      span.style.color = ["#ff6ad5","#7f7cff","#ffffff","#ff2b6f"][Math.floor(Math.random()*4)];
      span.style.fontWeight = "bold";
      span.style.left = Math.random()*120 - 10 + "%";
      span.style.top = Math.random()*60 + "%";
      span.style.transform = "scale(0)";
      span.style.transition = "transform 0.8s, opacity 0.8s";
      phone.appendChild(span);
      setTimeout(()=>{span.style.transform="scale(1)"; span.style.opacity="1";spawnParticles(phone.offsetLeft+100,phone.offsetTop+100,4);},50);
    },i*400);
  });
}
animateLoaderWords();

// ===== TEXTO FINAL =====
openLetter.onclick=()=>{
  screens[1].classList.remove("active");
  screens[2].classList.add("active");
  letter.innerHTML=`
  <strong>OIIIII MINHA PRETINHA,</strong><br><br>
  Hoje é o seu aniversário, mas quem sente que ganhou um presente fui eu.
  Você entrou na minha vida e mudou tudo de um jeito leve, intenso e verdadeiro.<br><br>
  Seus olhos me fazem sorrir sem você perceber, seu jeitinho me prende,
  e com você eu aprendi que amar é construir um laço de
  <strong style="color:#ff6ad5">confiança</strong>,
  <strong style="color:#7f7cff">respeito</strong> e
  <strong style="color:#9f7cff">admiração</strong>.<br><br>
  Você me faz sentir especial melhor do que qualquer pessoa nesse mundo,
  e estar ao seu lado me lembra todos os dias que relacionamento
  é parceria, cuidado e escolha.<br><br>
  Você me olha e vejo tudo aquilo que eu quero cuidar,
  proteger e construir junto.<br><br>
  Eu te olho e penso: você é perigosa… do melhor jeito possível 🫦
  `;
};

// Dados das memórias - cada objeto representa uma estrela/memória
const memories = [
  {
    message: "Nossa primeira festa de familia como casal💜",
    images: [
      "src/img/15 anos/15 anos.jpeg",
      "src/img/15 anos/WhatsApp Image 2025-06-12 at 09.49.40 (1).jpeg",
      "src/img/15 anos/WhatsApp Image 2025-06-12 at 09.49.40.jpeg"
    ],
    date: "",
    feeling: "Você estava tão linda nesse dia, eu não conseguia tirar os olhos de você!"
  },
  {
    message: "Minha Deusa da Arte🎨",
    images: [
      "src/img/deusa da arte/deusa da arte.jpeg",
      "src/img/deusa da arte/WhatsApp Image 2025-06-12 at 09.49.43 (1).jpeg",
      "src/img/deusa da arte/WhatsApp Image 2025-06-12 at 09.49.44.jpeg"
    ],
    date: "",
    feeling: "Foi com você que eu aprendi que arte pode ter movimento, paixão, sedução e um lindo sorriso!"
  },
  {
    message: "É assim que eu te vejo 🌠",
    images: [
      "src/img/estrelas/estrelas.jpeg",
      "src/img/estrelas/WhatsApp Image 2025-06-12 at 09.49.44 (3).jpeg",
      "src/img/estrelas/WhatsApp Image 2025-06-12 at 09.49.45.jpeg"
    ],
    date: "",
    feeling: "Quando eu olho pra você eu vejo estrelas, vejo galáxias, vejo um brilho tão lindo que me hipnotiza! "
  },
  {
    message: "Eu amo sair com você 🧑‍🤝‍🧑",
    images: [
      "src/img/festa hafner/festa hafner.jpeg",
      "src/img/festa hafner/WhatsApp Image 2025-06-12 at 09.49.39 (1).jpeg"
    ],
    date: "",
    feeling: "Eu me sinto o homem mais sortudo do mundo quando seguro suas mãos!"
  },
  {
    message: "Amo nossos lanchinhos 🍔",
    images: [
      "src/img/lanchinhos/nossos lanchinhos.jpeg",
      "src/img/lanchinhos/WhatsApp Image 2025-06-12 at 09.49.44 (1).jpeg",
      "src/img/lanchinhos/WhatsApp Image 2025-06-12 at 09.49.44 (2).jpeg"
    ],
    date: "",
    feeling: "Quando nos saimos pra comer e eu vejo você toda felizinha, isso deixa meu coração quente!"
  },
  {
    message: "Você é a Deusa que eu cultuo 🛐",
    images: [
      "src/img/minha deusa/WhatsApp Image 2025-06-12 at 09.49.41 (1).jpeg",
      "src/img/minha deusa/WhatsApp Image 2025-06-12 at 09.49.41 (3).jpeg"
    ],
    date: "",
    feeling: "Você é a minha divindade, aquela que eu quero adorar, amar e ser devoto!"
  },
  {
    message: "A verdadeira obra de arte, é você 🖼️",
    images: [
      "src/img/museu 1/ida ao museu.jpeg",
      "src/img/museu 1/WhatsApp Image 2025-06-12 at 09.49.42 (2).jpeg",
      "src/img/museu 1/WhatsApp Image 2025-06-12 at 09.49.42 (3).jpeg"
    ],
    date: "",
    feeling: "Todas as vezes que vamos ao museus nenhuma obra me impressiona, pois tenho a mais bela de todas comigo! "
  },
  {
    message: "Você é música e poesia 📜",
    images: [
      "src/img/museu 2/ida ao museus2.jpeg",
      "src/img/museu 2/WhatsApp Image 2025-06-12 at 09.49.43 (2).jpeg",
      "src/img/museu 2/WhatsApp Image 2025-06-12 at 09.49.43 (3).jpeg",
      "src/img/museu 2/WhatsApp Image 2025-06-12 at 09.49.43.jpeg"
    ],
    date: "",
    feeling: "Se a música ganhasse forma e poesia ganhasse movimento o resultado seria você! "
  },
  {
    message: "Gravar esses momentos com você é algo precisos para mim 📸",
    images: [
      "src/img/nos/primeira festa a fantasia.jpeg",
      "src/img/nos/WhatsApp Image 2025-06-12 at 09.49.41 (2).jpeg",
      "src/img/nos/WhatsApp Image 2025-06-12 at 09.49.41.jpeg"
    ],
    date: "",
    feeling: "Cada foto que tiro com você é uma prova de que não estou delirando. As vezes acho que vocÊ é tão perfeita que só pode ser uma alucinação!"
  },
  {
    message: "Nossas noites juntos são as melhores 🌙",
    images: [
      "src/img/nossas noites/nossas noites.jpeg",
      "src/img/nossas noites/WhatsApp Image 2025-06-12 at 09.49.45 (3).jpeg",
      "src/img/nossas noites/WhatsApp Image 2025-06-12 at 09.49.46.jpeg"
    ],
    date: "",
    feeling: "As noites com vocÊ sempre foram especiais pra mim!"
  },
  {
    message: "Pra mim nosso lugar especial é a praia 🏖️",
    images: [
      "src/img/praia/nossas idas a praia.jpeg",
      "src/img/praia/WhatsApp Image 2025-06-12 at 09.49.42 (1).jpeg",
      "src/img/praia/WhatsApp Image 2025-06-12 at 09.49.42.jpeg",
      "src/img/praia/praia 2.jpeg",
      "src/img/praia/WhatsApp Image 2025-06-12 at 09.49.39.jpeg"
    ],
    date: "",
    feeling: "O soM do mar, o toque da areia e a visão do sol no seu corpo é o conjunto mais lindo que ja vi"
  },
  {
    message: "O começo de Nós 💏",
    images: [
      "src/img/primeira fotos/primeira foto.jpeg",
      "src/img/primeira fotos/WhatsApp Image 2025-06-12 at 09.49.46 (1).jpeg",
      "src/img/primeira fotos/WhatsApp Image 2025-06-12 at 09.49.46 (2).jpeg"
    ],
    date: "",
    feeling: "E pensar que um role de amigos na granito, com conversas sobre IST's se transformaria em uma história de amor!"
  },
  {
    message: "Meu amor...",
    images: [
      "src/img/rolezinhos/role noturno.jpeg",
      "src/img/rolezinhos/WhatsApp Image 2025-06-12 at 09.49.45 (1).jpeg",
      "src/img/rolezinhos/WhatsApp Image 2025-06-12 at 09.49.45 (2).jpeg"
    ],
    date: "",
    feeling: "Feliz Dia dos Namorados, meu amor. Hoje, mais do que nunca, eu queria estar ao seu lado. Queria poder olhar nos seus olhos e dizer o quanto você é incrível, forte, linda, inteligente, com um coração que sempre me inspirou a ser melhor. Eu sei que errei... sei que causei mágoas e, por isso, te peço desculpas do fundo da alma. Nunca foi por falta de amor — porque te amei em cada momento, e continuo amando. Você é a luz que iluminou meus dias mais escuros, a paz no meu caos, o Big Bang que criou amor no meu coração. Mesmo com tudo, mesmo com o fim… a verdade é que não existe nada que eu queira mais do que voltar a ser teu. Voltar a te chamar de minha. Voltar a fazer planos contigo e sentir teu sorriso curando qualquer tristeza. Se ainda houver um pedacinho de espaço pra mim no teu coração, saiba que o meu continua inteiro teu. EU TE AMO"
  }
];

// Elementos do DOM
const starsContainer = document.querySelector('.stars-container');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const carouselContainer = document.getElementById('carouselContainer');
const carouselDots = document.querySelector('.carousel-dots');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const musicToggle = document.getElementById('musicToggle');
const musicStatus = document.getElementById('musicStatus');

// Variáveis globais
let player;
let carouselImages = [];
let currentIndex = 0;
let intervalId = null;

// Cria estrelas aleatórias com base nas memórias
function createStars() {
  memories.forEach((memory, index) => {
    const star = document.createElement('i');
    star.className = 'fa-solid fa-star star';
    star.dataset.index = index;
    star.style.top = `${Math.random() * 85}vh`;
    star.style.left = `${Math.random() * 90}vw`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
  });
}

// Abre o modal com a memória correspondente
function openModal(memoryIndex) {
  const memory = memories[memoryIndex];
  modal.style.display = 'flex';
  modalMessage.innerHTML = `
    <strong>${memory.date}</strong><br>
    <h1>${memory.message}</h1><br><br>
    <em>${memory.feeling}</em>
  `;
  carouselContainer.querySelectorAll('img').forEach(img => img.remove());
  carouselDots.innerHTML = '';
  carouselImages = [];

  memory.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Memória ${i + 1}`;
    if (i === 0) img.classList.add('active');
    carouselContainer.insertBefore(img, carouselContainer.firstChild);
    carouselImages.push(img);

    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goToImage(i));
    carouselDots.appendChild(dot);
  });

  currentIndex = 0;
  clearInterval(intervalId);
  startCarousel();
}

function startCarousel() {
  if (carouselImages.length <= 1) return;
  intervalId = setInterval(showNextImage, 2000);
}

function showNextImage() {
  const nextIndex = (currentIndex + 1) % carouselImages.length;
  goToImage(nextIndex);
}

function showPrevImage() {
  const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  goToImage(prevIndex);
}

function goToImage(index) {
  carouselImages[currentIndex].classList.remove('active');
  document.querySelectorAll('.carousel-dot')[currentIndex].classList.remove('active');
  currentIndex = index;
  carouselImages[currentIndex].classList.add('active');
  document.querySelectorAll('.carousel-dot')[currentIndex].classList.add('active');
  clearInterval(intervalId);
  startCarousel();
}

// YouTube Player API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    videoId: '3df83nUZxFk',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: '3df83nUZxFk',
      controls: 0,
      modestbranding: 1,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}


function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
  musicStatus.textContent = "Música: Ligada (clique para ativar som)";
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player.playVideo();
  }
}

function toggleMusic() {
  if (player.isMuted()) {
    player.unMute();
    musicStatus.textContent = "Música: Ligada";
    musicToggle.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    player.mute();
    musicStatus.textContent = "Música: Desligada";
    musicToggle.innerHTML = '<i class="fas fa-music-slash"></i>';
  }
}

// DOM carregado
document.addEventListener('DOMContentLoaded', () => {
  createStars();

  starsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('star')) {
      openModal(event.target.dataset.index);
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  });

  musicToggle.addEventListener('click', toggleMusic);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      clearInterval(intervalId);
    }
  });

  // Primeira interação do usuário ativa som (se possível)
  document.body.addEventListener('click', function initMusic() {
    try {
      if (player && player.isMuted()) {
        player.unMute();
        musicStatus.textContent = "Música: Ligada";
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
      }
    } catch (e) {
      console.log("Não foi possível desmutar automaticamente:", e);
    }
    document.body.removeEventListener('click', initMusic);
  }, { once: true });
});

window.addEventListener('blur', () => clearInterval(intervalId));
window.addEventListener('focus', () => {
  if (modal.style.display === 'flex' && carouselImages.length > 1) {
    startCarousel();
  }
});

// Dados das memórias - cada objeto representa uma estrela/memória
const memories = [
  {
    message: "Nosso dia no parque foi inesquecível 💚",
    images: [
      "https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg",
      "https://images.pexels.com/photos/792777/pexels-photo-792777.jpeg",
      "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg"
    ],
    date: "15 de Maio, 2023",
    feeling: "Foi um dia mágico, cheio de risadas e momentos especiais. Me senti a pessoa mais feliz do mundo!"
  },
  {
    message: "Nosso jantar à luz de velas 🌹",
    images: [
      "https://images.pexels.com/photos/12510622/pexels-photo-12510622.png",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
    ],
    date: "20 de Junho, 2023",
    feeling: "A atmosfera era perfeita, e cada minuto ao seu lado me fez sentir especial e amada."
  },
  {
    message: "Aquela viagem inesquecível ✈️",
    images: [
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg"
    ],
    date: "10 de Agosto, 2023",
    feeling: "Explorar novos lugares com você foi a melhor experiência da minha vida. Cada momento foi uma aventura!"
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
    ${memory.message}<br><br>
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
  intervalId = setInterval(showNextImage, 3000);
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

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
const backgroundMusic = document.getElementById('backgroundMusic');

// Variáveis para controle do carrossel
let carouselImages = [];
let currentIndex = 0;
let intervalId = null;

// Função para criar as estrelas na tela
function createStars() {
  memories.forEach((memory, index) => {
    // Cria o elemento da estrela
    const star = document.createElement('i');
    star.className = 'fa-solid fa-star star';
    star.dataset.index = index;
    
    // Posicionamento aleatório na tela
    star.style.top = `${Math.random() * 85}vh`;
    star.style.left = `${Math.random() * 90}vw`;
    
    // Configuração de animação única para cada estrela
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    
    // Adiciona a estrela ao container
    starsContainer.appendChild(star);
  });
}

// Função para abrir o modal com a memória selecionada
function openModal(memoryIndex) {
  const memory = memories[memoryIndex];
  
  // Mostra o modal
  modal.style.display = 'flex';
  
  // Configura a mensagem no modal
  modalMessage.innerHTML = `
    <strong>${memory.date}</strong><br>
    ${memory.message}<br><br>
    <em>${memory.feeling}</em>
  `;
  
  // Limpa o carrossel anterior
  carouselContainer.querySelectorAll('img').forEach(img => img.remove());
  carouselDots.innerHTML = '';
  carouselImages = [];
  
  // Adiciona as novas imagens ao carrossel
  memory.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Memória ${i + 1}`;
    if (i === 0) img.classList.add('active');
    carouselContainer.insertBefore(img, carouselContainer.firstChild);
    carouselImages.push(img);
    
    // Cria os indicadores (dots) do carrossel
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goToImage(i));
    carouselDots.appendChild(dot);
  });
  
  // Reinicia o índice e o intervalo do carrossel
  currentIndex = 0;
  clearInterval(intervalId);
  startCarousel();
}

// Função para iniciar o carrossel automático
function startCarousel() {
  if (carouselImages.length <= 1) return;
  
  // Intervalo mais curto para transição (3 segundos)
  intervalId = setInterval(() => {
    showNextImage();
  }, 3000);
}

// Função para mostrar a próxima imagem no carrossel
function showNextImage() {
  const nextIndex = (currentIndex + 1) % carouselImages.length;
  goToImage(nextIndex);
}

// Função para mostrar a imagem anterior no carrossel
function showPrevImage() {
  const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  goToImage(prevIndex);
}

// Função para ir para uma imagem específica no carrossel
function goToImage(index) {
  // Remove a classe 'active' da imagem atual
  carouselImages[currentIndex].classList.remove('active');
  document.querySelectorAll('.carousel-dot')[currentIndex].classList.remove('active');
  
  // Atualiza o índice atual
  currentIndex = index;
  
  // Adiciona a classe 'active' para a nova imagem
  carouselImages[currentIndex].classList.add('active');
  document.querySelectorAll('.carousel-dot')[currentIndex].classList.add('active');
  
  // Reinicia o intervalo do carrossel
  clearInterval(intervalId);
  startCarousel();
}

// Função para controlar a música de fundo
function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicStatus.textContent = "Música: Ligada";
    musicToggle.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    backgroundMusic.pause();
    musicStatus.textContent = "Música: Desligada";
    musicToggle.innerHTML = '<i class="fas fa-music-slash"></i>';
  }
}

// Evento quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Cria as estrelas na tela
  createStars();
  
  // Configura o evento de clique para as estrelas
  starsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('star')) {
      openModal(event.target.dataset.index);
    }
  });
  
  // Configura o botão de fechar o modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  });
  
  // Configura os botões de navegação do carrossel
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);
  
  // Configura o controle de música
  musicToggle.addEventListener('click', toggleMusic);
  
  // Fecha o modal ao clicar fora do conteúdo
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      clearInterval(intervalId);
    }
  });
  
  // Tenta reproduzir a música automaticamente (pode não funcionar em alguns navegadores)
  document.body.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play().catch(error => {
        console.log("Reprodução automática prevenida:", error);
      });
    }
  }, { once: true });
});

// Função para pausar o carrossel quando a janela perde o foco
window.addEventListener('blur', () => {
  clearInterval(intervalId);
});

// Função para retomar o carrossel quando a janela recupera o foco
window.addEventListener('focus', () => {
  if (modal.style.display === 'flex' && carouselImages.length > 1) {
    startCarousel();
  }
});
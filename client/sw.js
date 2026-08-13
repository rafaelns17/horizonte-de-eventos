const CACHE_NAME = 'phaser-jogo-v2';

// Adicione aqui todos os arquivos que seu jogo precisa para rodar
const filesToCache = [
  './',
  './index.html',
  'js/game.js',           // Seu arquivo JS principal
  'js/phaser.min.js',     // O arquivo da engine Phaser (se for local)
  'js/config.js',         // Arquivo de configuração do Phaser
  'js/preloader.js',      // Arquivo da cena de pré-carregamento
  'js/scene0.js',         // Arquivo da primeira cena do jogo
  'assets/',              // Pasta com os assets do jogo (imagens, sons, etc.)
  'js/',
  './manifest.json',
  './lirio.png',
 // './assets/icone-512.png'
  // ATENÇÃO: Adicione aqui as imagens e sons do seu jogo
  // ex: './assets/fundo.png', './assets/musica.mp3'
];

// Instalação: Baixa os arquivos e coloca no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(filesToCache))
  );
});

// Interceptação: Responde com o cache se estiver offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
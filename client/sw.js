const CACHE_NAME = 'phaser-jogo-v4';

// Lista APENAS com arquivos individuais (nunca coloque nomes de pastas soltas)
const filesToCache = [
  './',
  './index.html',
  './main.css',
  './manifest.json',
  './lirio.png',
  './js/game.js',
  './js/phaser.min.js',
  './js/socket.io.min.js',
  './js/config.js',
  './js/preloader.js',
  './js/scene0.js'
  
  // ⚠️ Liste aqui TODAS as imagens/sons da sua pasta assets uma por uma:
  // './assets/personagem.png',
  // './assets/mapa.json',
  // './assets/som.mp3'
];

// Instalação: Baixa os arquivos e coloca no cache
/*self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(filesToCache))
  );
});*/
// Substitua o seu evento 'install' no sw.js por este:
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Testando e salvando arquivos no Cache...');
      
      // Testa arquivo por arquivo em vez de tentar tudo de uma vez
      return Promise.all(
        filesToCache.map((url) => {
          return cache.add(url).catch((err) => {
            // Se algum arquivo der erro, ele avisa no console exatamente qual é!
            console.error(`❌ ERRO NO CACHE: O arquivo "${url}" não foi encontrado!`, err);
          });
        })
      );
    })
  );
});

// Limpeza: Apaga caches antigos quando você muda para a versão v2, v3, etc.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
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
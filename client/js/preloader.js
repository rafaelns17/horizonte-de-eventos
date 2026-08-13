class preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

/*  init(data) {

    const bg = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000).setOrigin(0, 0).setDepth(0);
    const imageRatio = bg.width / bg.height;
    const screenRatio = this.scale.width / this.scale.height;

    let displayWidth = this.scale.width;
    let displayHeight = this.scale.height;

    if (screenRatio > imageRatio) {
      displayWidth = this.scale.height * imageRatio;
      displayHeight = this.scale.height;
    } else {
      displayWidth = this.scale.width;
      displayHeight = this.scale.width / imageRatio;
    }

    bg.setDisplaySize(displayWidth, displayHeight);
    bg.setPosition(
      (this.scale.width - displayWidth) / 2,
      (this.scale.height - displayHeight) / 2,
    );
  }

  /*preload() {
    // --- SISTEMA DA BARRA DE CARREGAMENTO VISUAL (GRAPHICS) ---
    // Criamos os componentes gráficos para evitar bugs de posicionamento e escala
    const progressBox = this.add.graphics();
    const progressBar = this.add.graphics();

    // Desenha o contorno da barra de carregamento centralizada na tela
    progressBox.lineStyle(2, 0x63ff8a, 1);
    progressBox.strokeRect(340, 175, 400, 30);

    // Evento que atualiza a barra conforme os ficheiros são descarregados
    this.load.on("progress", (value) => {
      progressBar.clear();
      progressBar.fillStyle(0x63ff8a, 1);
      // O preenchimento cresce proporcionalmente de 0 a 396px da esquerda para a direita
      progressBar.fillRect(342, 177, 396 * value, 26);
    });

    this.load.on("complete", () => {
      progressBox.destroy();
      progressBar.destroy();
    });

   // this.cameras.main.setBackgroundColor("#000000");

    // --- CARREGAMENTO DOS ASSETS ---
    this.load.setPath("assets/");

  
  }*/

  create() {

    this.add.text(this.scale.width / 2, this.scale.height / 2, "Feito com amor,\npara o meu amor!", {
      font: "32px Arial",
      fill: "#63ff8a",
    }).setOrigin(0.5, 0.5).setDepth(1);

    this.time.delayedCall(1000, () => {
      this.scene.stop("preloader");
      this.scene.start("scene0");
    });
  }

}

export default preloader;
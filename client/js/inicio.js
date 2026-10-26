class inicio extends Phaser.Scene {

  constructor() {
    super("inicio");
  }

  create() { 

    this.rect1 = this.add.rectangle(400, 300, 200, 100, 0x00ff00);
     this.rect1.setStrokeStyle(2, 0x8B4513); // Define a borda marrom
    let text1 = this.add.text(400, 300, "Em Breve", { fontSize: '24px', fill: '#000' });
    text1.setOrigin(0.5);

    this.rect1.setInteractive();
    this.rect1.on('pointerdown', () => {
      this.rect1.setFillStyle(0x008000);
    });this.rect1.on('pointerup', () => {
      this.rect1.setFillStyle(0x00ff00);
      /*this.scene.start("scene1");
      this.scene.stop("inicio");*/
    });

    this.rect2 = this.add.rectangle(400, 450, 200, 100, 0x00ff00);
    this.rect2.setStrokeStyle(2, 0x8B4513); // Define a borda marrom
    let text2 = this.add.text(400, 450, "Promessa Aleatória", { fontSize: '24px', fill: '#000' });
    text2.setOrigin(0.5);
    this.rect2.setInteractive();
    this.rect2.on('pointerdown', () => {
      this.rect2.setFillStyle(0x008000);
    }); this.rect2.on('pointerup', () => {
      this.rect2.setFillStyle(0x00ff00);
      this.scene.start("scene0");
      this.scene.stop("inicio");
    });
  }
}

export default inicio;
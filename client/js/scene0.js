class scene0 extends Phaser.Scene {
  constructor() {
    super("scene0");

  }

  create() {
    
    //bote um circulo no meio da tela
    this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, 50, 0xffffff).setOrigin(0.5, 0.5).setDepth(1);
    //this.add.image(0, 0, "space").setOrigin(0, 0).setScrollFactor(0.1, 1);
  }
  
}
export default scene0;
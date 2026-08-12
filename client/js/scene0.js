class scene0 extends Phaser.Scene {
  constructor() {
    super("scene0");
  }

  create() {
    // Adiciona um retângulo vermelho no meio da tela
    this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, 50, 50, 0xffffff).setDepth(9999);
  }
}
export default scene0;
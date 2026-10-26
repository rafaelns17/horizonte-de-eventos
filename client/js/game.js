import config from "./config.js";
import preloader from "./preloader.js";
import scene0 from "./scene0.js";
import inicio from "./inicio.js";
import scene1 from "./scene1.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    
    this.scene.add("scene0", scene0);
    this.scene.add("preloader", preloader);
    this.scene.add("inicio", inicio);
    this.scene.add("scene1", scene1);
    this.scene.start("preloader", { startScene: "inicio" });
  }
}

window.onload = () => {
  window.game = new Game();
};

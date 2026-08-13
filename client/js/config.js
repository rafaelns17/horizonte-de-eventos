var config = {
  type: Phaser.AUTO,
  width: 430,
  height: 932,
  parent: "game-container",
  cursos: true,
  /*input: {
    touch: {
      target: "game-container"
    }
  },*/
  physics:{
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false, 
    } 
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }
};

export default config;
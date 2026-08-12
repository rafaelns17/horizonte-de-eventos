var config = {
  type: Phaser.AUTO,
  width: 1100,
  height: 400,
  parent: "game-container",
  input: {
    touch: {
      target: "game-container"
    }
  },
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
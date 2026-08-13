class scene0 extends Phaser.Scene {
  constructor() {
    super("scene0");
  }

  create() {
    //faça atextbox ter um contorno marrom
    this.textBox = this.add.rectangle(this.cameras.main.width / 2, (this.cameras.main.height / 2) - 200, 350, 100, 0xffffff);
    this.textBox.setStrokeStyle(5, 0x8B4513); // Define a borda marrom
    this.text = this.add.text((this.cameras.main.width / 2), (this.cameras.main.height / 2) - 200, "", { fontSize: "16px", fill: "#000", wordWrap: { width: 300 } }).setOrigin(0.5);

    this.button = this.add.rectangle((this.cameras.main.width / 2) - 50, (this.cameras.main.height / 2), 250, 70, 0x00ff00);
    this.button.setStrokeStyle(5, 0x8B4513); // Define a borda marrom
    this.button.setInteractive();
    this.button.on('pointerdown', () => {
      this.button.setFillStyle(0x008000); // verde mais escuro
     // this.add.text(this.cameras.main.width / 2, (this.cameras.main.height / 2) + 100, "Botão pressionado!", { fontSize: "32px", fill: "#000" }).setOrigin(0.5);
    });
    this.button.on('pointerup', () => {
      this.button.setFillStyle(0x00ff00); // verde original
      this.sorteioDeVersiculos();
    });

    this.reset = this.add.rectangle((this.cameras.main.width / 2) + 140, (this.cameras.main.height / 2), 70, 70, 0xff0000);
    this.reset.setStrokeStyle(5, 0x8B4513); // Define a borda marrom
    this.reset.setInteractive();
    this.reset.on('pointerdown', () => {
      this.reset.setFillStyle(0x8B0000); // vermelho mais escuro
     // this.add.text(this.cameras.main.width / 2, (this.cameras.main.height / 2) + 100, "Botão pressionado!", { fontSize: "32px", fill: "#000" }).setOrigin(0.5);
    });
    this.reset.on('pointerup', () => {
      this.reset.setFillStyle(0xff0000); // vermelho original
      this.text.setText(""); // Limpa o texto exibido
      //  window.location.reload();
    });
   
  }

  sorteioDeVersiculos() {
    const versiculos = [
      "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.\" - João 3:16",
      "O Senhor é o meu pastor; nada me faltará.\" - Salmo 23:1",
      "Posso todas as coisas naquele que me fortalece.\" - Filipenses 4:13",
      "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.\" - Provérbios 3:5",
      "E conhecereis a verdade, e a verdade vos libertará.\" - João 8:32"
    ];

    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const versiculoSorteado = versiculos[randomIndex];

    // Exibe o versículo sorteado na tela
    this.text.setText(versiculoSorteado);
  }
}
export default scene0;
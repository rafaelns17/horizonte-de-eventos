class scene0 extends Phaser.Scene {
  constructor() {
    super("scene0");
  }

  create() {
    //faça atextbox ter um contorno marrom
    this.textBox = this.add.rectangle(this.cameras.main.width / 2, (this.cameras.main.height / 2) - 200, 400, 170, 0xffffff);
    this.textBox.setStrokeStyle(5, 0x8B4513); // Define a borda marrom
    this.text = this.add.text((this.cameras.main.width / 2) - 10, (this.cameras.main.height / 2) - 200, "", { fontSize: "23px", fill: "#000", fontStyle: "bold", wordWrap: { width: 350 } }).setOrigin(0.5); 

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
       "Em tudo dai graças; porque esta é a vontade de Deus em Cristo Jesus para convosco.\" - 1 Tessalonicenses 5:18.",
       "Não tenhas inveja dos homens malignos, nem me desjeis estar com eles.\" - Provérbios 24:1.",
       "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.\" - Salmo 23:3.",
       "Antes de ser afligido andava errado; mas agora guardo a tua palavra.\" - Salmo 119:67.",
       "Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.\" - Mateus 6:33.",
       "As palavras do Senhor são palavras puras, como prata refinada em forno de barro, purificada sete vezes.\" - Salmo 12:6.",
       "E, sobre tudo isto, revesti-vos de caridade, que é o vínculo da perfeição.\" - Colossenses 3:14.",
       "Porque esta é a mensagem que ouvistes desde o princípio: que nos amemos uns aos outros.\" - 1 João 3:11.",
       "Quem tem o Filho tem a vida; quem não tem o Filho de Deus não tem a vida.\" - 1 João 5:12.",
       "O amor não faz mal ao próximo. De sorte que o cumprimento da lei é o amor.\" - Romanos 13:10.",
       "Lançando sobre Ele toda a vossa ansiedade porque Ele tem cuidado de vós.\" - 1 Pedro 5:7.",
       "Porque o Senhor será tua esperança, e guardará os teus pés de serem presos.\" - Provérbios 3:26.",
       "Mas graças a Deus que nos dá a vitória por nosso Senhor Jesus Cristo.\" - 1 Coríntios 15:57.",
       "Eis que não tosquenejará nem dormirá o guarda de Israel.\" - Salmo 121:4.",
       "Mas não perecerá um único cabelo da vossa cabeça.\" - Lucas 21:18.",
       "Filho meu, ouve a instrução de teu pai e não deixes a doutrina de tua mãe.\" - Provérbios 1:8.",
       "O Espírito de Deus me fez; e a inspiração do Todo-Poderoso me deu vida.\" - Jó 33:4.",
       "Eis que estou à porta e bato; se alguém ouvir a minha voz, e abrir a porta... com ele cearei, e ele comigo.\" - Apocalipse 3:20.",
       "Porque este Deus é o nosso Deus para sempre; Ele será nosso guia até à morte.\" - Salmo 48:14.",
       "...mas fiel é Deus, que vos não deixará tentar acima do que podeis, antes com a tentação dará também o escape, para que a possais suportar.\" - 1 Coríntios 10:13.",
       "Quem pode entender os próprios erros? Expurga-me tu dos que me são ocultos.\" - Salmos 19:12.",
       "Sujeitai-vos pois a Deus, resisti ao diabo, e ele fugirá de vós.\" - Tiago 4:7.",
       "Eu repreendo e castigo a todos quantos amo; sê pois zelozo, e arrepende-te.\" - Apocalipse 3:19.",
       "Na verdade, na verdade vos digo que tudo quanto pedirdes a meu Pai, em meu nome, ele vo-lo há de dar.\" - João 16:23.",
       "E conhecereis a verdade, e a verdade vos libertará.\" - João 8:32.",
       "Mas, como é santo aquele que vos chamou, sede vós também santos em toda a vossa maneira de viver.\" - 1 Pedro 1:15.",
       "Eu vos tomarei por meu povo, e serei vosso Deus; e sabereis que eu sou o Senhor....\" - Êxodo 6:7.",
       "Em Deus faremos proezas, pois ele calcará aos pés os nossos inimigos.\" - Salmo 108:13.",
       "Ao Senhor empresta o que se compadece do pobre, e Ele lhe pagará o seu benefício.\" - Provérbios 19:17.",
       "...o choro pode durar uma noite, mas a alegria vem pela manhã.\" - Salmo 30:5.",
       "Mas nós, segundo sua promessa, aguardamos novos céus e nova terra em que habita justiça.\" - II Pedro 3:13.",
       "Seca-se as ervas e caem as flores, mas a palavra do nosso Deus subsiste eternamente.\" - Isaías 40:8.",
       "Aquele, porém, que se gloria, glorie-se no Senhor.\" - II Coríntios 10:17.",
       "A paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.\" - Filipenses 4:7.",
       "Não se turbe o vosso coração; credes em Deus, crede também em mim.\" - João 14:1.",
       "Mas o Senhor está assentado perpetuamente; ... Ele mesmo julgará o mundo com justiça....\" - Salmo 9:7 e 8.",
       "Porque derramarei água sobre o sedento, e rios sobre a terra seca; derramarei o meu Espírito sobre tua posteridade....\" - Isaías 44:3.",
       "Seja a vossa equidade notória a todos os homens, perto está o Senhor.\" - Filipenses 4:5.",
       "Julgará os aflitos do povo, salvará os filhos do necessitado, e quebrantará o opressor.\" - Salmo 72:4.",
       "...te envio para lhes abrires os olhos, e das trevas os converteres à luz, e do poder de Satanás a Deus.\" - Atos 26:17,18.",
       "Não te hei dito que, se creres verás a glória de Deus?.\" - João 11:40.",
       "O céu e a terra passarão, mas as minhas palavras não hão de passar.\" - Mateus 24:35.",  
       "Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti.\" - Isaías 26:3.",
       "Se confessarmos os nossos pecados, Ele é fiel e justo para nos perdoar os pecados.\" - 1 João 1:9.",
       "O Senhor está comigo; não temerei o que me pode fazer o homem.\" - Salmo 118:6.",
       "...Certamente, cedo venho....\" - Apocalipse 22:20.",
       "Bem-aventurados os que trilham caminhos retos, e andam na lei do Senhor.\" - Salmo 119:1.",
       "...Buscarás ao Senhor teu Deus e o acharás, quando o buscares de todo o coração....\" - Deuteronômio 4:29.",
       "E será aquele Varão como um esconderijo contra o vento, e um refúgio contra a tempestade, como ribeiros de águas em lugares secos....\" - Isaías 32:2.",
       "Sabei pois, que o Senhor separou para si aquele que lhe é querido: o Senhor ouvirá quando eu chamar a ele.\" - Salmo 4:3.",
       "Dizei aos justos que lhes irá bem; porque comerão do fruto das suas obras.\" - Isaías 3:10.",
       "Entrega o teu caminho ao Senhor, confia nele, e ele tudo fará.\" - Salmos 37:5.",
       "Então os justos resplandecerão como o sol, no reino de seu Pai.\" - Mateus 13:43.",
       "O Senhor resgata a alma dos seus servos, e nenhum dos que nele confiam será condensado.\" - Salmo 34:22.",
       "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.\" - Salmo 91:1.",
       "E estes sinais seguirão aos que crerem... e porão as mãos sobre os enfermos, e os curarão.\" - Marcos 16:17-18.",
       "Humilhai-vos perante o Senhor, e ele vos exaltará.\" - Tiago 4:10.",
       "Vede quão grande caridade nos tem concedido o Pai: que fôssemos chamados filhos de Deus.\" - 1 João 3:1.",
       "Na casa do justo há um grande tesouro, mas nos frutos do ímpio há perturbação.\" - Provérbios 15:6.",
       "E qualquer que nele tem esta esperança purifica-se a si mesmo, como também ele é puro.\" - 1 João 3:3.",
       "O Senhor é bom, uma fortaleza no dia da angústia.\" - Naum 1:7.",
       "...este é o caminho, andai nele, sem vos desviardes nem para a direita nem para a esquerda.\" - Isaías 30:21.",
       "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo....\" - Salmo 23:4.",
       "Porque eu pela lei estou morto para a lei, para viver para Deus.\" - Gálatas 2:19.",
       "Não ameis o mundo, nem o que no mundo há. Se alguém ama o mundo, o amor do Pai não está nele.\" - 1 João 2:15.",
       "Porque assim diz o Senhor Jeová: Eis que eu, eu mesmo, procurarei as minhas ovelhas, e as buscarei.\" - Ezequiel 34:11.",
       "Pelas caminhos diretos te fiz andar. Por eles andando, não se embaraçarão os teus passos; e se correres, não tropeçarás.\" - Provérbios 4:11-12.",
       "Como o Pai me amou, também eu vos amei a vós; permanecei no meu amor.\" - João 15:9.",
       "Concluímos pois que o homem é justificado pela fé sem as obras da lei.\" - Romanos 3:28.",
       "Do aperto da língua estarás abrigado; e não temerás a assolação, quando vier.\" - Jó 5:21.",
       "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.\" - Efésios 6:10.",
       "Mas aquele que perseverar até ao fim será salvo.\" - Mateus 24:13.",
       "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos.\" - Mateus 5:6.",
       "Um paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.\" - Salmo 4:8.",
       "O anjo do Senhor acampa-se ao redor dos que o temem, e os livra.\" - Salmo 34:7.",
       "O Senhor dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio.\" - Salmo 46:11.",
       "Sede pois imitadores de Deus, como filhos amados.\" - Efésios 5:21.",
       "Eu os remirei da violência do inferno, e os resgatarei da morte.\" - Oséias 13:14.",
       "Bem-aventurado é aquele que atende ao pobre; o Senhor o livrará no dia do mal.\" - Salmo 41:1.",
       "O sol não te molestará de dia nem a lua de noite.\" - Salmo 121:6.",
       "Eis que bem-aventurado é o homem a quem Deus castiga; não desprezes, pois, o castigo do Todo-Poderoso.\" - Jó 5:17.",
       "Pede-me, e eu te darei as nações por tua herança, e os fins da terra por tua possessão.\" - Salmo 2:8.",
       "Pois não deixará a minha alma no inferno, nem permitirás que o teu Santo veja corrupção.\" - Salmo 16:10.",
       "Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.\" - Salmos 90:12.",
       "O Senhor será também um alto refúgio para o oprimido; um alto refúgio em tempos de angústia.\" - Salmo 9:9.",
       "O Senhor te guardará de todo o mal; ele guardará a tua alma.\" - Salmo 121:7.",
       "Não tenhas medo, porque eu sou contigo; não te assombres, porque eu sou teu Deus....\" - Isaías 41:10.",
       "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.\" - Salmo 46:1.",
       "Bendito o varão que confia no Senhor, e cuja esperança é o Senhor.\" - Jeremias 17:7.",
       "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.\" - Salmo 119:105.",
       "O que encobre as suas transgressões nunca prosperará; mas o que as confessa e deixa, alcançará misericórdia.\" - Provérbios 28:13.",
       "Sede vós também pacientes, fortalecei os vossos corações, porque já a vinda do Senhor está próxima.\" - Tiago 5:8.",
       "Eu sou o bom pastor; o bom pastor dá a sua vida pelas ovelhas.\" - João 10:11.",
       "Aquele que diz que está nele, também deve andar como ele andou.\" - 1 João 2:6.",
       "Se é certo que com ele padecemos, para que também com ele sejamos glorificados.\" - Romanos 8:17.",
       "Porque não sois vós quem falará, mas o Espírito de vosso Pai que fala em vós.\" - Mateus 10:20.",
       "Quem está em mim, e Eu nele, esse dá muito fruto; porque sem mim, nada podeis fazer.\" - João 15:5.",
       "E não vos embriagueis com vinho, em que há contenda, mas enchei-vos do Espírito.\" - Efésios 5:18.",
       "Lembrar-vos da mulher de Ló.\" - Lucas 17:32.",
       "Porque tu acenderás a minha candeia; o Senhor meu Deus iluminará as minhas trevas.\" - Salmo 18:28.",
       "Senhor dos Exércitos, bem-aventurado o homem que em ti põe a sua confiança.\" - Salmo 84:12.",
       "E tudo o que pedirdes na oração, crendo, o recebereis.\" - Mateus 21:22.",
       "Não peço que os tires do mundo, mas que os livres do mal.\" - João 17:15.",
       "Os que confiam no Senhor serão como o monte de Sião, que não se abala, mas permanece para sempre.\" - Salmo 125:1.",
       "Quem tem ouvidos, ouça o que o Espírito diz às igrejas: o que vencer não receberá o dano da segunda morte.\" - Apocalipse 2:11.",
       "Uma coisa pedi ao Senhor, e a buscarei: que possa morar na casa do Senhor todos os dias da minha vida....\" - Salmo 27:4.",
       "...Se alguém quiser vir após mim, negue-se a si mesmo, e tome cada dia a sua cruz, e siga-me.\" - Lucas 9:23."
    ];

    const randomIndex = Math.floor(Math.random() * versiculos.length);
    const versiculoSorteado = versiculos[randomIndex];

    // Exibe o versículo sorteado na tela
    this.text.setText(versiculoSorteado);
  }
}
export default scene0;
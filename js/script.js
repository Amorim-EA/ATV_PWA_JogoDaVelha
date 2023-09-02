let row1col1 = document.getElementById("row1col1");
let row1col2 = document.getElementById("row1col2");
let row1col3 = document.getElementById("row1col3");
let row2col1 = document.getElementById("row2col1");
let row2col2 = document.getElementById("row2col2");
let row2col3 = document.getElementById("row2col3");
let row3col1 = document.getElementById("row3col1");
let row3col2 = document.getElementById("row3col2");
let row3col3 = document.getElementById("row3col3");

quantidadeJogadas = 0;
let imagem = "/images/x.png";
let posicionar = 0;
let tabuleiro = [[0,0,0], [0,0,0], [0,0,0]];

const reiniciar = document.getElementById('reiniciar');

function jogador() {
  imagem = quantidadeJogadas % 2 == 0 ? "/images/x.png" : "/images/o.png";
  imagem == "/images/x.png" ? posicionar = 1: posicionar = 2;
}

function verificarVitorioso() {
    let ver1 = (i) => {tabuleiro[0][0] == i && tabuleiro[0][1] == i && tabuleiro[0][2] == i};
    let ver2 = (i) => {tabuleiro[1][0] == i && tabuleiro[1][1] == i && tabuleiro[1][2] == i};
    let ver3 = (i) => {tabuleiro[2][0] == i && tabuleiro[2][1] == i && tabuleiro[2][2] == i};
    let ver4 = (i) => {tabuleiro[0][0] == i && tabuleiro[1][1] == i && tabuleiro[2][2] == i};
    let ver5 = (i) => {tabuleiro[0][2] == i && tabuleiro[1][1] == i && tabuleiro[2][0] == i};
    if(ver1(1) || ver2(1) || ver3(1) || ver4(1) || ver5(1)){
      popUpPersonalite('X');
    } else if(ver1(2) || ver2(2) || ver3(2) || ver4(2) || ver5(2)){
      popUpPersonalite('O');
    }
}

function popUpPersonalite(jogador) {
  const popup = document.getElementById('vencedor');
  const mensagemDoVencedor = document.getElementById('mensagemDoVencedor');
  mensagemDoVencedor.textContent = `Jogador ${jogador} venceu!`;
  popup.style.display = 'block';
}

function reiniciarJogo() {
  posicionar = 0;
  quantidadeJogadas = 0;
  for(let i = 0;i < 3;i++){
    for(let j = 0;j < 3;j++){
      tabuleiro[i][j] = 0;
      let casa = document.getElementById(`row${i+1}col${j+1}`);
      casa.style.backgroundImage = "none";
    }
  }
}

row1col1.addEventListener('click', () => {
    jogador();
    row1col1.style.backgroundImage = `url(${imagem})`;
    tabuleiro[0][0] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row1col2.addEventListener('click', () => {
    jogador();
    row1col2.style.backgroundImage = `url(${imagem})`;
    tabuleiro[0][1] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row1col3.addEventListener('click', () => {
    jogador();
    row1col3.style.backgroundImage = `url(${imagem})`;
    tabuleiro[0][2] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row2col1.addEventListener('click', () => {
    jogador();
    row2col1.style.backgroundImage = `url(${imagem})`;
    tabuleiro[1][0] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row2col2.addEventListener('click', () => {
    jogador();
    row2col2.style.backgroundImage = `url(${imagem})`;
    tabuleiro[1][1] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row2col3.addEventListener('click', () => {
    jogador();
    row2col3.style.backgroundImage = `url(${imagem})`;
    tabuleiro[1][2] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row3col1.addEventListener('click', () => {
    jogador();
    row3col1.style.backgroundImage = `url(${imagem})`;
    tabuleiro[2][0] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row3col2.addEventListener('click', () => {
    jogador();
    row3col2.style.backgroundImage = `url(${imagem})`;
    tabuleiro[2][1] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

row3col3.addEventListener('click', () => {
    jogador();
    row3col3.style.backgroundImage = `url(${imagem})`;
    tabuleiro[2][2] = posicionar;
    quantidadeJogadas ++;
    verificarVitorioso();
});

reiniciar.addEventListener('click', () => {
    reiniciarJogo(); 
    const popup = document.getElementById('vencedor');
    popup.style.display = 'none';
});
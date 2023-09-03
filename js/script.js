let row1col1 = document.getElementById("row1col1");
let row1col2 = document.getElementById("row1col2");
let row1col3 = document.getElementById("row1col3");
let row2col1 = document.getElementById("row2col1");
let row2col2 = document.getElementById("row2col2");
let row2col3 = document.getElementById("row2col3");
let row3col1 = document.getElementById("row3col1");
let row3col2 = document.getElementById("row3col2");
let row3col3 = document.getElementById("row3col3");

let quantidadeJogadas = 0;
let imagem = "/images/x.png";
let posicionar = 0;
let tabuleiro = [[0,0,0], [0,0,0], [0,0,0]];

function jogador() {
  imagem = quantidadeJogadas % 2 == 0 ? "/images/x.png" : "/images/o.png";
  imagem == "/images/x.png" ? posicionar = 1: posicionar = 2;
}

function possibilidadesDeVitorias(jogador) {
    if(tabuleiro[0][0] == jogador && tabuleiro[0][1] == jogador && tabuleiro[0][2] == jogador){
      return  true;
    } else if(tabuleiro[1][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[1][2] == jogador){
      return true;
    } else if(tabuleiro[2][0] == jogador && tabuleiro[2][1] == jogador && tabuleiro[2][2] == jogador){
      return true;
    } else if(tabuleiro[0][0] == jogador && tabuleiro[1][0] == jogador && tabuleiro[2][0] == jogador){
      return true;
    } else if(tabuleiro[0][1] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][1] == jogador){
      return true;
    } else if(tabuleiro[0][2] == jogador && tabuleiro[1][2] == jogador && tabuleiro[2][2] == jogador){
      return true;
    } else if(tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador){
      return  true;
    } else if(tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador){
      return true;
    } else {
      return false;
    }
}

function verificarJogo() {
    let vitoria_de_X = possibilidadesDeVitorias(1);
    let vitoria_de_O = possibilidadesDeVitorias(2);
    
    if(vitoria_de_X){
      popUp('Parabéns ao jogador X!');
    } else if(vitoria_de_O){
      popUp('Parabéns ao jogador O!');
    } else if(quantidadeJogadas === 9) {
      popUp('Deu empate!');
    } else {
      return;
    }
}

function popUp(mensagem) {
  disableAll();
  const popup = document.querySelector('.popup');
  const mensagemDeSaida = document.getElementById('mensagemDeSaida');
  mensagemDeSaida.textContent = mensagem;
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
      casa.classList.remove('desabilitada');
    }
  }
}

function disable(r,c) {
  let div = document.getElementById(`row${r}col${c}`);
  div.classList.add('desabilitada');
}

function disableAll() {
  for(let i = 1;i < 4;i++){
    for(let j = 1;j < 4;j++){
      disable(i,j);
    }
  }
}

row1col1.addEventListener('click', () => {
   if (row1col1.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row1col1.style.backgroundImage = `url(${imagem})`;
    tabuleiro[0][0] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(1,1);
});

row1col2.addEventListener('click', () => {
    if (row1col2.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row1col2.style.backgroundImage = `url(${imagem})`;
    tabuleiro[0][1] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(1,2);
});

row1col3.addEventListener('click', () => {
    if (row1col3.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row1col3.style.backgroundImage = `url(${imagem})`;
    tabuleiro[0][2] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(1,3);
});

row2col1.addEventListener('click', () => {
    if (row2col1.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row2col1.style.backgroundImage = `url(${imagem})`;
    tabuleiro[1][0] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(2,1);
});

row2col2.addEventListener('click', () => {
    if (row2col2.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row2col2.style.backgroundImage = `url(${imagem})`;
    tabuleiro[1][1] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(2,2);
});

row2col3.addEventListener('click', () => {
    if (row2col3.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row2col3.style.backgroundImage = `url(${imagem})`;
    tabuleiro[1][2] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(2,3);
});

row3col1.addEventListener('click', () => {
    if (row3col1.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row3col1.style.backgroundImage = `url(${imagem})`;
    tabuleiro[2][0] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(3,1);
});

row3col2.addEventListener('click', () => {
    if (row3col2.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row3col2.style.backgroundImage = `url(${imagem})`;
    tabuleiro[2][1] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(3,2);
});

row3col3.addEventListener('click', () => {
    if (row3col3.classList.contains('desabilitada')) {
      return;
    }
    jogador();
    row3col3.style.backgroundImage = `url(${imagem})`;
    tabuleiro[2][2] = posicionar;
    quantidadeJogadas ++;
    verificarJogo();
    disable(3,3);
});

const reiniciar = document.getElementById('reiniciar');

reiniciar.addEventListener('click', () => {
    reiniciarJogo(); 
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
});
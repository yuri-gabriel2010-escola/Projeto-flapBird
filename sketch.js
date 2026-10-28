//FlapBird-Parte1
//Criando a classe Bird e seus metodos
//metodo1 - exibi()

let birdimagem;
let pipeimagem;
let backgroud;

let bird;
let pipes = [];

async function setup() {  
  createCanvas(600, 400);
  backgroud = await loadImage('plano de fundo.jpg')
  birdimagem = await loadImage('bird.png');
  pipeimagem = await loadImage('pipe.png');
  

  bird = new Bird(25, (width / 2), birdimagem);
  pipes.push(new Pipe(width, pipeimagem));
}

function draw() {
  background(backgroud);
  bird.exibi();
  bird.update();

  if (frameCount % 200 === 0){
    pipes.push(new Pipe(width, pipeimagem));
  }

  for(let pipe of pipes){
    pipe.exibir();
    pipe.update();

    if(bird.colidiu(pipe)){
      noLoop();
    }
  }
}
//-----Função Pressionar a tecla "espaço"-----//

function keyPressed() {
  if(key === ' '){
    bird.up();
  }
}
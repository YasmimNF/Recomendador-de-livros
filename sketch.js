//Quebrando o gelo
//Verity
//Apostando no amor
//É assim que acaba
//Powerless
//Quarta asa
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de livros");
  createSpan("Sua idade:");
  campoIdade = createInput("16");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "É assim que acaba";
    } else {
      if (idade >= 16) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Apostando no amor";          
        } else{
         return "Quebrando o gelo";
        }
      } else {
        if (gostaDeFantasia) {
          return "Powerless";
        } else {
          return "Quarta asa";
        }
      }
    }
  } else {
    if (gostaDeDrama) {
      return "Verity";
    } else {
      return "Quebrando o gelo";
    }
  }
}

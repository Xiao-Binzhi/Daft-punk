function setup() {
  createCanvas(1500, 900);
  startMicrophone();
}

function draw() {
  //volume
  background(0);
  stroke(27, 71, 245);
  strokeWeight(3);

  let arrotondamento = 50;
  let barre_y = 40;
  let barra_lunga = 375 + volume(750);
  let barra_corta = 375 - volume(750);
  let barra_larghezza = 75;

  let base_y = 275+351;
  let barra_lunga_y = base_y - barra_lunga;
  let barra_corta_y = base_y - barra_corta;

  rectMode(CORNER);
  fill("#D9D9D9");
  rect(545, barra_lunga_y, barra_larghezza, barra_lunga, arrotondamento);

  rectMode(CORNER);
  fill("#D9D9D9");
  rect(628, barra_corta_y, barra_larghezza, barra_corta, arrotondamento);

  rectMode(CORNER);
  fill("#D9D9D9");
  rect(711, barra_lunga_y, barra_larghezza, barra_lunga, arrotondamento);

  rectMode(CORNER);
  fill("#D9D9D9");
  rect(794, barra_corta_y, barra_larghezza, barra_corta, arrotondamento);

  rectMode(CORNER);
  fill("#D9D9D9");
  rect(877, barra_lunga_y, barra_larghezza, barra_lunga, arrotondamento);

  //face
  ellipseMode(CENTER);
  fill("#D2E6F6");
  stroke(27, 71, 245);
  strokeWeight(5);
  ellipse(width / 2, height / 2, 300, 300);

  //glass
  let glass_larghezza = 100
  let glass_altezza = 324
  let glass_x = width / 2 - glass_altezza / 2
  let glass_y = 379

  
  rectMode(CORNER);
  fill("black");
  rect(glass_x, glass_y, glass_altezza, glass_larghezza);

  //light
  rectMode(CORNER);
  fill("white");
  rect(glass_x+volume(500), glass_y, 29, glass_larghezza);

  //mouth
  let mouth_larghezza = 50
  let mouth_altezza = 10
  let mouth_x = width / 2 - mouth_larghezza / 2
  let mouth_y = 511
  
  rectMode(CORNER);
  fill("black");
  noStroke();
  rect(mouth_x, mouth_y, mouth_larghezza, mouth_altezza);
}

function mouseclicked(){
  saveGif("image.gif", 2)
}
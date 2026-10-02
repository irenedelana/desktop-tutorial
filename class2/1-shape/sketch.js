let xMax = 400; 
let yMax = 600;
let xrocket = xMax/2;
let yrocket = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(20,24,40);

  push();
  //corpo del rocket
  fill(220);
  stroke(40);
  strokeWeight(2); //spessore del bordo
  rectMode(CENTER); //lo fa partire dal centro
  rect(xrocket, yrocket+30, 80, 180, 20);

  //punta del rocket
  fill(200,40,40); //fa il rosso
  triangle(xrocket-40, yrocket-60, xrocket, yrocket-120, xrocket+40, yrocket-60);

  //finestra
  fill(40, 150, 220); //blu
  stroke(255); //bordo bianco
  strokeWeight(3);
  ellipse(xrocket, yrocket+20, 48, 48);

  //ala sinistra e destra
  fill(180, 30, 30);
  stroke(40);
  strokeWeight(2);
  triangle(xrocket-40, yrocket+90, xrocket-80, yrocket+130, xrocket-20, yrocket+90); //ala di sinistra
  triangle(xrocket+40, yrocket+90, xrocket+80, yrocket+130, xrocket+20, yrocket+90); //ala destra

  pop();


  push();
  randomSeed(99) //per posizionare le stelle con numeri pseudocasuali uso questo seme e aggiungo fill ed ellipse che vedi sotto
  noStroke(); //tolgo l'outline delle stelle
  for(let i=0; i<120; i++){
    let sx = (i*37) % width + i%3; //le variabili width e height sono date automaticamente da createCanvas
    let sy = (i*73) % height + i%7;
    fill(255, 255, 255, random(150, 255));
    ellipse(sx, sy, random(1, 2.8));

    //per posizionare le stelle tramite ciclo tengo letsx e letsy e poi scrivo:
    /*if(i%2 == 0){         //primo tipo di stelle
      fill(255,255,150);
      ellipse(sx, sy, 1);
    }else if(i%3 == 0){   //secondo tipo
      fill(200,100,255);
      ellipse(sx, sy, 1.5);
    }else{               //terzo tipo
      fill(255,255,100);
      ellipse(sx, sy, 2.8);
    }*/
  }
  pop();

  xrocket = (xrocket + 1)%(xMax+120); //animazione
}
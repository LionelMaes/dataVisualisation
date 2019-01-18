import processing.svg.*;


int size;
int imgWidth = 200;
int imgHeight = 200;
PShape skull;
int deathTime = millis();
PShape plane;
int planeTime = millis();
PImage baby;
int bornTime = millis();
PImage mcdo;
int mcdoTime = millis();
PShape upload;
int uploadTime = millis();
PImage home;
int homeT = millis();
int yPosL1 = 120;

void setup(){
  size(600,540);
  background(0);
  skull = loadShape("skull.svg");
  plane = loadShape("plane.svg");
  baby = loadImage("baby.png");
  baby.resize(imgWidth, imgHeight);
  mcdo = loadImage("mcdo.png");
  mcdo.resize(imgWidth, imgHeight);
  upload = loadShape("upload.svg");
  home = loadImage("light.png");
  home.resize(imgWidth, imgHeight);
  textSize(45);
}

void draw(){
  drawBackground();
  drawDeath();
  drawPlane();
  baby();
  mcdo();
  upload();
  newHome();
}

void drawBackground(){
  fill(0,10);
  rect(0,0,width,height);
  fill(255);
  text("Every 100 times...",125,80);
}

void baby(){
  image(baby,0,yPosL1);
  fill(255);
 if(millis() > bornTime + 2325){
   rect(0,yPosL1,imgWidth,imgHeight);
    //ellipse(100,230,25,25);
    bornTime = millis();
  }
}

void drawDeath(){
  shape(skull,200,yPosL1,imgWidth,imgHeight);
if(millis() > deathTime + 5555){
    fill(255);
    //ellipse(300,230,25,25);
    rect(200,yPosL1,imgWidth,imgHeight);
    deathTime = millis();
  }
}

void drawPlane(){
  shape(plane,400,yPosL1,imgWidth,imgHeight);
  fill(255);
  if(millis() > planeTime + 10344){
    rect(400,yPosL1,imgWidth,imgHeight);
    planeTime = millis();
  }
}

void mcdo(){
  image(mcdo,0,340);
  fill(255);
 if(millis() > mcdoTime + 1900){
    rect(0,340,imgWidth,imgHeight);
    mcdoTime = millis();
  }
}

void upload(){
 shape(upload,200,340,imgWidth,imgHeight);
if(millis() > uploadTime + 15000){
    fill(255);
    rect(200,340,imgWidth,imgHeight);
    uploadTime = millis();
  }
}


void newHome(){
  image(home,400,340);
  fill(255);
 if(millis() > homeT + 16666){
    rect(400,340,imgWidth,imgHeight);
    homeT = millis();
  }
}

/* bronnen:
www.everysecond.io
https://www.omnicalculator.com/everyday-life/every-second
https://list25.com/25-things-that-will-happen-in-the-next-60-seconds/
*/

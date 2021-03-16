//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg,dogImg1;


function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");

	
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150)
  dog.scale =0.35;
  dog.addImage(dogImg);
foodStock = database.ref('FOOD')
foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  console.log(foodS);
writeStock(foodS);
dog.addImage(dogImg1)

}

  drawSprites();
  fill (255,255,254)
  textSize(15,13)
  text("food left because dog should not die" +   foodS,150,100);
  text("note:press up arrow to feed dog dont be stupid noob",100,450)
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  FOOD:x
})
}

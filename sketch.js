var dog,happydog,database;
var foodS,foodStock;

function preload(){
Dogimg = loadImage("images/dogImg.png");
Dogimg1= loadImage("images/dogImg1.png");	
}

function setup() { 
  database = firebase.database(); 
  console.log(database);
	createCanvas(500,500);  
   dog = createSprite(300,200);   
   dog.addImage("dog",Dogimg);
     
   foodStock = database.ref('food');
   foodStock.on("value",readStock)
}


function draw() {  
    background("46,139,87");
     if (keyWentDown(UP_ARROW)){
       database = database - 1
       writeStock(foodS);
       dog.addImage(Dogimg1);
     }
  drawSprites();
  text("note : press up arrow key to to feed the dog",100,100);
  textsize(30);

  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}




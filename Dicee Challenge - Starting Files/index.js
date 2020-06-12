var random= Math.floor(Math.random()*6)+1;
var diceImage= "dice" + random + ".png";
var randomImageSource = "images/" + diceImage;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var random1 =Math.floor(Math.random()*6)+1;
var randomImageSource1 ="images/dice" +random1 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);

if(random>random1){
  document.querySelector("h1").innerHTML="🏆Player 1 WINS!!🏆";
}
else if( random1>random){
  document.querySelector("h1").innerHTML="🏆Player 2 WINS!!🏆";
}
else{
  document.querySelector("h1").innerHTML="🔥DRAW!!🔥";
}

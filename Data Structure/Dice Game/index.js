var randomNum1=Math.floor(Math.random() *6) + 1;

var randomNum2=Math.floor(Math.random() *6) + 1;

var src1="images/" + "dice" + randomNum1 + ".png";

var src2="images/" + "dice" + randomNum2 + ".png";

var P1=prompt("Player1:");

var P2=prompt("Player2:");

document.querySelectorAll("img")[0].setAttribute("src" , src1 );

document.querySelectorAll("img")[1].setAttribute("src" , src2 );

if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🚩" + P1 + "  wins!";
}

else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = P2 + " wins! 🚩";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
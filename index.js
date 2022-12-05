var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
document.querySelectorAll("img")
var a=document.querySelectorAll("img")[0];
var b=document.querySelectorAll("img")[1];
a.getAttribute("src");
// 'images/dice6.png'
if(randomNumber1==1){
    a.setAttribute("src","images/dice1.png");
}
else if(randomNumber1==2){
    a.setAttribute("src","images/dice2.png");
}
else if(randomNumber1==3){
    a.setAttribute("src","images/dice3.png");
}
else if(randomNumber1==4){
    a.setAttribute("src","images/dice4.png");
}
else if(randomNumber1==5){
    a.setAttribute("src","images/dice5.png");
}
else{
    a.setAttribute("src","images/dice6.png");
}
if(randomNumber2==1){
    b.setAttribute("src","images/dice1.png");
}
else if(randomNumber2==2){
    b.setAttribute("src","images/dice2.png");
}
else if(randomNumber2==3){
    b.setAttribute("src","images/dice3.png");
}
else if(randomNumber2==4){
    b.setAttribute("src","images/dice4.png");
}
else if(randomNumber2==5){
    b.setAttribute("src","images/dice5.png");
}
else{
    b.setAttribute("src","images/dice6.png");
}
var c=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    // c.setAttribute("Refresh Me","Player 1 Wins !");
    c.innerHTML="Player 1 Wins !";
}
else if(randomNumber1<randomNumber2){
    // c.setAttribute("Refresh Me","Player 2 Wins !");
    c.innerHTML="Player 2 Wins !";
}
else{
    // c.setAttribute("Refresh Me","Draw");
    c.innerHTML="Draw";
}
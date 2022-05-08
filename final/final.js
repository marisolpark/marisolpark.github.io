// This is the code that takes the text input and makes it the text for the animation
var animationText = document.getElementById("animationText"); // this the variable where the text will be drawn

function takeInput(){ //This is the function which takes the text input and puts it into the animation box
    var textInput = document.getElementById("textInput").value;
    String(textInput);
    animationText.innerHTML=("");
    animationText.innerHTML=(textInput);
}


// This is the section where I take the color inputs and make the color of the text animation change --> I followed this tutorial: https://www.youtube.com/watch?v=eIw-Nou9L9E
var Bgcolor = document.querySelector('#colorBg');
var Fill1 = document.querySelector('#colorFill');
var Border1 = document.querySelector('#colorBor');
var animationDiv = document.getElementById("animationDiv");
var colorDoneButton = document.getElementById("colorDoneButton");

colorDoneButton.addEventListener("click", ()=>{
    let color1= Bgcolor.value;
    let color2= Fill1.value;
    let color3= Border1.value;
    animationDiv.style.backgroundColor= color1;
    animationText.style.color= color2;
    animationText.style.textShadow = "-6px 0" + color3;
})


// this is the section that is going to make so when a font button is clicked, the font of the animation text changes
var font1 = document.getElementById("fredokaOne");
var font2 = document.getElementById("waterBrush");
var font3 = document.getElementById("righteous");
var font4 = document.getElementById("patrickHand");
var font5 = document.getElementById("pressStart2P");

font1.addEventListener("click", ()=>{
    animationText.style.fontFamily="'Fredoka One', cursive";
});
font2.addEventListener("click", ()=>{
    animationText.style.fontFamily="'Water Brush', cursive";
});
font3.addEventListener("click", ()=>{
    animationText.style.fontFamily="'Righteous', cursive";
});
font4.addEventListener("click", ()=>{
    animationText.style.fontFamily="'Patrick Hand', cursive";
});
font5.addEventListener("click", ()=>{
    animationText.style.fontFamily="'Press Start 2P', cursive";
});


// this is the section makes the animation buttons will activate the animation of the animationText
var animationbtn1 = document.getElementById("animation1Button");
var animationbtn2 = document.getElementById("animation2Button");
var animationbtn3 = document.getElementById("animation3Button");
var animationbtn4 = document.getElementById("animation4Button");
var animationbtnX = document.getElementById("animationXButton");


animationbtn1.addEventListener("click", ()=>{
    animationText.style.animation="animation1 1s infinite";
    console.log("hi");
});
animationbtn2.addEventListener("click", ()=>{
    animationText.style.animation="animation2 0.5s infinite";
});
animationbtn3.addEventListener("click", ()=>{
    animationText.style.animation="animation3 0.5s infinite";
});
animationbtn4.addEventListener("click", ()=>{
    animationText.style.animation="animation4 0.5s infinite";
});
animationbtnX.addEventListener("click", ()=>{
    animationText.style.animation="";
});




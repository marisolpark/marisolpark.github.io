// let btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// btn.onclick = function() {
//     document.getElementById("button").style.backgroundColor="pink";
// }
// btn.type = "clickme";
// btn.name = "Btn";
// document.body.appendChild(btn);

// let btn= document.getElementById("buttonStyle");
// btn.onclick = clickMe()

// function clickMe(){
//     alert("button was clicked");
//     console.log("I was clicked");
// }

var button = document.createElement("button");
button.innerHTML=("Press Me");

button.className="button";

var body= document.getElementsByTagName("body")[0];
body.appendChild(button);




button.addEventListener("click", function(){
   alert("was click");
    // if(body.style.backgroundColor="pink"){
    //     body.style.backgroundColor="black";
    // } 
    // if(body.style.backgroundColor="black"){
    //     body.style.backgroundColor="pink";
    // } 
    body.style.backgroundColor="pink";
});





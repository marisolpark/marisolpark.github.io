//----------------Button------------------------
var button = document.createElement("button");
button.innerHTML=("Click to Read Response");
button.style.backgroundColor="#4976F9";
button.style.width="25%";
button.style.borderRadius="15em";
button.style.textAlign="center";
button.style.fontFamily="'Rubik Glitch', cursive";
button.style.fontSize="250%";
button.style.color="yellow";
button.style.padding="15px";
button.style.border="5px solid yellow";
button.style.alignItems="center";

// Button hover:
button.addEventListener("mouseover", function(){
    button.style.backgroundColor="#3278BD";
    button.style.border="4px solid #00FE7E";
    button.style.color="#00FE7E";
 });

 button.addEventListener("mouseout", function(){
    button.style.backgroundColor="#4976F9";
    button.style.border="5px solid yellow";
    button.style.color="yellow";
 });



//-------------response section-------------------------
// text:
var text1 = document.createElement("p");
text1.innerHTML = ('In the book “The Medium is the Massage” the authors, Marshall McLuhan and Quentin Fiore, argue that the manner in which we communicate information is more important than the content that is communicated since the medium reflects and shapes large parts of the social and cultural context of a society/community. I was intrigued by this argument because I can see how the current mediums of communication, like social media and the digital world in general, have a large impact on how we interact with each other, and with information, and it also affects various aspects of our lives such as our  jobs and education.');
text1.style.fontFamily="'Poppins', sans-serif";
text1.style.paddingRight="20px";
text1.style.paddingLeft="20px";
text1.style.paddingTop="7%";
text1.addEventListener("mouseover", function(){
    text1.style.backgroundColor="red";
    text1.style.borderRadius="10em";
 });
 text1.addEventListener("mouseout", function(){
    text1.style.backgroundColor="transparent";
 });

var text2 = document.createElement("p");
text2.innerHTML = ('I also think that another very interesting point was the idea that all our creations are to some extent an extension of ourselves. For example how electric circuitry is an extension of our nervous system. I had never thought of it in that light so hearing this concept was very intriguing and it left me thinking what other creations could also fall into this category. I was able to think of some such as phones, diaries, paintings, and more. ');
text2.style.fontFamily="'Poppins', sans-serif";
text2.style.paddingRight="20px";
text2.style.paddingLeft="20px";
text2.style.paddingTop="7%";
text2.addEventListener("mouseover", function(){
    text2.style.backgroundColor="green";
    text2.style.borderRadius="10em";
 });
 text2.addEventListener("mouseout", function(){
    text2.style.backgroundColor="transparent";
 });

var text3 = document.createElement("p");
text3.innerHTML = ('The last point that caught my attention was the argument that we sometimes find ourselves in a transitional period where technologies and inventions are advancing and changing yet we still use them for the same older task that no longer fit, so we need to shape or change so that the medium and the tasks are at the same page. I again thought this was also interesting because it made me notice that in this very quickly developing time it feels like we are always in this transition period with new technologies being developed at a very fast pace.');
text3.style.fontFamily="'Poppins', sans-serif";
text3.style.paddingRight="20px";
text3.style.paddingLeft="20px";
text3.style.paddingTop="7%";
text3.addEventListener("mouseover", function(){
    text3.style.backgroundColor="pink";
    text3.style.borderRadius="10em";
 });
 text3.addEventListener("mouseout", function(){
    text3.style.backgroundColor="transparent";
 });


// imgs
var img1= document.createElement("img");
img1.src="response3Img/mirrored.png";

var img2= document.createElement("img");
img2.src="response3Img/electric.png";
img2.style.width="50%";

var img3= document.createElement("img");
img3.src="response3Img/carView.png";

// txt & img position
var imgTxt1 = document.createElement("div");
imgTxt1.appendChild(text1);
imgTxt1.appendChild(img1);
imgTxt1.style.display="flex";
imgTxt1.style.flexDirection="row";
imgTxt1.style.paddingTop="50px";

var imgTxt2 = document.createElement("div");
imgTxt2.appendChild(img2);
imgTxt2.appendChild(text2);
imgTxt2.style.display="flex";
imgTxt2.style.flexDirection="row";
imgTxt2.style.paddingTop="50px";

var imgTxt3 = document.createElement("div");
imgTxt3.appendChild(text3);
imgTxt3.appendChild(img3);
imgTxt3.style.display="flex";
imgTxt3.style.flexDirection="row";
imgTxt3.style.paddingTop="50px";

// response as a whole
var response = document.createElement("div");
response.appendChild(imgTxt1);
response.appendChild(imgTxt2);
response.appendChild(imgTxt3);
response.style.color="white";
response.style.display="none";
response.style.paddingLeft="20px";
response.style.paddingRight="20px";


//--------------title---------------------
var title = document.createElement("h3");
title.innerHTML=('Response to "The Medium is the Massage"');
title.style.display="none";
title.style.textAlign="center";
title.style.fontFamily="'Rubik Glitch', cursive";
title.style.fontSize="50px";
title.style.color="yellow";

//--------------back button-------------------------
var backButton = document.createElement("h3");
backButton.innerHTML=("BACK"); 
backButton.className="hyperLink";
backButton.style.display="none"
backButton.style.textAlign="center";
backButton.style.fontFamily="'Rubik Glitch', cursive";
backButton.style.fontSize="35px";
backButton.style.color="yellow";
backButton.style.textDecoration="none";
backButton.style.fontSize="50px"

// back button hover:
backButton.addEventListener("mouseover", function(){
    backButton.style.textDecoration="underline yellow";
    backButton.style.color="white";
    backButton.style.fontSize="70px"
 });

 backButton.addEventListener("mouseout", function(){
    backButton.style.textDecoration="none";
    backButton.style.color="yellow";
    backButton.style.fontSize="50px"
 });


//---------------body--------------------------
var body= document.getElementsByTagName("body")[0];
body.appendChild(title);
body.appendChild(button);
body.appendChild(response);
body.appendChild(backButton);
body.style.backgroundColor="#B9DCFF";
body.style.height="100vh";
body.style.display="flex";
body.style.flexDirection="column";
body.style.justifyContent="center";
body.style.alignItems="center";

//----------------button action---------------------------
button.addEventListener("click", function(){
    console.log("was click");
    body.style.height="100%";
    body.style.backgroundColor="black";
    button.style.display="none";
    response.style.display="block";
    title.style.display="block";
    backButton.style.display="block";

 });

 backButton.addEventListener("click", function(){
    console.log("was click2");
    body.style.height="100vh";
    body.style.backgroundColor="#B9DCFF";
    button.style.display="block";
    response.style.display="none";
    title.style.display="none";
    backButton.style.display="none";
 });


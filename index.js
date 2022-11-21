//Image 1
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; // Generate randome number for img.
var randomImage = "/dice" + randomNumber1 + ".png"; //add Dice img 1-6.
var source1 = "/images" + randomImage;// Source of Dice Image
var i1 = document.querySelectorAll("img")[0];
i1.setAttribute("src",source1); 

//Image 2
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1; // Generate randome number for img.
var randomImage2 = "/dice" + randomNumber2 + ".png"; //add Dice img 1-6.
var source2 = "/images" + randomImage2;// Source of Dice Image
var i2 = document.querySelectorAll("img")[1];
i2.setAttribute("src",source2);  

// var left = document.querySelectorAll("p")[0];
// var right = document.querySelectorAll("p")[1];

if (randomNumber1 > randomNumber2) {
    var set1 = document.querySelector("h1").innerHTML = "Player 1 Won!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
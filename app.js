// console.log("script is working!")
// var userName = prompt("enter your name")
// alert("welcome to minion world " + userName)

var translateButton = document.querySelector("#button");
var txtInput = document.querySelector("#textarea1")
var translatedText = document.querySelector("#translatedText")

function clicked(){
    translatedText.innerText = "leMinionYou: " + txtInput.value
    
}
translateButton.addEventListener("click", clicked)


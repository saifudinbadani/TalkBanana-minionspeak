// console.log("script is working!")
// var userName = prompt("enter your name")
// alert("welcome to minion world " + userName)

var translateButton = document.querySelector("#button");
var txtInput = document.querySelector("#textarea1")
var translatedText = document.querySelector("#translatedText")
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const encodedUrl = encodeURI(url)

function constructUrl(text){
    return encodedUrl + "?text=" + text
}
function clicked(){
    // translatedText.innerText = "leMinionYou: " + txtInput.value
    var input = txtInput.value
    fetch(constructUrl(input))
    .then(response => response.json())
    .then(json => console.log(json))
    
}

translateButton.addEventListener("click", clicked)


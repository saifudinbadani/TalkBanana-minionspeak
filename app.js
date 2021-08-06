// console.log("script is working!")
// var userName = prompt("enter your name")
// alert("welcome to minion world " + userName)

var translateButton = document.querySelector("#button");
var txtInput = document.querySelector("#textarea1")
var translatedText = document.querySelector("#translatedText")
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructUrl(){
    var mainUrl = url + "?text=" + txtInput
    return mainUrl
}
function clicked(){
    // translatedText.innerText = "leMinionYou: " + txtInput.value
    fetch(constructUrl())
    .then(response => response.json())
    .then(json => console.log(json))
    
}
translateButton.addEventListener("click", clicked)

// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))
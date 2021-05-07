let timer = document.getElementById("timer")
let userInput = document.getElementById("userInput")
let hint = document.getElementById("hint")
let button = document.getElementsByTagName("button")[0]
let count = 10;

timer.innerHTML = count;
button.addEventListener("click",checkPasswoed);
let myVar = setInterval(myTimer,1000);

function myTimer(){
    count--;
    timer.innerHTML = count;
    if(count==0){
        hint.innerHTML = "Game Over!";
        clearInterval(myVar);
    }
}
function checkPasswoed(){
    hint.innerHTML = count;
    if(parseInt(userInput.value)==1234){
        alert("You got it !")
        clearInterval(myVar);
    }else{
        hint.innerHTML = "Try again!";
    }
    userInput.value = null;
}


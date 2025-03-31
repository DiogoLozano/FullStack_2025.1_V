let randomNumber = Math.floor(Math.random() * 100);

function guess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    let resultDiv = document.getElementById("result");
    
    if (userGuess === randomNumber) {
        resultDiv.innerText = "Parabéns! Você acertou!";
        resultDiv.style.setProperty("background-color", "green");
    } 
    
    else {
        resultDiv.innerText = userGuess > randomNumber ? "Muito alto!" : "Muito baixo!";
        resultDiv.style.setProperty("background-color", "red");
    }
}
//    if (userGuess > maxRandomNumber){
//    const maxRandomNumber = 100
//   userGuess > maxRandomNumber
//    resultDiv.innerText = "Número Invalido!";
//    resultDiv.style.setProperty("background-color", "red");

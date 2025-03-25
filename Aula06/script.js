let p1 = document.getElementById("p1").innerHTML;
console.log(p1)

//document.getElementById("p1").innerHTML = "ola mundo"
//exemplo 1
//let nome = prompt("qual é seu nome ?: ");
//let idade = prompt ("qual é a sua idade ?: ");
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;

//let resposta = "ola" + nome + ", seu ano de nascimento é " + ano_nascimento
//document.getElementById("ex1").innerHTML = resposta

//--------------------------------------------------------------------------------

function imprimemensagem(msg){
    console.log(msg);

}

imprimemensagem("mensagem 1")
imprimemensagem("mensagem 2")
imprimemensagem("mensagem 3")

//exemplo de função soma
//function soma (a,b){
//    let c = a + b;
//    console.log("A soma de "+ a + "e" + b +"é igua a " + c)
//    return c;
//}


function ex2(){
    let num = parseInt(document.getElementById("ex2_in").value)
    for(let i = 0; i <= num; i++){
        console.log{i}
    }
    console.log(num);
}

function ex3(){
    let num1 = parseInt(document.getElementById("ex3_1").value);
    let num2 = parseInt(document.getElementById("ex3_2").value);
    let results = soma(num1,num2);
    document.getElementById("ex3_resp").innerHTML =
    "A soma de "+


}



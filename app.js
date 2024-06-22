alert("Boas vindas ao jogo secreto");
let numeroSecreto = 5;
let chute = prompt(" Escolha um número entre 1 e 10");

if(chute == numeroSecreto){
    alert(`Você acertou o número secreto ${numeroSecreto}`);
}else{
    alert(`Você errou, o número secreto é ${numeroSecreto}`)
}
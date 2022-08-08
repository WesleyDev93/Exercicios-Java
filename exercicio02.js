function pulaLinha (){
    document.write ("<br>");
    document.write ("<br>");
}


function mostra (frase){
   document.write (frase);
   pulaLinha();
  
}

// Advinha numero

var numeroPensado = Math.round(Math.random()* 10);
var tentativas = 1;


while (tentativas <= 3) {
var chute = parseInt(prompt("Digite seu chute!"));

if (chute == numeroPensado) {
    mostra ("Voce Acertou , o numero pensado era" + numeroPensado);
    break;
}else {
    mostra ("voce errou");


}
mostra ("fim");
 tentativas++;
}
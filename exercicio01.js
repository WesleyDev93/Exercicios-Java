function pulaLinha (){
     document.write ("<br>");
     document.write ("<br>");
}


function mostra (frase){
    document.write (frase);
    pulaLinha();
   
}
// programa inicial 
//var idadePedro = 28;
//var idadeMarta = 32;
//var idadeJorge =60;
//var idadeBete  =22;


//var totalIdades = (idadePedro + idadeBete + idadeMarta);
//var mediaIdades = totalIdades/4;

//mostra (mediaIdades);




// Melhorando o programa

var totalFamiliares = parseInt(prompt("Qual Quantidade de Familiares?"));
var totalIdades = 0;
var numero = 0;


while (numero <= totalFamiliares){
var idadeFamiliar =  parseInt(prompt("Qual Quantidade de Familiares?"));
totalIdades = totalIdades + idade;
numero++;
}

var mediaIdades = totalIdades/totalFamiliares;
mostra ("A media dos familiares é " + mediaIdades);

mostra ("FIM");
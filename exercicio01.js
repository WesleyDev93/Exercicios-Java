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
var idadePedro = 28;
var idadeMarta = 32;
var idadeJorge =60;
var idadeBete  =22;


var totalIdades = (idadePedro + idadeBete + idadeMarta);
var mediaIdades = totalIdades/4;

mostra (mediaIdades);
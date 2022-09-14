let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
	palavra001 = {
		nome: "IRLANDA",
		categoria: "LUGARES"
	},
	palavra002 = {
		nome: "EQUADOR",
		categoria: "LUGARES"
	},
	palavra003 = {
		nome: "CHILE",
		categoria: "LUGARES"
	},
	palavra004 = {
		nome: "INDONESIA",
		categoria: "LUGARES"
	},
	palavra005 = {
		nome: "MALDIVAS",
		categoria: "LUGARES"
	},
	palavra006 = {
		nome: "GROELANDIA",
		categoria: "LUGARES"
	},
	palavra007 = {
		nome: "UZBEQUISTAO",
		categoria: "LUGARES"
	},
	palavra008 = {
		nome: "AUSTRIA",
		categoria: "LUGARES"
	},
	palavra009 = {
		nome: "HAVAI",
		categoria: "LUGARES"
	},
	palavra010 = {
		nome: "KOPENHAGEN",
		categoria: "LUGARES"
	},
	palavra011 = {
		nnome: "BICICLETA",
		categoria: "TRANSPORTE"
	},
	palavra012 = {
		nome: "LANCHA",
		ccategoria: "TRANSPORTE"
	},
	palavra013 = {
		nome: "NAVIO",
		categoria: "TRANSPORTE"
	},
	palavra014 = {
		nome: "TELEFERICO",
		categoria: "TRANSPORTE"
	},
	palavra015 = {
		nome: "MOTOCICLETA",
		categoria: "TRANSPORTE"
	},
	palavra016 = {
		nome: "BARCO",
		categoria: "TRANSPORTE"
	},
	palavra017 = {
		nome: "AERONAVE",
		categoria: "TRANSPORTE"
	},
	palavra018 = {
		nome: "TREM",
		categoria: "TRANSPORTE"
	},
	palavra019 = {
		nome: "CAIAQUE",
		categoria: "TRANSPORTE"
	},
	palavra020 = {
		nome: "ONIBUS",
		categoria: "TRANSPORTE"
	},
	palavra021 = {
		nome: "SINO",
		categoria: "OBJETOS"
	},
	palavra022 = {
		nome: "CHAVEIRO",
		categoria: "OBJETOS"
	},
	palavra023 = {
		nome: "LAMPADA",
		categoria: "OBJETOS"
	},
	palavra024 = {
		nome: "CORTINA",
		categoria: "OBJETOS"
	},
	palavra025 = {
		nome: "LAPIS",
		categoria: "OBJETOS"
	},
	palavra026 = {
		nome: "APONTADOR",
		categoria: "OBJETOS"
	},
	palavra027 = {
		nome: "ESPADA",
		categoria: "OBJETOS"
	},
	palavra028 = {
		nome: "MONITOR",
		categoria: "OBJETOS"
	},
	palavra029 = {
		nome: "VARAL",
		categoria: "OBJETOS"
	},
	palavra030 = {
		nome: "AGULHA",
		categoria: "OBJETOS"
	},
	palavra031 = {
		nome: "MELANCIA",
		categoria: "ALIMENTOS"
	},
	palavra032 = {
		nome: "CASTANHA",
		categoria: "ALIMENTOS"
	},
	palavra033 = {
		nome: "KIBE",
		categoria: "ALIMENTOS"
	},
	palavra034 = {
		nome: "ALMONDEGA",
		categoria: "ALIMENTOS"
	},
	palavra035 = {
		nome: "SAGU",
		categoria: "ALIMENTOS"
	},
	palavra036 = {
		nome: "CEREJA",
		categoria: "ALIMENTOS"
	},
	palavra037 = {
		nome: "POPOCA",
		categoria: "ALIMENTOS"
	},
	palavra038 = {
		nome: "FILE",
		categoria: "ALIMENTOS"
	},
	palavra039 = {
		nome: "MANGA",
		categoria: "ALIMENTOS"
	},
	palavra040 = {
		nome: "PRETZEL",
		categoria: "ALIMENTOS"
	},
	palavra041 = {
		nome: "MOTOCICLISMO",
		categoria: "ESPORTES"
	},
	palavra042 = {
		nome: "BASEBALL",
		categoria: "ESPORTES"
	},
	palavra043 = {
		nome: "ESGRIMA",
		categoria: "ESPORTES"
	},
	palavra044 = {
		nome: "HIPISMO",
		categoria: "ESPORTES"
	},
	palavra045 = {
		nome: "ATLETISMO",
		categoria: "ESPORTES"
	},
	palavra046 = {
		nome: "ALTEROFILISMO",
		categoria: "ESPORTES"
	},
	palavra047 = {
		nome: "GOLF",
		categoria: "ESPORTES"
	},
	palavra048 = {
		nome: "RALLY",
		categoria: "ESPORTES"
	},
	palavra049 = {
		nome: "BALE",
		categoria: "ESPORTES"
	},
	palavra050 = {
		nome: "REMO",
		categoria: "ESPORTES"
	}
];



criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("Que pena! Continue tentando...", "A palavra secreta era " + palavraSecretaSorteada + " .");
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS! VOCÊ VENCEU!", "Que esperteza, heim!?!");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('../forca/forca11.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('../forca/forca22.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('../forca/forca33.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('../forca/forca44.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('../forca/forca55.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('../forca/forca66.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




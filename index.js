var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("setaesquerda")
var setaDireita = window.document.getElementById("setadireita")

function RolarParaDireita(){
    bruna.style = "display:none"
    samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex margin-top:55px"
}
function RolarParaEsquerda(){
    samantha.style = "display:none"
    bruna.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex margin-top:55px"
}
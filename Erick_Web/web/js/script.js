const adivinarNumero = document.getElementById("adivinarNumero");
const conversorMonetario = document.getElementById("conversorMonetario");
const pokedex = document.getElementById("pokedex");
const calculadora = document.getElementById("calculadora");
const validarCR = document.getElementById("validarCR");

adivinarNumero.addEventListener("click", function(){
    window.open(`./paginas/adivinarNumero/`, "blank_");
});

conversorMonetario.addEventListener("click", function(){
    window.open(`./paginas/conversorMonetario/`, "blank_");
});

pokedex.addEventListener("click", function(){
    window.open(`./paginas/pokedex/`, "blank_");
});

calculadora.addEventListener("click", function(){
    window.open(`./paginas/calculadora/`, "blank_");
});

validarCR.addEventListener("click", function(){
    window.open(`./paginas/validarCR/`, "blank_");
});

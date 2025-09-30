function somar() {
    var numero1 = parseFloat(document.getElementById("primeironumero").value);
    var numero2 = parseFloat(document.getElementById("segundonumero").value);
    var soma = numero1 + numero2;
    // document.getElementById("resultado").innerHTML = 'Resultado' + soma;
    document.getElementById("resultado").innerHTML = `Resultado ${soma}`
};

window.onload = function() {
    document.getElementById("somando").addEventListener("click", somar)
}
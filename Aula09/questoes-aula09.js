function soma() {
  var a, b, soma;
  a = Number(document.getElementById("num01").value);
  b = Number(document.getElementById("num02").value);
  soma = a + b;

  document.getElementById("soma").innerHTML =
    "Resultado: A soma dos 2 valores é: " + soma;
}

function salarioTotal() {
  var nome = document.getElementById("nome").value;
  var valorHora = Number(document.getElementById("valorHora").value);
  var horasTrabalhadas = Number(
    document.getElementById("horasTrabalhadas").value
  );
  var salario = (valorHora * horasTrabalhadas).toFixed(2).replace(".", ",");

  document.getElementById("salario").innerHTML =
    "Resultado: O funcionario " + nome + " vai receber R$ = " + salario;
}

function consumoMedio() {
  var distanciaTotal = Number(document.getElementById("distancia").value);
  var combustivelGasto = Number(
    document.getElementById("combustivel").value
  ).toFixed(1);

  consumo = (distanciaTotal / combustivelGasto).toFixed(3).replace(".", ",");

  document.getElementById("consumoMedio").innerHTML =
    "O automóvel fez o consumo médio de " + consumo + " Km/l.";
}

function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    const resultado10 = valor * 0.1;
    const resultadoPersonalizada = valor * (porcentagem / 100);
    const somaTotal = resultado10 + resultadoPersonalizada;

    document.getElementById('resultado10').innerHTML = `10% de ${valor} é: ${resultado10}`;
    document.getElementById('resultadoPersonalizada').innerHTML = `${porcentagem}% de ${valor} é: ${resultadoPersonalizada}`;
    document.getElementById('somaTotal').innerHTML = `Soma: ${somaTotal}`;
}

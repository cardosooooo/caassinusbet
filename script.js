let saldo = 1000;

function atualizarSaldo() {
    document.getElementById("saldo").textContent = saldo.toFixed(2);
}

function depositar() {
    const valor = parseFloat(document.getElementById("valorDeposito").value);
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        atualizarSaldo();
    }
}

function apostar(valor) {
    if (saldo >= valor) {
        saldo -= valor;
        alert("Aposta realizada com sucesso!");
        atualizarSaldo();
    } else {
        alert("Saldo insuficiente.");
    }
}

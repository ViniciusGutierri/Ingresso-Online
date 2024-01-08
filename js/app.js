function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtde = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtde) || qtde <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    switch (tipoIngresso) {
        case "pista":
            comprarPista(qtde);
            document.getElementById('qtd').value = 0;
          break;
        case "superior":
            comprarSuperior(qtde);
            document.getElementById('qtd').value = 0;
          break;
        default:
            comprarInferior(qtde);
            document.getElementById('qtd').value = 0;
      } 
}

function comprarPista(qtde) {
    let qtdePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtde > qtdePista) {
        alert('Ingressos para Pista INDISPONÍVEIS!');
    } else {
        qtdePista -= qtde;
        document.getElementById('qtd-pista').textContent = qtdePista;
        alert('Compra realizada com SUCESSO!');
    }
}

function comprarSuperior(qtde) {
    let qtdeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtde > qtdeSuperior) {
        alert('Ingressos para Superior INDISPONÍVEIS!');
    } else {
        qtdeSuperior -= qtde;
        document.getElementById('qtd-superior').textContent = qtdeSuperior;
        alert('Compra realizada com SUCESSO!');
    }
}

function comprarInferior(qtde) {
    let qtdeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtde > qtdeInferior) {
        alert('Ingressos para Inferior INDISPONÍVEIS!');
    } else {
        qtdeInferior -= qtde;
        document.getElementById('qtd-inferior').textContent = qtdeInferior;
        alert('Compra realizada com SUCESSO!');
    }
}
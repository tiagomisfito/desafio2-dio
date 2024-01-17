/// APLICATIVO
/*
Crie uma função que recebe como parâmetro a quantidade
de vitórias e derrotas de um jogador, depois disso
retorne o resultado para uma variável, o saldo de
Rankeadas deve ser feito através do cálculo ->
vitórias - derrotas

vitórias menor que 10 é Ferro
entre 11 e 20 é Bronze
entre 21 e 50 é Prata
entre 51 e 80 é Ouro
entre 81 e 90 é Diamante
entre 91 e 100 é Lendário
vitórias maior ou igual a 101 é Imortal

Ao final exibir a mensagem:
"O heroi tem de saldo {saldoVitorias} vitórias e está no nível {nivel}"
*/
function rank(){
    let saldoVitorias = calcularRank(153, 43);

    if (saldoVitorias < 10){
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Ferro.";
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Bronze.";
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Prata.";
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Ouro.";
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Diamante.";
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Lendário.";
    }
    else{
        document.getElementById('resultado').innerHTML =
        "O heroi tem de saldo " + saldoVitorias + " vitórias e está no nível Imortal.";
    }
}

function calcularRank (win, lose){
    return win - lose;
}
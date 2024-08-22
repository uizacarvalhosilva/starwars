// História 
// Sendo um cliente correntista do banco 
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam cartão de Débito ou Crédito

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve informar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque de 701 reais
// Então não deve deduzir do meu saldo
// E deve informar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação


// var saldo = 1000;

// function saque(valor) {
//     if(valor > saldo){
//         console.log("Valor é superior ao saldo");
//         console.log("Seu saldo é de R$"+saldo,"e o valor do saque é de R$"+valor);
//     }else if(valor > 700){
//         console.log("Valor é superior ao máximo permitido por operação");
//         console.log("Seu saldo é de R$"+saldo,"e o valor máximo do saque é de R$700");
//     }else{
//         saldo = saldo - valor;
//         console.log("Seu saldo é de R$"+saldo);
//     }
// }
// saque(701);

//Arrays
var gaveteiro = ['Meias','Gravatas','Documentos','Salgadinhos'];

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader'];

//Imprimir
function imprimir(array){
    array.forEach(function(p){
        console.log(p);
    });
}

//Imprimir com o índice e valor
function imprimir_indice(array){
    for (var i in array){
        console.log("Item na posição "+i,"contém:",array[i]);
    }
}

//Imprimir
function imprimir_todos(array){
    console.log(array);
}

//Inclui na última posição
function adicionar(nome){
    personagens.push(nome);
    this. imprimir_indice(personagens);
}

//Remover o último 
function remover_ultimo(){
    personagens.pop();
    this. imprimir_indice(personagens);
}

//Remover item específico
function remover(nome){
    personagens = personagens.filter(function(p){
        return p !== nome;
    });
    console.log("Exibição após a remoção");
    this. imprimir_indice(personagens);
}

//Selecionar item específico
function selecionar(nome){
    personagens = personagens.filter(function(p){
        return p == nome;
    });
    console.log("Exibição da seleção");
    this. imprimir_indice(personagens);
}

imprimir_indice(gaveteiro);
imprimir_indice(personagens);
adicionar('Teste Adição','Outra Adição','Mais uma Adição');
remover_ultimo();
remover('Luke Skywalker');
selecionar('Mestre Yoda');





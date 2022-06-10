//Objeto com três propriedades

let pessoaInfo = {
    nome:"João",
    idade:20,
    cpf:"39012321232",
    telefone:"82138291312"
}


//Copiando o Array e separando apenas a propriedade informada
let {nome,...copia} = pessoaInfo;

console.log(pessoaInfo);
console.log(copia);
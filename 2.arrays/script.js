let alunas = ["Taiana", "Marcela", "Valenthina", "Valentina", "Bruna Mara", "Celina"];

//console.log("tamanho da array: ", alunas.length )
//console.log(alunas[2]) // aluna na posição [2]
//console.log(alunas[alunas.length - 1]) // a posição da última aluna na lista []


// metodos de arrays - funções pré-prontas
// push() - adiciona ao final 
// pop() - retira no final 
// shift() - retira do inicio
// unshift() - coloca no inicio
// includes() - ve se existe 
// sort() - ordena numerica ou alfabeticamente

/*
alunas.push("Quezia", "Aida"); 
console.log(alunas);
alunas.pop();
console.log(alunas);
alunas.shift();
console.log(alunas);
alunas.unshift("Elis", "Ane Carolina");
console.log(alunas);
console.log(alunas.includes("Marcela"));
alunas.sort(); 
console.log(alunas);
console.log(alunas.length);
*/ 

const comidas = [
    {
        moqueca: {
            quantidade: 0,
            caracteristica: 0,
        },
        pastel: {
            quantidade: 0,
            caracteristica: 0,
        }, 
        salada: {
            quantidade: 0,
            caracteristica: ["gostoso", "saúdavel"],
        },

    }
]

console.log(comidas[0].pastel.quantidade)


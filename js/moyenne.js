


let notes = {
  note1: [12, 13, 14, 9],
  note2: [4, 8, 7, 11],
};


// nombre d'index
 let  tab1 = [...notes.note1, ...notes.note2];

// somme
let somme = 0;
for (let i = 0 ; i < tab1.length ; i++){
   somme += tab1[i];
   
}
console.log(somme);


// calcules de la moyennes
let moynne = somme / tab1.length;
console.log(moynne);




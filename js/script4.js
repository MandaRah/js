// ==========================
// methode tableau : 

let vague22 = ["muriel" , "rina" , "xiamal" , "dieu donné" , "steeve" , "judickael" , "manda" , "christian" , "dally"]
console.log(vague22);

// push():
vague22.push("badoda")
console.log(vague22);

HTMLIn

// unshift():
vague22.unshift("ketaka")
console.log(vague22);

//  pop(): supprime le dernier
vague22.pop()
console.log(vague22);

// shift(): supprime le premier
vague22.shift()
console.log(vague22);

// splice():  permet de séléctionner ,  ajouter ou supprimer un élément ou plusieurs d'un tableau
vague22.splice(2,3) // (index , nb d'élément à supprimer , ajouter )
console.log(vague22);

vague22.splice(3,0,"badoda")
console.log(vague22);

// includes:
console.log(vague22.includes("badoda"));
vague22.includes("badoda") ? console.log("present") :console.log("absent");

// indexOf()
console.log(vague22.indexOf("badoda"));


// join() : convertir tableau en chaine de caractère
let eleves = vague22.join("...")
console.log(eleves);



// split() : convertir chaine de caractère en  tableau
let texte = "bonjour,salut,hello,kaiza"
let tab = texte.split(",")
console.log(tab);


// concat

let tab1 = ["a","b","c"]
let tab2 = [1,2,3,4,5]
let tab3 = tab1.concat(tab2)
console.log(tab3);
// spread-operator
let tab4 = [...tab1, "lita", ...tab2, "badoda"]
console.log(tab4);


// exercice 
let list = ["ovy" , "sosety" , "atody" , "pizza" , "mofogasy"]
/**/


// Math.round()
console.log(Math.round(2.5)); 

// Math.ceil()
console.log(Math.ceil(5.6));

// Math.floor()
console.log(Math.random());

console.log(Math.round(Math.random()*10));  //natao  *10 mba azahona 0 hatram 10


// exemple de random

let elle = ["cherie" , "bb" , "rasoherina" , "sousou" , "pisou"]
let motMagique = ["jtm" , "ily" , "586"]


let elleRandom = elle[Math.round(Math.random()*4)]
let motMagiqueRandom = motMagique[Math.round(Math.random()*2)]

let message = `${elleRandom} , ${motMagiqueRandom} akia an !`
console.log(message);





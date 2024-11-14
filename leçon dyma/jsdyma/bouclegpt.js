// somme des nombres n

let n = prompt("Entrer un nombre que vous voulez");
let somme = 0;
for (let i = 0; i <= n; i++) {
  somme = i + somme;
}
console.log(somme);

// trouver le plus grand nombre

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maxi = "";
for (index in tab) {
  if (index > maxi) {
    maxi = tab[index];
  }
}

console.log(maxi);

// table de multiplication
let table = prompt(
  "Vous shouhaitez faire la multiplication de quelle nombre ? "
);

let multiplication = 0;
let foix = 0;
for (let i = 0; i <= 10; i++) {
  foix = table * i;
  multiplication = `${table} x ${i} = ${foix}`;
  console.log(multiplication);
}

// compter les nombres paires et impaires
let chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let paire = 0;
let impaire = 0;
for (index in chiffres) {
  if (chiffres[index] % 2 == 0) {
    paire++;
  } else {
    impaire++;
  }
}
console.log(paire);
console.log(impaire);

// compter les nombre positif

let nub = [1, -2, 3, -4, 5, -6];
let positif = 0;
let negatif = 0;
for (index in nub) {
  if (nub[index] < 0) {
    positif++;
  } else {
    negatif++;
  }
}
console.log(positif);
console.log(negatif);

// iverser un tableau
let number = [1, 2, 3, 4, 5];
let inverse = number.sort((a, b) => b - a); //callback
console.log(inverse);

// factorielle
// let f = prompt("lequels ?")
// let fact = 1;
// for(let i = 1 ; i <= f ; i++){
//     fact *= i

// }
// console.log(fact);

// élimination doublons

let double = [1, 2, 3, 3, 4, 5, 6];
let uniquenombre = [];
for (let i = 0; i < double.length; i++) {
  let element = double[i];

  if (!uniquenombre.includes(element)) {
    uniquenombre.push(element);
  }
}
console.log(uniquenombre);

// somme des chiffres d'un nombre

let nombre = prompt("Entrez un nombre que vous voulez ");
let sum = 0; // à ne jamais oublier l'initialisation

while (nombre > 0) {
  let chiffre = nombre % 10;

  sum += chiffre; // somme = somme + chiffre

  nombre = Math.floor(nombre / 10);
}
console.log(sum);
// console.log(nombre);

// pyramide d'étoile

let h = prompt("Entrez le nombre de ligne ");

for (let i = 1; i <= h; i++) {
  let ligne = "";

  // les espaces
  for (let j = 1; j <= h - i; j++) {
    ligne += " ";
  }

  // ajout des étoiles
  for (let k = 1; k <= 2 * i - 1; k++) ligne += "*";
  console.log(ligne);
}

// calcule de la moyenne d'une note
let notes = [12, 13, 14, 51, 12];

// sommme de tout les notes
let add = 0;
let moyenne = 0;
for (index in notes) {
  add += notes[index];
  moyenne = add / notes.length;
}
console.log(notes.length);
console.log(add);
console.log(moyenne);

// fusionner deux tableaux
let premier = [0, 1, 2, 3, 4, 5];
let deuxieme = [6, 7, 8, 9, 10];

let deux = [];

for (let i = 0; i <= premier[i]; i++) {
  deux.push(premier[i]);
}

for (let i = 0; i <= deuxieme[i]; i++) {
  deux.push(deuxieme[i]);
}
console.log(deux);

// fibonacci
let f = prompt("Entrez votre nombre");
let a = 0,
  b = 1,
  c;
if (f == 0) {
  console.log(a);
} else if (f == 1) {
  console.log(b);
}
for (let i = 2; i < f; i++) {
  c = a + b;

  console.log(c);

  //  mise a jour
  a = b;
  b = c;
}
// console.log(c);

// étoiles rectangle
let largeur = prompt("largeur");
let hauteur = prompt("hauteur");
let stars = "";

for(let i = 0; i < hauteur; i++) { // boucle pour chaque ligne
  for(let j = 0; j < largeur; j++) { //boucle pour ajouter les étoiles à chaque ligne 
    stars += "*";
  }
  stars += "\n"
}

console.log(stars);

// //opérateur arithmétique
// // + , - , / , * ,%(modulo :reste de division)

// let a = 5, b = 2, c ,d;

// //réaffectation
// c = a + b;
// console.log(c);
// d = a % b;
// console.log(d);

let t = 3,
  v = 8,
  z;
z = t; //3
t = v;
v = z;

console.log(t);
console.log(v);

// operateur d'affectation
let e = 4;
e += 2; // e = e+ 2
// e -= 3 // e = e - 3
console.log(e);

//incrémentation & decrémentation
let i = 0;
console.log(i);
i++;
i++;
i--;
i++;
console.log(i);

//manipulation chaine de caractère :
//concatenation variable (+)
let nom = "Ramandimbisoa";
let prenom = "Manda";
let age = 18;
let message = "Bienvenu" + nom + " " + prenom + ",vous avez " + age + "ans";
console.log(message);

//backtics : ``

let bienvenu = `Bienvenu ${nom} ${prenom} , vous avez ${age} ans`;
console.log(bienvenu);

//exo

// let pseudo = prompt("pseudo ...")
let anarana = prompt("nom");
let fanampiny = prompt("prénom");
let tongasoa = `tongasoa ${anarana} ${fanampiny}`;
console.log(tongasoa);

// ----------------------------------------------------------
let texte = "rakotobeloha";
//compter : legnth
console.log(texte.length);

//decouper : slice (debut,fin)
console.log(texte.slice(2, 6));
console.log(texte.slice(0, 6));
console.log(texte.slice(6, 12));
console.log(texte.slice(5, -1));

//majuscule & minuscule :
let texte1 = "bonjour";
let texte2 = "HELLO";
let maj = texte1.toLocaleUpperCase();
console.log(maj);
let min = texte2.toLowerCase();
console.log(min);

let salut = "sAlut toi";
console.log(salut.charAt(1).toLocaleUpperCase());
console.log(salut[0]);
// charAt(position)
console.log(salut.charAt(0));
//exo salut toi
//Salut Toi
//réponse
let s = salut.toLocaleUpperCase().charAt(0);
let a = salut.toLocaleUpperCase().charAt(1);
let x = salut.toLocaleUpperCase().charAt(6);
let y =


  //correction
  console.log(`${salut[0].toLocaleUpperCase()}${salut.slice(1, 5).toLowerCase()} ${salut[6].toLocaleUpperCase()}${salut.slice(-2)}` );


  //includes : 
  let soratra = "balou"
  console.log(soratra.includes("ou"));

  //replace
  console.log(salut.replace("toi" , "ndrie"));


  //parseInt() ,toString()
  let p = parseInt("40") ,o = 4
  console.log(p-o);
  let string = o.toString()
  console.log(typeof(p));
  console.log(typeof(string));
  
  
       
    
   
  



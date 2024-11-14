//condition :
// if  : si , else if : sinon si , else: sinon

/* 
    if(condition){
    //code
    }
    else if(condition){
    //code
    }else{
    //code
    }

    */

// let age = prompt("Age...")
// if(age < 18){
//     console.log("mineur");
// } else if(age > 18){
//     console.log("majeur");
//     if(age ==  45){
//         console.log("45 ans");
//     }
//     else if(age == 104){
//         console.log("104 ans");
//     }else{
//         console.log("sup à 18");

//     }
// } else{
//     if(age == 18){
//         console.log("cin");

//     }

// }

// exo pseudo : si dans le pseudo il y a le lettre "a" on affiche le pseudo en remplaçant "a" par "*"
// let pseudo = prompt("Entrez votre psuedo")
// if(pseudo.includes("a")){
//     console.log(pseudo.replaceAll("a" , "*"));
// }else{
//     console.log(pseudo);

// }

//exo nombre paire

// let n = prompt("Entrez un nombre")
// if(n % 2 == 0){  
//     console.log("c'est un nombre paire ");

// }else{
//     console.log("ceci est un impaire");

// }

//masculin ou féminin marié ou celibataire

let M = "manda";
let F = "vavy";
let nom = prompt("Entrez votre nom");
let sexe = prompt("M ou F");
if (sexe == "M") {
  let profession = prompt("C'est quoi votre profession");
  console.log(`Bonjour ${nom} Bienvenu mr le ${profession}`);
} else if (sexe == "F") {
  let situation = prompt("Ëtes vous marié ou celiba");
  if ((situation = "marié")) {
    console.log("Félicitation");
  } else if (situation == "celiba") {
    console.log("Dommage");
  }
} else {
  console.log("erreur");
}

//condition ternaire
// age < 18 ? console.log("mineur") : console.log("tsaiko");
// age == 18 && console.log("marina");

//operateur logique :
// /* 

//       == : valeur égal à
//       === : valeur et type égal à
//       != : valeur different de 
//       !== : valeur et type different de 
//        < : inférieur
//        <= : inf ou egal
//        > : sup
//        >= : sup ou egal
//        || : ou 
//        && : et
//        */

let anarana = "rakoto";
let prix = 200;
if (anarana == "badoda" || anarana == "lita") {
  console.log("badoda ou lita");

}else if(anarana == "badoda" && prix == 200){
    console.log("marina");
    
}else{
    console.log("diso");
    
}


exercice admin et superadmin et mpd 
let admin = "ketaka"
let superadmin = "koto"
let psw = "123456" 

let username = prompt("entrez votre nom")
let mot_de_passe = prompt("entrez votre mot de passe")

if((username === admin || username === superadmin) && mot_de_passe === psw){
  console.log("bienvenu");
  
}else if((username === admin || username === superadmin) && mot_de_passe != psw){
  console.log("mot de passe incorrect");

}else if((username != admin || username != superadmin) && mot_de_passe === psw){
  console.log("username incorrect");
}else{
  console.log("contactez l'admin");
  
}
  
  





// boite de dialogue:

// alert("Bonjour");
// confirm("oui ou non");
// prompt("votre pseudo");

//message dans console naviguateur
console.log("Ramandimbisoa");
console.warn("attention");
console.error("misy erreur");


//declaration de variable : 
//let, const
//types : 
//l-string : chaine de caractère

let pseudo = "badoda"
console.log(pseudo) ;
console.log(typeof(pseudo));


//2-number/float:
let age = 18
console.log(age);
console.log(typeof(age));


//3-boolean : true of false
let reponse = true
console.log(reponse);
console.log(typeof(reponse));


//4-undefined
let x 
console.log(x);
console.log(typeof(x));


//5-null : object
let y = null
console.log(y);
console.log(typeof(y));

//6-array (tableau) : oject
let tab = ["badoda" , 124 , true]
console.log(typeof(tab));
console.log(tab);
console.log(tab[2]);


let liste  = ["atody" , "ovy" , ["katsaka" , "badoda"] ,"ananana"]
console.log(liste[1]);
console.log(liste[3]);
console.log (liste[2][1]);


//7-object :
let obj = {
    anarana : "rakoto",
    x : 18,
    data : "data"
}

console.log(obj);
console.log(obj.x);

let data = {
    a : "atody",
    b : "ovy",
    c : ["katsaka" , "badoda"],
    d : "ananana"
}

console.log(data.b);
console.log(data.d);
console.log(data.c[1]);




//fichiers copiena
const gasytech = {
    debutant: [
        {
            formation_debutant:
                {
                    html: "bienvenue sur html", 
                    css: "bienvenue sur css",
                    js: "bienvenue sur js" //affichena
                }
        }
    ],
    avance: {
        front_end:[{
            vueJs: ["bienvenue dans vueJs"],     //affichena
            reactJs:["ReactJs niveau 1","ReactJs niveau 2"]
        }
        ],
        back_end:{
            php:[
                {
                    laravel:"salut laravel",
                    symfony:"salut symfony" //affichena
                }
            ]
        }
    }
}

console.log(gasytech);
console.log(gasytech.debutant[0].formation_debutant.html);
console.log(gasytech.avance.front_end[0].reactJs[0]);
console.log(gasytech.avance.back_end.php[0].symfony);













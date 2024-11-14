//fontion :
// function calcul(a,b){
//     console.log("fonction start");
//     let resultat a + b
//     return resultat 
// }

const Calcul = (a,b)=>{
    console.log("fonction start");
    let resultat = a + b
    return resultat
}
//let anarana = prompt ("anarana...")
let calcul = Calcul(10,2)
console.log(calcul);

let Calcul2 = calcul(4,7)
console.log(calcul2);

let chambre
// console.log(chambre);
let x = true
while(x){
    chambre = prompt("numero de chambre")
    if(chambre.includes(0)){
        alerte("tsy mety 0")
    }else if(isNaN(chambre)){
        alerte("tsy mety string ")
    }else if(chambre.length !=4){
        chambre.length < 4 ? alerte("inf 4")
        :alerte("sup 4")
    }else{
        x = false
    }
}

let couloir = (chambre[2] % 2 == 0) ? 
"droite" : "gauche"
// if(chambre[2] % 2 == 0){
//     couloir = "droite"
// }else{
//     couloir = "gauche"
// }
console.log(`
- chambre n : ${chambre.charAt(0)}
- etage n : ${chambre.charArt(1)}
- couloir : ${couloir}
- porte n : ${chambre[3]
}`);

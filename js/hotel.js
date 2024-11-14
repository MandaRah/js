let chambre = prompt("Entrez");

// vérification que le nombre contient 4chiffres
if (chambre.length === 4) {
  console.log(chambre);

  for (let i = 0; i < chambre.length; i++) {
    let chiffre = parseInt(chambre[i]);

    switch (i) {
      // vérification du position de chaque chiffre
      case 0:
        console.log("numéro de chambre : " + chiffre);
        break;
      case 1:
        console.log(`Au ${chiffre} ème étage`);
        break;
      case 2:
        if (chiffre % 2 === 0) {
          console.log("Couloir à droite");
        } else {
          console.log("Couloir à gauche");
        }
        break;

      case 3:
        console.log(`Porte numéros ${chiffre}`);
        break;
    }
  }
} else {
  console.log("Ce n'est pas le bon nombre");
}


// correction

let chambrecorrection 
let bool = true
while(bool){
  chambrecorrection = prompt("numéro de chambrecorrection")
  if(isNaN(chambrecorrection)){
    alert("tsy misy string")
  }else if(chambrecorrection.length > 4){
    alert("sup à 4")
  }else if(chambrecorrection.length  < 4){
    alert("inf à 4")
  }else if(chambrecorrection.includes(0)){
    alert("tsy mety 0")
  }else if(isNaN(chambrecorrection)){
    alert("tsy mety string")
  }else if(chambrecorrection.length != 4){
    alert("sup 4")
  }else{
    bool = false
  }
}

let couloir = (chambrecorrection[2] % 2 === 0) ? "droite" : "gauche"

console.log(`
  chambrecorrection n : ${chambrecorrection.charAt(0)}
  étage n : ${chambrecorrection.charAt(1)}
  couloir n : ${chambrecorrection.charAt(2)}
  porte n : ${chambrecorrection.charAt(3)}
  `);



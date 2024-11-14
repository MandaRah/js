// ici on ut
function additionner(...nombres) {
    let somme = 0;
    for (let i = 1; i <= nombres ; i++) {
      somme += i;
    }
    console.log(somme);
    
  }

  
  additionner(5); // 99


  function add(...nombres) {
    let resultat = 0;
    for (let i = 0; i < nombres.length; i++) {
      resultat += nombres[i];
    }
    console.log(resultat);
  }
//   avec l'opérateur rest "...nombres" devient un tableau
  add(42, 22, 12, 23); // 99


//   ici c'est avec d'autres paramaètres

function calculer(operateur, ...nombres) {
    let resultat = 0;
    if (operateur === '+') {
      for (let i = 0; i < nombres.length; i++) {
        resultat += nombres[i];
      }
    }
    console.log(resultat);

  }
  
  calculer('+', 42, 22, 12, 23); // 99


  // fontction sans paramètre c'est fortement déconseillé
  function calc() {
    let resultat = 0;
    for (let i = 0; i < arguments.length; i++) {
      resultat += arguments[i];
    }
    console.log(resultat);
  }
  
  calc( 42, 22, 12, 23); // 99
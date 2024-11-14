// condition switch

const age = 19;
switch (age) {
  case 21:
    case 20:
        case 19:

    console.log('Tu peux commencer à boire de l’alcool aux Etats-Unis.');
    break;
  case 18:
    console.log('Tu peux commencer à boire de l’alcool en France.');
    break;
  case 16:
    console.log('Tu peux commencer à boire de l’alcool à Cuba.');
    break;
  case 14:
    console.log('Tu peux commencer à boire de la bière en Allemagne.');
    break;
  default:
    console.log('Rien pour toi cette année.');
}

// pays
const pays = 'France';
switch (pays) {
    case 'France':
    case 'Allemagne':
    case 'Italie':
    case 'Espagne':
        console.log('Tu es européen !');
        break;
    case 'Corée':
    default:
        console.log("Tu n’es pas européen.");
}


/* les boucles 
for (initialisation des compteurs; conditions; incrémentations) {
    //  instructions à exécuter;
    }*/

    // exemple simple
    for (let i = 0; i < 4; i++) {
        console.log(i);
      }

    //   La partie incrémentation est facultative et peut être mise dans le bloc d'instructions :
    for (let i = 0; i < 4;) {
        console.log(i);
        i++;
      }

    //   Même si var peut également être utilisé pour initialiser le compteur, nous recommandons de toujours utiliser let.

// Vous pouvez en effet rencontrer des bugs notamment avec des instructions asynchrones (qui prennent du temps).



// Vous pouvez utiliser plusieurs compteurs :
for (let i = 0, j = 1; i < 4 && j < 3; i++, j++) {
    console.log(i, j);
  }

//   utilisation de break 
/*Comme dans l'instruction switch, l'instruction break permet d'interrompre l'exécution. Ici, elle est utile pour sortir de la boucle dans certaines conditions.

Par exemple, si nous avons un tableau t, nous pouvons rechercher si un élément vaut 25 et arrêter la boucle si c'est le cas :*/

// let 
// for (let i = 0; i < t.length; i++) {
//     if (t[i] === 25) {
//       break;
//     }
//   }


  /*L'instruction continue
L'instruction continue permet de stopper l'exécution des instructions pour l'itération courante. L'exécution est reprise à l'itération suivante.

Autrement dit, elle permet de sauter une partie des instructions dans certains cas :*/


let texte = "";
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    continue;
  }
  texte += i;
}
console.log(texte); // 02
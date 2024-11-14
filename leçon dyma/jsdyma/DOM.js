// API
// Définition
// Utilité : c'est la façon d'interagir entre le JS et notre page dans le navigateur
// Utilité supplémentaire : appliqué sur notre code JavaScript

// ==========================================================================
// Window
// Objet : Window
// C'est là où toutes les fonctions et objets du code JS sont stockés, y compris les APIs
// DOM : c'est la partie visuelle perçue par l'utilisateur
// Liaison de DOM avec les APIs : c'est l'objet "document"
let elem = document.getElementById("element");
elem.style.background = "red";

// [ -- Déconseillé -- ]
// Vous pouvez accéder directement aux éléments en utilisant les ID
// des éléments qui deviennent des propriétés de window :
element2.style.fontSize = "24px";
element2.style.fontWeight = "bold";

// Sélection du premier élément avec la classe "employe"
const paul = document.querySelector(".employe");

// Exemples d'utilisation de closest
// paul.closest(".liste-employes"); // ul
// paul.closest(".employes"); // div

// ================================================================================
// Collection statique et collection live
// Pour illustrer la différence :

// divsLive (en utilisant getElementsByTagName) contiendra tous les div présents dans le DOM, y compris ceux ajoutés après sa définition.
// divsStatiques (en utilisant querySelectorAll) contiendra uniquement les div présents au moment où la ligne de code a été exécutée.

const divsLive = document.getElementsByTagName("div"); // Correction de "getElementTagName"
const divsStatique = document.querySelectorAll("div"); // Correction de "documpent" en "document"

// modifier les éléments de DOM

const p = document.querySelector("p");
const img = document.querySelector("img");
const section = document.querySelector("section");
const a = document.querySelector("a");
const input = document.querySelector("input");


// modification qu'on peut faire sur un paragraphe 
// ChildNodes , nodeValue
console.log(p.childNodes);

p.childNodes[0].nodeValue = "Salut"

// innerHTML et innerText

p.innerHTML = "<strong> Hello </strong>"
p.innerText = "<strong> Hello </strong>"

// ce qu'on peut modifier avec un image 

console.log(img.childNodes);  //ça ne veut pas  dire qu'il n'y a pas de node mais ...
console.log(img.attributes);  //mais on a quand même un nodename = src , alt et tous ...


// changement de contenu de l'image de façon dynamique
// img.attributes[0].nodeValue = "data:image/png;base64,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";

// un proxy : on peut accéder à un autre propriété via un autre propriété 
// img.src = "data:image/png;base64,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";


const maDiv = document.getElementById("ma-div");
console.log(maDiv.outerHTML);


// ========================================

// attributs et propriétés 
/* 1) Il y a des attributs qui font parties du html et y en a qui ne font pas parties */
// Il y a getAttributs , setAttributs et remove attributs 

console.log(img.getAttribute('test'));
console.log(img.setAttribute('test' , 'Salut'));
console.log(img.getAttribute('test'));

// 1)propriétés et 2)attributs 
// 1) fait partie de js et 2) fait partie de html 
// les 2) ne comprends que les chaînes de caractères 

// propriété data-nomDuTypeDeDate c'est un peu équivalent à getAttribute
console.log(input.dataset.username);


// 12/11/2024:
// ce qu'on peut faire sur un input en js  
input.focus();  // métgode focus() : utilisateur peut taper des mots sur celui ci immédiatement sans le cliquer

// blur : c'est l'opposée de focus()
setTimeout(() => {
    input.blur()
}, 1000);


// il 20 type d'input en js ce sont :  text,
// password
// email
// number
// tel
// url
// date
// time
// datetime-local
// month
// week
// color
// checkbox
// radio
// file
// range
// hidden
// submit
// reset
// button

// exemple d'utilisation
input.type = "text";

// input.value = "123";

// expmle d'utilisation de value 
function afficherNom() {
    const nom = document.getElementById("username").value;
    alert(`Bonjour ${nom}`);
}


input.placeholder = "hello";

// input.disabled = true;

// input.disabled = false;

// input.minlength = 5;
// input.maxlength = 8;

input.max = 50;
// La propriété max est utilisée pour définir une valeur maximale autorisée pour certains types de champs input, tels que number, range, date, month, week, et time. En fixant input.max, vous limitez la valeur que l’utilisateur peut entrer ou sélectionner dans le champ, en imposant une limite supérieure.
console.log(input.validity);



// Utilisation de css avec vite 

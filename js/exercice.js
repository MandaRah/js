let list = ["ovy", "sosety", "atody", "pizza", "mofogasy"];
let choix = prompt("Ajouter ou remplacer ou supprimer");
let quoi = prompt("Lequels ?");



// if(choix == "ajouter" && quoi == "ovy") {

//   console.log("Il y est déjà");
//   console.log(list);

// }else if (choix == "ajouter"  &&  quoi != "ovy") {

//   list.push(quoi);
//   console.log(list);

// replace
// }else if(choix == "remplacer"  && quoi == "pizza") {

//   let remplacer = list.replace(list[3] , "carrotte");
//   console.log(list);
        
// }else if(choix == "supprimer" && quoi == "atody"){

//   list.splice(2,1)
//   console.log(list);
    
// }else if(choix == "supprimer" && quoi != "atody"){
//   console.log("tsy misy anzany ao");
  
// }else{
//   console.log("tsy aiko");
  
// }



// correction
let liste = ["pizza", "tacos" , "bananne"]
console.log(list);
let action = prompt("A , S , R")
console.log(action);
if(action == "A"){
  let value = prompt("valeur...")
  if(list.includes(value)){
    alert("efa ao")
  }
}
else{
  liste.push(value)
  console.log(list);
}
else if(action == "S"){
  let value = prompt("valeur ... ")
  if(liste.includes(value)){
    let index = list.indexOf(value)
    liste.splice(index,1)
    console.log(list);
    
  }else{
    alert(`tsy misy ${value} ao !`)
  }
}else if(action == "R"){
  let value = prompt("valeur ...")
  if(list.includes(value)){
    let index = list.indexOf(value)
    let newValue = prompt("nex valeur")
    list[index] = newValue
    console.log(liste);
    
  }else{
    alert(`tsy misy anzany ao`)
  }
}




  



// remplacer
// if (choix == "remplacer" ) {
//   let replace = prompt("lequels souhaitez vous remplacer")
//   console.log("Bonjour");
// }

// supprimer
// if (choix == "supprimer") {
//     let remove ="lequels souhaitez vous supprimer ?"
//   list.pop();
//   console.log(list);
// }

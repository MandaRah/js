let texte = ["crhistian" , "elie" , "badoda" , "ariel"]

let nbrs = [5,3,2,1,4]
// sort()

console.log("croissant");
console.log(texte);
texte.sort((a,b) => a.localeCompare(b))//callback
console.log(texte);

console.log(nbrs);
nbrs.sort((a,b)=>a - b)
console.log((nbrs));


//decroissant
console.log("décroissant");

texte.sort((a,b)=> b.localeCompare(a))
console.log(texte);

nbrs.sort((a,b) => b - a )
console.log(nbrs);

// switch case

let nbr = parseInt(prompt("number : 0,1,2"))
switch (nbr) {
    case 0:
        console.log("0 io ");
        break;
        case 1:
            console.log("1 io");
            break;
            case 2:
                console.log("2 io");
                break;
                default:
                    console.log("efa hoe 0,1,2");
                    break;
}

// boucle :
let tab = ["badoda","lita","koto","ketaka"]
let obj = {
    a: "anana",
    o: "ovy",
    s: "sosety"
}

console.log(obj.o);
console.log(obj["o"]);


// for in
for(index in tab){
    console.log(`index ${index} : ${tab[index]}`);

}
for(prop in obj){
    console.log(prop);
    console.log(obj[prop]);
    console.log(`prop ${prop} : ${obj[prop]}`);
    
}

let list = {
    ovy : 300,
    karoty : 100,
    anana : 7000,
    voatavo : 400,
}

// anana no lafo indrindra : 7000ar
// let maxprix = 0;
// for(prop in list){
//     if(list[prop] > maxprix){
//       maxprix = list[prop]
//       console.log(maxprix);
// }
// }

// méthode 1
let prix = []
for(prop in list){
    prix.push(list[prop])
    console.log(prix);
    
}

console.log(prix);
prix.sort()
console.log(prix);
console.log(prix.legnth);
console.log(prix[prix.length-1]);
let p = prix[prix.length-1];
let a 
for(prop in list){
    if(list[prop] == p){
        a = prop
    }
}
console.log(a);






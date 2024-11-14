// Document Object Model 
// document.getElementById("id")
const badoda = document.getElementById("badoda")
console.log(badoda);

// getElementsByClassName("class")
const pararaphe = document.getElementsByClassName("para")
console.log(pararaphe);console.log(pararaphe[1]);

// getElementsByTagName("balise html")
const baliseHeader = document.
getElementsByTagName("header")
console.log(baliseHeader);

// querySelector() & querySelectorAll()
const section1 = document.querySelector("#section1")
console.log(section1);

const para = document.querySelectorAll("para")
console.log(para);

const baliseH1 = document.querySelector("H1")
console.log(baliseH1);

// creation :
const baliseH2 = document.createElement("H2")
baliseH2.id = "id-h2"
baliseH2.textContent = "balise h2"
console.log(baliseH2);

const box = document.querySelector(".box")
console.log(box);
box.appendChild(baliseH2)


const baliseA = document.createElement("a")
baliseA.className = "lien"
baliseA.textContent = "lien youtube"
baliseA.href = "http://www.youtube.com"
baliseA.target = "blank"
console.log(baliseA);
//box.prepend(baliseA)
box.insertAdjacentElement("beforeend" , baliseA) 


const body = document.querySelector("body")
const section2 = document.createElement("section")
section2.id = "section2"
section2.innerHTML = `
<h2>nos services</h2>
<div class="container">
    <p>texte fotsn</p>
    <button>plus d'info</button>
</div>`
section1.insertAdjacentElement("afterend" , section2)

console.log(section1.innerHTML)

//STYLE :
console.log(getComputedStyle (badoda).fontSize);
badoda.style.color = "red"
badoda.style.fontSize = ""
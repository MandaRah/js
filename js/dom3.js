const badoda = document.querySelector("#badoda")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
console.log(badoda);
// console.log(badoda);

const Fn1 = () =>{
    badoda.style.color = "red"
}
 
btn2.onclick = ()=>{
    badoda.style.color = "blue"
}

btn3.addEventListener("click" ,()=>{
    badoda.style.color = "violet"
})

const btn4 = document.querySelector("#btn4")
btn4.style.background = "green"
let x = true
btn4.addEventListener("click",()=>{
    console.log(x);
    if(x){
        btn4.textContent = "logout"
        btn4.style.background = "green"
    }else{
        btn4.textContent = "login"
        btn4.style.background = "red"
    }
    x = !x
    console.log(x);
})

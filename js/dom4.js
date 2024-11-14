
const btnlogin  = document.querySelector("#login")
const h1 = document.querySelector("body> header > h1")
const btnRegistre = document.getElementById("registre")
const detail = document.getElementById("detail")
const container = document.querySelector(".container")

btnlogin.style.background = "green"
btnlogin.style.color = "white"

let bool  = true 
btnlogin.addEventListener("click",()=>{
    console.log(bool);
    if(bool){
        btnlogin.textContent = "logout"
        btnlogin.style.background = "red"
        h1.textContent = "bye"
    }else{
        btnlogin.textContent = "login"
        btnlogin.style.background = "green"
        h1.textContent = "bienvenue"
    }
    bool =  !bool
    console.log(bool);
})

btnRegistre.addEventListener("click", () => {
    container.innerHTML = `
    <form action="">
    <input type="text" placeholder="nom...">
    <input type=" email" name="" id="" placeholder="email">
    <button id="button"></button>
</form>
        `
})
detail.addEventListener("click",()=>{
    container.innerHTML = `
    <div id=" detail">
<h3>detail</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sit distinctio ipsa eaque totam culpa ad earum vel ex asperiores magni reiciendis, perspiciatis non. Laboriosam voluptas autem sapiente eum atque!</p>

</div>`
})


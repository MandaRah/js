const nom = document.querySelector("#nom")
const btnValider = document.getElementById("valider")
const select = document.querySelector("#select")
const label = document.querySelector("#miova")



// change
let selectValue,selectOption
const getOptionSelect = ()=>{
    selectOption = select.options[select.selectedIndex]

    selectValue = select.value

    label.textContent = selectValue
    
    
    console.log(label);
    console.log(selectOption);
    console.log(selectValue);
    
    
}
getOptionSelect()


select.addEventListener("change",()=>{
    
    getOptionSelect()
})

btnValider.addEventListener("click",()=>{
    console.log(nom.value);
    console.log(`select : ${selectOption.textContent}
    prix : ${selectValue} Ar`);
    
    
})


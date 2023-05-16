//localStorage.setItem("age","30")
//localStorage.setItem("name","domenic")
//console.log(localStorage.getItem("age"))
/*
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    console.log(localStorage.setItem("name",x))

  }
*/
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = inpValue.value;
    console.log(key);
    console.log(value);

    if (key && value){
        localStorage.setItem(key, value);
        location.reload()
    }
    /*
    for (let i = 0;i < localStorage.length;i++){
        //const key = localStorage.key(i);
        const value = localStorage[i].getItem("key");
        lsOutput.innerHTML += value+'<br/>';
    }
    */
    console.log(localStorage.key(1))
    
};
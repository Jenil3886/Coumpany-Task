// let modeBtn = document.querySelector("#mode")
let modeBtn = document.getElementById("mode")
let body = document.querySelector("body")
let currMode = "light" // dark

modeBtn.addEventListener("click" , ()=>{
    if(currMode === "light"){
        currMode = "dark"
        // document.querySelector("body").style.backgroundColor="black"
        body.classList.add("dark")     // help to class
        body.classList.remove("light")
    }else{
        currMode = "light"
        // document.querySelector("body").style.backgroundColor="white"
        body.classList.add("light")   // help to class
        body.classList.remove("dark")
    }

    console.log(currMode)
})


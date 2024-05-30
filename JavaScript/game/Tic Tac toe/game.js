let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let newGameBtn = document.querySelector("#new-btn")

let turnO = true;  // playerX , palyerO                                                               // stap 1
                                                                                                      
// 2D array                                                                                            
const winPatterns = [                                                                                 //
    [0, 1, 2],                                                                                        // 
    [0, 3, 6],                                                                                        //
    [0, 4, 8],                                                                                        // Stap 2
    [1, 4, 7],                                                                                        //
    [2, 5, 8],                                                                                        //
    [2, 4, 6],                                                                                        //
    [3, 4, 5],                                                                                        // 
    [6, 7, 8],                                                                                        // 
];                                                                                                    

const resetGame = () => {
    turnO = true
    enbleBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{           // Stap 3                
       if(turnO === true){
        //playerO
        box.innerHTML = "O"
        turnO = false
    }else{
        //playerX
        box.innerHTML = "X"
        turnO = true
       }
       box.disabled = true

       checkWinner();
    })
})

const disableBoxes = () => {                                                       // Stap 6
    for (let box of boxes){
        box.disabled = true
    }
}
const enbleBoxes = () => {
    for (let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (Winner) => {                                                      // Stap 5
   msg.innerText=`Congratulation Winner is ${Winner}`
   msgContainer.classList.remove("hide")
   disableBoxes()
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;             
        let pos2Val = boxes[pattern[1]].innerText;                                       // Stap 4
        let pos3Val = boxes[pattern[2]].innerText;             

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
            }
        }
    }
}

newGameBtn.addEventListener("click" , resetGame)
resetBtn.addEventListener("click" , resetGame)
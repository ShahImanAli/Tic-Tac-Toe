let currentPlayer = "X"
let array = Array(9).fill(null)

function handleClick(e) {
    let id = Number(e.id);
    if(array[id]!== null) return;
    array[id] = currentPlayer;
    
    e.innerHTML = currentPlayer;
    checkWinner();
    if(currentPlayer === "X") {
        currentPlayer = "O"

    }else {
        currentPlayer = "X"
    }

}

function checkWinner() {
    if(
        (array[0] === array[1] && array[1] === array[2] && array[0]!== null) 
        || (array[3] === array[4] && array[4] === array[5] && array[3]!== null)
        || (array[6] === array[7] && array[7] === array[8] && array[6]!== null)
        || (array[0] === array[3] && array[3] === array[6] && array[0]!== null)
        || (array[1] === array[4] && array[4] === array[7] && array[1]!== null)
        || (array[2] === array[5] && array[5] === array[8] && array[2]!== null)
        || (array[0] === array[4] && array[4] === array[8] && array[0]!== null)
        || (array[2] === array[4] && array[4] === array[6] && array[2]!== null)

     
    ){
        document.write(`Player ${currentPlayer} wins!`)
    }
    


    // if(!array.some((e) => e === null)){
    //     document.write("It's a draw!")
    //     return
    
    //  }

    let itsdraw = true;
    for(let i = 0; i < array.length; i++){
        if(array[i] === null){
            itsdraw = false;
            break;
        }
    }

    if(itsdraw){
        document.write("It's a draw!")
        return
    }



}


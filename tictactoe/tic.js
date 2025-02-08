
const cells = document.querySelectorAll('.cell')
let turn = 'X'
let statuss = document.querySelector('h2')

const winning = [
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
]


let options = ["", "", "", "", "", "", "", "", ""]


cells.forEach((cell) => {
    cell.addEventListener('click', () => {

        if (!cell.innerText) {
            if (turn == 'X') {
                cell.innerText = 'X'
                const squareNum = cell.getAttribute('cellIndex')
                options[squareNum - 1] = turn
                checkWin(turn)
                

            } else {
                cell.innerText = 'O'
                const squareNum = cell.getAttribute('cellIndex')
                options[squareNum - 1] = turn
                checkWin(turn)
                

            }
        }


    })
} )


function checkWin (player) {
    for (let win of winning) {
        if (options[win[0] - 1] == player && options[win[1] - 1] == player && options[win[2] - 1] == player) {
            statuss.innerText = `${player} Wins!`
            return
        }
    }

     
    if (turn == 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }

    statuss.innerText = `Status: ${turn}'s Turn`
}
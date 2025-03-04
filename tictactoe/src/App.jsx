import { useState } from 'react'
import './App.css'
import Cell from './cell'

function App() {

 
  const [turn, setTurn] = useState('X')
  const [gameEnd, setGameEnd] = useState(false)
  const [gameStatus, setGameStatus]  = useState("X's Turn")
  const [row, setRow] = useState(1)
  const [gameStart, setGameStart] = useState(false)
  const [cellArray, setCellArray] = useState([])

  const handleClick = (cellNum) => {

    let winCon = [];

    for (let i = 0; i < row; i++) {
      let arr = [];
      for (let j = 0; j < row; j++) { 
        arr.push(i * row + j); 
      }
      winCon.push(arr);
    }

    // Column win conditions
    for (let i = 0; i < row; i++) {
      let arr = [];
      for (let j = 0; j < row; j++) {
        arr.push(j * row + i);  // Corrected index calculation for columns
      }
      winCon.push(arr);
    }

    let arr = [];
    for (let i = 0; i < row; i++) {
      arr.push(i * (row + 1));  // Diagonal: increment by (row + 1) to move diagonally
    }
    winCon.push(arr);

    // Diagonal win condition (top-right to bottom-left)
    arr = [];
    for (let i = 1; i <= row; i++) {
      arr.push(i * (row - 1));  // Diagonal: increment by (row - 1) to move diagonally in reverse
    }
    winCon.push(arr);




  function checkWin(turns) {
    for (let condition of winCon) {
        let isWin = true
        for (let i = 0; i < row; i++) {
          if (cellArray[condition[i]] != turns) {
            isWin = false
            break
          }
        }
        if (isWin) {
          return true
        }
    }
    return false
  }


    if (cellArray[cellNum] == "" && gameEnd == false) {
        cellArray[cellNum] = turn
        const newArray = [...cellArray]
        setCellArray(newArray)


        if (checkWin(turn)) {
          setGameEnd(true)

          setGameStatus(`${turn} Wins`)
        } else {
          const nextTurn = turn == 'X' ? 'O' : 'X'
          setTurn(nextTurn)
          setGameStatus(`${nextTurn}'s Turn`)
        }

    }
  }

  const handleStart = () => {
    setGameStart(true)
    setCellArray(Array(parseInt(row*row, 10)).fill(""))
  }
  

  return (
    <>

    {!gameStart &&
      <>
        
          <input type='number' onChange={(e) => setRow(e.target.value)}></input>
          <button onClick={handleStart}>Start</button>
          
      </>}
      
      

      {gameStart && <div className='gameGrid' style={{gridTemplateColumns: `repeat(${row}, 50px)`}}>
        {cellArray.map((value, index) => <Cell key={index} value={value} onClick={() => handleClick(index)} />)}
        <p>{gameStatus}</p>
      </div>}
    </>
   
    
  
  )
}

export default App

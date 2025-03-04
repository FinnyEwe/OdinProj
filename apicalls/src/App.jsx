import { useState } from 'react'
import TodoItem from './todoItem'
import './App.css'

function App() {
  
  const [entry, setEntry] = useState('')
  const [itemList, setItemList] = useState([])

  const handleRemove = (index) => {
    const newList = itemList.filter((_, i) => i !== index)
    setItemList(newList)
  }
  return (
    <>
        <h1>Todo List</h1>
        <div className='inputDiv'>
          <input type='text' placeholder='Enter a Task...' onChange={(e) => setEntry(e.target.value)} value={entry}></input>
          <button className='addButton' onClick={() => {
            setItemList([...itemList, entry])
            setEntry('')
          }}>Add</button>
        </div>
        
      <div className='todoContainer'>
        {itemList.map((value, index) => <TodoItem text={value} key={index} onClick={() => handleRemove(index)}/>)}
      </div>
    </>
  )
}

export default App

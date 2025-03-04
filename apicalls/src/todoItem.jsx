import React from "react"
import './todoItem.css'

export default function TodoItem({ text, onClick }) {
    

    return (
        <>
        <div className="itemContainer">
            <span>{text}</span>
            <button className='remove' onClick={onClick}>Remove</button>
        </div>
        <br></br>
        </>
        
    )
}
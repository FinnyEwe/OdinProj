import React  from "react";
import './cell.css'

export default function Cell({ value, onClick }) {

    return (
        <div className="cells" onClick={onClick}>
            {value}
        </div>
    )
}
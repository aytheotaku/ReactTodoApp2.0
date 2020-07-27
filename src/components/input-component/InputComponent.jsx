import React from 'react'
import './input-component.css'

function InputComponent({stateContent, handleChange, handleAddClick, todoLabel, labelStyle}) {

    return (
        <div className="input-field">
            <input className="pulse white-text" type="text" value={stateContent} id="todo" onChange={handleChange}/>
            <label htmlFor="todo" className="active">{todoLabel}</label>
            <div className="right-align">
                <button onClick={handleAddClick} className="btn-floating purple lighten-2 pulse"><i className="material-icons">done</i></button>
            </div>
        </div>
    )
}



export default InputComponent

import React from "react"
import './Input.css'


const Input = props => {
    return (
        <div className="input">
            <label htmlFor={props.id}>{props.title}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.onChange}    />
        <p class ="error-message"> {props.error}</p>
        </div>
    )
}

export default Input 
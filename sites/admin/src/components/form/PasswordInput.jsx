import './Input.css'
import React from 'react'

export default function App(props) {
    return (
        <>
            <label>{props.label}</label>
            <input type="password" value={props.value} onChange={props.setValue} />
        </>
    )
}

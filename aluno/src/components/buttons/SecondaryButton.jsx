import './SecondaryButton.css'
import React from 'react'

export default function App(props) {
    return(
        <button className='secondaryButton' onClick={props.action}>{props.text}</button>
    )
}

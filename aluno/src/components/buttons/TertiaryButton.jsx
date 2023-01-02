import './TertiaryButton.css'
import React from 'react'

export default function App(props) {
    return(
        <button className='tertiaryButton' onClick={props.action}>{props.text}</button>
    )
}

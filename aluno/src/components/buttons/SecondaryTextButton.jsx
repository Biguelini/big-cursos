import './SecondaryTextButton.css'
import React from 'react'

export default function App(props) {
    return(
        <button className='secondaryTextButton' onClick={props.action}>{props.text}</button>
    )
}

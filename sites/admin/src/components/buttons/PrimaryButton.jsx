import './PrimaryButton.css'
import React from 'react'

export default function App(props) {
    return(
        <button className='primaryButton' onClick={props.action}>{props.text}</button>
    )
}

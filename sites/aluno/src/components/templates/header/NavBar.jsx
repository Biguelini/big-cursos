import './NavBar.css'
import SecondaryButton from '../../buttons/SecondaryButton'
import SecondaryTextButton from '../../buttons/SecondaryTextButton'
import React from 'react'

export default function App(props) {
    return(
        <nav className="navBar">
            <SecondaryTextButton text="Login"></SecondaryTextButton>
            <SecondaryButton text="Inscreva-se"></SecondaryButton>
        </nav>
    )
}

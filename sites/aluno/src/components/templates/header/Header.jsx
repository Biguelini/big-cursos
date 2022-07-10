import './Header.css'
import NavBar from './NavBar'
import Logo from './Logo'
import React from 'react'

export default function App(props) {
    return (
        <header className="header">
            <Logo></Logo>
            <NavBar></NavBar>
        </header>
    )
}

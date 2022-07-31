import './NavBar.css'
import SecondaryButton from '../../buttons/SecondaryButton'
import SecondaryTextButton from '../../buttons/SecondaryTextButton'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function App(props) {
    let navigate = useNavigate()
    const routeChange = () => {
        let path = `/login`
        navigate(path)
    }
    return (
        <nav className="navBar">
            <SecondaryTextButton
                text="Login"
                action={routeChange}
            ></SecondaryTextButton>
            <SecondaryButton text="Inscreva-se"></SecondaryButton>
        </nav>
    )
}

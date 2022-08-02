import './NavBar.css'
import SecondaryButton from '../../buttons/SecondaryButton'
import SecondaryTextButton from '../../buttons/SecondaryTextButton'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function App(props) {
    let navigate = useNavigate()
    const goLogin = () => {
        let path = `/login`
        navigate(path)
    }
    const goRegister = () => {
        let path = `/cadastro`
        navigate(path)
    }
    const logout = () => {
        sessionStorage.clear()
        return goLogin()
    }
    const token = sessionStorage.getItem('token')
    if (!token) {
        return (
            <nav className="navBar">
                <SecondaryTextButton
                    text="Login"
                    action={goLogin}
                ></SecondaryTextButton>
                <SecondaryButton text="Inscreva-se" action={goRegister}></SecondaryButton>
            </nav>
        )
    }
    return (
        <nav className="navBar">
            <SecondaryTextButton
                text="Logado"
            ></SecondaryTextButton>
            <SecondaryButton text="Sair" action={logout}></SecondaryButton>
        </nav>
    )
}

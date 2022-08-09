import './NavBar.css'
import SecondaryButton from '../../buttons/SecondaryButton'
import SecondaryTextButton from '../../buttons/SecondaryTextButton'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../context/auth'

export default function App(props) {
    const { logout, authenticated } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }
    let navigate = useNavigate()
    const goLogin = () => {
        let path = `/login`
        navigate(path)
    }
    const goRegister = () => {
        let path = `/cadastro`
        navigate(path)
    }
    const goCourse = () => {
        let path = `/cursos`
        navigate(path)
    }
    if(authenticated){
        return (
            <nav className="navBar">
                <SecondaryTextButton
                    text="Logado"
                    action={goCourse}
                ></SecondaryTextButton>
                <SecondaryButton
                    text="Sair"
                    action={handleLogout}
                ></SecondaryButton>
                
            </nav>
        )
    }
    return (
        <nav className="navBar">
            <SecondaryTextButton
                text="Login"
                action={goLogin}
            ></SecondaryTextButton>
            <SecondaryButton
                text="Inscreva-se"
                action={goRegister}
            ></SecondaryButton>
        </nav>
    )
}

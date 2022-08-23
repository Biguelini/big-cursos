import './NavBar.css'
import SecondaryButton from '../../buttons/SecondaryButton'
import SecondaryTextButton from '../../buttons/SecondaryTextButton'
import { useNavigate } from 'react-router-dom'

export default function App(props) {

    let navigate = useNavigate()
    const goLogin = () => {
        let path = `/create`
        navigate(path)
    }
    const backHome = () => {
        let path = `/`
        navigate(path)
    }


    return (
        <nav className="navBar">
            <SecondaryTextButton
                text="Início"
                action={backHome}
            ></SecondaryTextButton>
            <SecondaryButton
                text="Criar"
                action={goLogin}
            ></SecondaryButton>
        </nav>
    )
}

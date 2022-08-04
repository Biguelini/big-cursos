import { useState, useContext } from 'react'

import { AuthContext } from '../context/auth'
import PrimaryButton from '../components/buttons/PrimaryButton'
import './Login.css'
import TextInput from '../components/form/TextInput'
import PasswordInput from '../components/form/PasswordInput'

export default function Index() {
    const {login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <TextInput
                    label="Digite seu email: "
                    value={email}
                    setValue={handleEmail}
                />
                <PasswordInput
                    label="Digite sua senha: "
                    value={password}
                    setValue={handlePassword}
                />

                <PrimaryButton text="Login" action={handleSubmit} />
            </form>
        </div>
    )
}

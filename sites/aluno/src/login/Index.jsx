import { useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/auth'
import PrimaryButton from '../components/buttons/PrimaryButton'
import './Login.css'
// import axios from 'axios'

export default function Index() {
    const { authenticated, login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', {email, password})
        login(email, password)
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <label>Digite seu email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label>Digite sua senha:</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <PrimaryButton text="Login" action={handleSubmit} />
            </form>
        </div>
    )
}

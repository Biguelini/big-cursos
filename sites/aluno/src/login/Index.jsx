import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/buttons/PrimaryButton'
import './Login.css'
import axios from 'axios'

export default function Index() {
    let navigate = useNavigate()
    const redirect = (path) => {
        navigate(path)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3030/users/login', {
                email: email,
                password: password,
            })
            .then(function (response) {
                sessionStorage.setItem('token', response.data.token)
                return redirect('/cursos')
            })
            .catch(function (error) {
                alert('Email ou senha incorretos')
                console.log(error)
            })
        setEmail('')
        setPassword('')
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
                <PrimaryButton text="Login" action={login} />
            </form>
        </div>
    )
}

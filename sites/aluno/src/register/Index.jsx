import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/buttons/PrimaryButton'
import './Register.css'
import axios from 'axios'

export default function Index() {
    let navigate = useNavigate()
    const redirect = (path) => {
        navigate(path)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const login = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3030/users', {
                email: email,
                password: password,
                name: name,
            })
            .then(function (response) {
                sessionStorage.setItem('token', response.data.token)
                return redirect('/cursos')
            })
            .catch(function (error) {
                alert('Informações inválidas')
                console.log(error)
            })
        setEmail('')
        setPassword('')
        setName('')
    }
    return (
        <div className="register">
            <h1>Cadastro</h1>
            <form>
                <label>Digite seu nome:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
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
                <PrimaryButton text="Cadastrar" action={login} />
            </form>
        </div>
    )
}

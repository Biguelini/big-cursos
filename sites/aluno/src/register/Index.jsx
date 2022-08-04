import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/buttons/PrimaryButton'
import './Register.css'
import TextInput from '../components/form/TextInput'
import PasswordInput from '../components/form/PasswordInput'
import { createUser } from '../services/api'
import { AuthContext } from '../context/auth'
export default function Index() {
    const { login } = useContext(AuthContext)
    let navigate = useNavigate()
    const redirect = (path) => {
        navigate(path)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const register = async (e) => {
        e.preventDefault()
        const response = await createUser(name, email, password)
            .then(async function (response) {
                login(email, password)
                return redirect('/cursos')
            })
            .catch(function (error) {
                alert('Informações inválidas')
                return error
            })
        console.log(response)
        setEmail('')
        setPassword('')
        setName('')
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="register">
            <h1>Cadastro</h1>
            <form>
                <TextInput
                    label="Digite seu nome: "
                    value={name}
                    setValue={handleName}
                />
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
                <PrimaryButton text="Cadastrar" action={register} />
            </form>
        </div>
    )
}

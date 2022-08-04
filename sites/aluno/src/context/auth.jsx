import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createSession, verifyUser } from '../services/api'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function tokenVerification() {
            const recoveredToken = localStorage.getItem('token')
            const recoveredEmail = localStorage.getItem('email')
            if (recoveredToken && recoveredEmail) {
                verifyUser(recoveredEmail, recoveredToken)
                    .then(function (response) {
                        setToken(recoveredToken)
                        setUser(recoveredEmail)
                    })
                    .catch(function (error) {
                        console.log(error)
                        setToken(null)
                        setUser(null)
                    })
            } else {
                setToken(null)
                setUser(null)
            }
            setLoading(false)
        }
        tokenVerification()
    }, [token])
    const login = async (email, password) => {
        createSession(email, password)
            .then(function (response) {
                console.log('login', response)
                const token = response.data.token
                const user = response.data.email
                localStorage.setItem('token', token)
                localStorage.setItem('email', user)
                setToken(token)
                setUser(user)
                navigate('/cursos')
                return document.location.reload(true)
            })
            .catch(function (error) {
                return alert('Email ou senha incorretos')
            })
    }
    const logout = () => {
        console.log('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setToken(null)
        setUser(null)
        navigate('/')
        return document.location.reload(true)
    }
    return (
        <AuthContext.Provider
            value={{ authenticated: !!token, token, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

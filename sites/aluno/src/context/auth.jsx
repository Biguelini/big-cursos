import axios from 'axios'
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createSession } from '../services/api'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function tokenVerification() {
            const recoveredToken = localStorage.getItem('token')
            if (recoveredToken) {
                const response = await axios.post('http://localhost:3030/users/auth', {
                    token: recoveredToken,
                  })
                  .then(function (response) {
                    setToken(recoveredToken)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            } else {
                setToken(null)
            }
            setLoading(false)
        }
        tokenVerification()
    }, [token])
    const login = async (email, password) => {
        const response = await createSession(email, password)
        console.log('login', response)
        const token = response.data.token
        localStorage.setItem('token', token)
        setToken(token)
        navigate('/cursos')
        return document.location.reload(true)
    }
    const logout = () => {
        console.log('logout')
        localStorage.removeItem('token')
        setToken(null)
        return navigate('/')
    }
    return (
        <AuthContext.Provider
            value={{ authenticated: !!token, token, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from '../landing/Index'
import Login from '../login/Index'
import Courses from '../courses/Index'
import Register from '../register/Index'
import CoursePage from '../courses/CoursePage'

import { AuthProvider, AuthContext } from '../context/auth'

export default function RouteApps(props) {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)
        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated && !loading) {
            return <Navigate to="/login" />
        }
        return children
    }
    const Public = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)
        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (authenticated && !loading) {
            return <Navigate to="/cursos" />
        }
        return children
    }
    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Landing />} />

                <Route
                    path="/login"
                    element={
                        <Public>
                            <Login />
                        </Public>
                    }
                />
                <Route
                    path="/cadastro"
                    element={
                        <Public>
                            <Register />
                        </Public>
                    }
                />

                <Route
                    exact
                    path="/cursos"
                    element={
                        <Private>
                            <Courses />
                        </Private>
                    }
                />
                <Route
                    path="/cursos/:idCourse/:idVideo"
                    element={
                        <Private>
                            <CoursePage />
                        </Private>
                    }
                />

                <Route path="*" element={<Landing />} />
            </Routes>
        </AuthProvider>
    )
}

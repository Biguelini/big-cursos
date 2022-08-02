import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from '../landing/Index'
import Login from '../login/Index'
import Courses from '../courses/Index'
import Register from '../register/Index'

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" replace />
    }
    return children
}
const JustOpenRoute = ({ children }) => {
    const token = sessionStorage.getItem('token')

    if (token) {
        return <Navigate to="/cursos" replace />
    }
    return children
}

export default function RouteApps(props) {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <JustOpenRoute>
                        <Landing />
                    </JustOpenRoute>
                }
            />
            <Route
                exact
                path="/login"
                element={
                    <JustOpenRoute>
                        <Login />
                    </JustOpenRoute>
                }
            />
            <Route
                exact
                path="/cadastro"
                element={
                    <JustOpenRoute>
                        <Register />
                    </JustOpenRoute>
                }
            />

            <Route
                exact
                path="/cursos"
                element={
                    <ProtectedRoute>
                        <Courses />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Landing />} />
        </Routes>
    )
}

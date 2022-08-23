import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function App(props) {
    return (
        <Link to="/" className="logo">
            BigCursos
        </Link>
    )
}

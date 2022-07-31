import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../landing/Index'
import Login from '../login/Index'

export default function RouteApps(props) {
    return <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />

        <Route path="*" element={<Landing />} />
    </Routes>
}

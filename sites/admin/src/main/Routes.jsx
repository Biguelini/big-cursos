import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../home/Index'
import { Create } from '../create/Index'
import { Course } from '../course/Index'
export default function RouteApps(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="*" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/curso/:idCourse" element={<Course />} />
        </Routes>
    )
}

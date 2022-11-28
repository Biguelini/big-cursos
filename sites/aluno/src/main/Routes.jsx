import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../landing/Index'

export default function RouteApps(props) {
    
    return (
            <Routes>
                <Route exact path="/" element={<Landing />} />


                <Route path="*" element={<Landing />} />
            </Routes>
    )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import NotFound from '../pages/NotFound'
import Posts from '../pages/Posts'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter

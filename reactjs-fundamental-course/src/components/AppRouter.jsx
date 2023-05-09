import React from 'react'
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import { publicRoutes, privateRoutes } from '../router'
import Loader from './UI/loader/Loader'

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} match={route.exact} />
            ))}
            <Route path="/*" element={<Navigate to="/" replace />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} match={route.exact} />
            ))}
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}

export default AppRouter

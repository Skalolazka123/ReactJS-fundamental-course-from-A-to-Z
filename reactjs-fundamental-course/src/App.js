import React, { useEffect, useState } from 'react'

import './styles/App.css'

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { AuthContext } from './context'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])
    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth: setIsAuth,
                isLoading,
            }}
        >
            <BrowserRouter>
                {isAuth ? <Navbar /> : null}
                <div className="App">
                    <AppRouter />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App

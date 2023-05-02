import React from 'react'

import './styles/App.css'

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div class="App">
                <AppRouter />
            </div>
        </BrowserRouter>
    )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>404 - Page not found</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/about" class="button">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    )
}

export default NotFound

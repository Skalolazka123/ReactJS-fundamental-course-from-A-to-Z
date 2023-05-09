import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <div className="page-nav">
                <Link className="page-nav__link" to="/page1">
                    1. Функциональный компонент + Классовый компонент
                </Link>
                <Link className="page-nav__link" to="/page2">
                    2. Стили CSS+Props+списки
                </Link>
                <Link className="page-nav__link" to="/page3">
                    3. Форма создания поста. Управляемые и неуправляемые компоненты
                </Link>
                <Link className="page-nav__link" to="/page4">
                    4. Сортировка+поиск+фильтрация+модальное окно+анимации+кастомные хуки
                </Link>
                <Link className="page-nav__link" to="/page5">
                    5. Работа с сервером+useEffect+Loader+useFetchng+pagination
                </Link>
            </div>
        </div>
    )
}

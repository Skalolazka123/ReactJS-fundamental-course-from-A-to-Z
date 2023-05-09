import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'
import classes from './Navbar.module.css'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.navbar}>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className={classes.navbarLinks}>
                <Link className={classes.navbarLink} to="/">
                    Главная
                </Link>
                <Link className={classes.navbarLink} to="/page1">
                    1 Глава
                </Link>
                <Link className={classes.navbarLink} to="/page2">
                    2 Глава
                </Link>
                <Link className={classes.navbarLink} to="/page3">
                    3 Глава
                </Link>
                <Link className={classes.navbarLink} to="/page4">
                    4 Глава
                </Link>
                <Link className={classes.navbarLink} to="/page5">
                    5 Глава
                </Link>
            </div>
        </div>
    )
}

export default Navbar

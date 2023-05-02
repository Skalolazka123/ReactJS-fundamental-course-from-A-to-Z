import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbarLinks}>
                <Link className={classes.navbarLink} to="/about">
                    О сайте
                </Link>
                <Link className={classes.navbarLink} to="/posts">
                    Посты
                </Link>
            </div>
        </div>
    )
}

export default Navbar

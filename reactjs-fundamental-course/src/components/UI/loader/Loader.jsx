import classes from './Loader.module.css'
const Loader = () => {
    return (
        <svg className={classes.loader}>
            <circle cx="25" cy="25" r="25"></circle>
        </svg>
    )
}

export default Loader

import classes from './MyModal.module.css'
const MyModal = ({ children, visible, setVisible }) => {
    const rootClasses = [classes.myModal]
    if (visible == 'error') {
        rootClasses.push(classes.error)
    }
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <div className={classes.myModalError}>
                    Введите заголовок и текст статьи
                </div>
            </div>
        </div>
    )
}

export default MyModal

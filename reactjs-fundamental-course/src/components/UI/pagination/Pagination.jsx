import classes from './Pagination.module.css'
import React from 'react'
import { usePagesArray } from '../../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
    const pagesArray = usePagesArray(totalPages)
    return (
        <div className={classes.paginationWrapper}>
            {pagesArray.map((p) => (
                <span
                    className={page === p ? `${classes.paginationCurrent} ${classes.pagination}` : classes.pagination}
                    key={p}
                    onClick={() => {
                        changePage(p)
                    }}
                >
                    {p}
                </span>
            ))}
        </div>
    )
}

export default Pagination

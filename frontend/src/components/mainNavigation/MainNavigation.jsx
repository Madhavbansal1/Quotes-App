import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mainNavigation.module.css'
function MainNavigation() {
    return (
        <nav className={styles.mainNavigation}>
            <h2>Quotes App</h2>
            <ul>
                <li>
                    <Link to='/'>
                    All Quotes
                    </Link>
                    <Link to='/new'>new quotes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation

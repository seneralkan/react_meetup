import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styles from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'


function MainNavigation() {

    const favoriteMeetups = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            Favorite Meetups
                            <span className={styles.badge}>{favoriteMeetups.totalFavorites}</span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation

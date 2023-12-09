import { NavLink } from 'react-router-dom';

import styles from "./MainNav.module.css"

export default function MainNav() {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li><NavLink to='' end>Home</NavLink></li>
                <li><NavLink to='racers'>Racers</NavLink></li>
                <li><NavLink to='favorites'>Favorites</NavLink></li>
            </ul>
        </nav>
    )
}
import { NavLink } from 'react-router-dom';

export default function MainNav() {
    return (
        <nav>
            <ul>
                <li><NavLink to='' end>Home</NavLink></li>
                <li><NavLink to='racers'>Racers</NavLink></li>
                <li><NavLink to='favorites'>Favorites</NavLink></li>
            </ul>
        </nav>
    )
}
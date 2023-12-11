import MainNav from "./MainNav";

import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <MainNav />
            <h1 className={styles.title}>Formula-1, best racing competition in the world!</h1>
        </header>
    )
}
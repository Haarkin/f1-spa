import Container from "../UI/Container";
import RoundList from "./RoundList";
import SeasonalNav from "./SeasonalNav";

import styles from "./Home.module.css"

export default function HomePage() {
    return (
        <Container className={styles.wrapper}>
            <SeasonalNav />
            <RoundList className={styles.roundlist} />
        </Container>
    )
}
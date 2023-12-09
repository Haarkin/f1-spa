import { useState } from "react"
import Button from "../UI/Button"

export default function SeasonalNav() {
    const [seasonState, setSeasonState] = useState()

    

    return (
            <ul>
                <li>
                    <Button onClick={() => setSeasonState('2024')}>2024</Button>
                </li>
                <li>
                    <Button onClick={() => setSeasonState('2023')}>2023</Button>
                </li>
                <li>
                    <Button onClick={() => setSeasonState('2022')}>2022</Button>
                </li>
                <li>
                    <Button onClick={() => setSeasonState('2021')}>2021</Button>
                </li>
            </ul>
    )
}
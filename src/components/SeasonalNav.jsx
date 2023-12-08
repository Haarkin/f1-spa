import { useState } from "react"
import Button from "../UI/Button"

export default function SeasonalNav() {
    const [seasonState, setSeasonState] = useState()

    return (
            <ul>
                <li>
                    <Button onClick={setSeasonState('spring')}>Spring</Button>
                </li>
                <li>
                    <Button onClick={setSeasonState('summer')}>Summer</Button>
                </li>
                <li>
                    <Button onClick={setSeasonState('fall')}>Fall</Button>
                </li>
                <li>
                    <Button onClick={setSeasonState('winter')}>Winter</Button>
                </li>
            </ul>
    )
}
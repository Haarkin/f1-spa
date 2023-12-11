import { useContext } from "react"
import FavoritesContext from "../store/FavoritesContext"

export default function RacerInfo({racer}) {
    const favoritesCtx = useContext(FavoritesContext)

    function handleAddFavorite() {
        favoritesCtx.addFavorite(racer)
        console.log(racer)
    }

    return (
        <li
            key={racer.number}
        >
            <article>
                <p>Name: {racer.name}</p>
                <p>Age: {racer.age}</p>
                <p>Racing number: {racer.number}</p>
                <p>Place: {racer.place}</p>
            </article>
            <button onClick={handleAddFavorite}>Add to favorites</button>
        </li>
    )
}
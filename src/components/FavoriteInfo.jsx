import { useContext } from "react"
import FavoritesContext from "../store/FavoritesContext"

export default function FavoritesInfo({favorite}) {
    const favoritesCtx = useContext(FavoritesContext)

    function handleRemoveFavorite() {
        favoritesCtx.removeFavorite(favorite)
    }

    return (
                <li key={favorite.number}>
                    <article>
                        <p>Name: {favorite.name}</p>
                        <p>Age: {favorite.age}</p>
                        <p>Racing number: {favorite.number}</p>
                        <p>Place: {favorite.place}</p>
                    </article>
                    <button onClick={handleRemoveFavorite}>Remove</button>
                </li>
    )
}
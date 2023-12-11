import { useContext } from "react"
import FavoritesContext from "../store/FavoritesContext"
import FavoritesInfo from "./FavoriteInfo"

export default function FavoritesList() {
    const favoritesCtx = useContext(FavoritesContext)

    return (
        <ul>
            {favoritesCtx.items.map(favorite => 
                <FavoritesInfo key={favorite.number} favorite={favorite} />
            )}
        </ul>
    )
}
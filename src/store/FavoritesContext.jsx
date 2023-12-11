import { createContext, useReducer } from "react";

const FavoritesContext = createContext({
    items: [],
    addFavorite: (favorite) => {},
    removeFavorite: (number) => {},
    clearFavorites: () => {}
})

function favoritesReducer(state, action) {
    if (action.type === 'ADD_FAVORITE') {
        const updatedItems = [...state.items]
        
        updatedItems.push({ ...action.favorite })

        return { ...state, items: updatedItems }
    }

    if (action.type === 'REMOVE_FAVORITE') {
        const existingFavoritesIndex = state.items.findIndex((favorite) => favorite.number === action.number)
        const updatedItems = [...state.items]

        updatedItems.splice(existingFavoritesIndex, 1)

        return { ...state, items: updatedItems }
    }

    if (action.type === 'CLEAR_FAVORITES') {

        return {
            ...state,
            items: [],
        }
    }

    return state
}

export function FavoritesContextProvider({ children }) {
    const [ favorites, dispatchCartAction ] = useReducer(favoritesReducer, { items: [] })

    function addFavorite(favorite) {
        dispatchCartAction({ type: 'ADD_FAVORITE', favorite })
    }

    function removeFavorite(number) {
        dispatchCartAction({ type: 'REMOVE_FAVORITE', number })
    }

    function clearFavorites() {
        dispatchCartAction({ type: 'CLEAR_FAVORITES' })
    }

    const favoritesContext = {
        items: favorites.items,
        addFavorite,
        removeFavorite,
        clearFavorites
    }
    return <FavoritesContext.Provider value={favoritesContext}>{children}</FavoritesContext.Provider>
}

export default FavoritesContext
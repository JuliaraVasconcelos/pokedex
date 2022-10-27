import React from "react";


const FavoriteContext = React.createContext({
    favoritePokemons: [''],
    updateFavoritePokemons: () => { },
});

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext;
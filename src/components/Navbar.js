import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import pokeheader from '../img/pokedex-logo.png'

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return (
        <nav>
        <div>
            <img src={pokeheader} alt='logo-pokeapi'/>
        </div>
            <div className="favorite-pokemon">
                ♥{favoritePokemons.length}
                </div>
        </nav>
    );
};

export default Navbar
import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import pokeheader from '../img/pokeapi.png'

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return (
        <nav>
        <div>
            <img src={pokeheader} alt='logo-pokeapi'/>
        </div>
            <div>{favoritePokemons.length}♥</div>
        </nav>
    );
};

export default Navbar
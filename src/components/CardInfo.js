import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? '♥' : '♡';

    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-img' />
            </div>
            <div className="card-body">

                <div className="card-top">
                    <div>#{pokemon.id}</div>
                    <h3>{pokemon.name}</h3>
                    <button className="pokemon-fav-btn" onClick={onHeartClick}>{heart}</button>
                </div>

                <div className="card-bottom">

                    <div className="pokemon-weight"><div className="pokemon-weight-text">Peso</div>{pokemon.weight}</div>
                    <div className="pokemon-type">
                        <div>{pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                            )
                        })}
                        </div>
                    </div>

                    <div className="pokemon-ability">
                        {pokemon.abilities.map((ability, index) => {
                            return (
                                <div key={index} className='pokemon-type-text'>{ability.ability.name}
                                </div>
                            )
                        })}
                    </div>

                    <div className="pokemon-stats">
                        {pokemon.abilities.map((stats, index) => {
                            return (
                                <div key={index} className='pokemon-type-text'>{stats.stats.name}
                                </div>
                            )
                        })}
                    </div>

                </div>
        </div>
    </div>
)};

export default Pokemon;
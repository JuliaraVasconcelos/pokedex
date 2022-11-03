import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { pokemonTypes } from "../pokemonTypes";


const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props;

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }

    const [{ color }] = pokemonTypes.filter(
        (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
    );

    const heart = favoritePokemons.includes(pokemon.name) ? '♥' : '♡';

    // ------ Popover
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Card className="pokemon-card" sx={{ background: { color } }} >
            <div className="pokemon-img-container">
                <img alt={pokemon.name} src={imgUrl} className='pokemon-img' />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <div>#{pokemon.id}</div>
                    <h3>{pokemon.name}</h3>
                    <button className="pokemon-fav-btn" onClick={onHeartClick}>{heart}</button>
                </div>
                <div className="card-bottom">
                        <Button aria-describedby={id} variant="contained" onClick={handleClick} className="pokemon-btn">
                            Mais detalhes
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}>
                            <Typography sx={{ p: 2 }}>
                                <Card sx={{ width: 400 }}>
                                    <CardContent>
                                        <Typography variant="body2" color="text.primary" className='pokemon-bottom'>
                                            <div>
                                                Peso: {`${props.pokemon.weight / 10}`} kg
                                            </div>
                                            <div>
                                                Altura: {`${props.pokemon.height / 10}`} m
                                            </div>
                                            <div>
                                                Tipo: {pokemon.types.map((item) => item.type.name.concat(' '))}
                                            </div>
                                            <div>
                                                Habilidades: 
                                                {pokemon.abilities.map((item) => item.ability.name.concat(' / '))}
                                            </div>
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Status
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            <div>{pokemon.stats.map((stat, index) => {
                                                return (
                                                    <div key={index} className='pokemon-type-text'>
                                                        {stat.stat.name}: {stat.base_stat}
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={stat.base_stat}
                                                            sx={{
                                                                width: 350,
                                                                height: 10,
                                                                mr: 2,
                                                                background: '#eeeeee'
                                                            }} />
                                                    </div>
                                                )
                                            })}
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Typography>
                        </Popover>
                    </div>
                </div>
        </Card>)
}

export default Pokemon;
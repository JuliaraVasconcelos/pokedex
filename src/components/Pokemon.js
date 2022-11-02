import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Pokemon = (props) => {
    const{favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;

    const onHeartClick =() => {
        updateFavoritePokemons(pokemon.name)
    }

    const heart = favoritePokemons.includes(pokemon.name) ? '♥' : '♡';

    // const launchDetailsPage = () => {
    //     console.log('clicou');
    //     return(
    //          <Card sx={{ maxWidth: 345 }}>
    //              <CardMedia
    //                  component="img"
    //                  height="140"
    //                  image={pokemon.sprites.front_default}
    //                  alt={pokemon.name}
    //              />
    //              <CardContent>
    //                  <Typography gutterBottom variant="h5" component="div">
    //                      {pokemon.name} 
    //                  </Typography>
    //                  <Typography variant="body2" color="text.secondary">
    //                      <div>{pokemon.types.map((type, index) => {
    //                          return (
    //                              <div key={index} className='pokemon-type-text'>{type.type.name}</div>
    //                          )
    //                      })}
    //                      </div>

    //                  </Typography>
    //              </CardContent>
    //              <CardActions>
    //                  <Button size="small">Share</Button>
    //                  <Button size="small">Learn More</Button>
    //              </CardActions>
    //          </Card>
    //     )
    // }; 

    // Popover

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
        <div className="pokemon-card" 
        // onClick={launchDetailsPage}
        >
        <div className="pokemon-img-container">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-img'/>
        </div>
        <div className="card-body">
        <div className="card-top">
            <div>#{pokemon.id}</div>
            <h3>{pokemon.name}</h3>
            <button className="pokemon-fav-btn" onClick={onHeartClick}>{heart}</button>
        </div>
        <div className="card-bottom">
        <div className="pokemon-type">
            
                        <div>
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                               +
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>
                                    <Card sx={{ maxWidth: 345 }}>
                 <CardMedia
                     component="img"
                     height="140"
                     image={pokemon.sprites.front_default}
                     alt={pokemon.name}
                 />
                 <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                         {pokemon.name} 
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                         <div>{pokemon.types.map((type, index) => {
                             return (
                                 <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                             )
                         })}
                         </div>

                     </Typography>
                 </CardContent>
                 <CardActions>
                     <Button size="small">Share</Button>
                     <Button size="small">Learn More</Button>
                 </CardActions>
             </Card>
                                </Typography>
                            </Popover>
                        </div>
        </div>
        </div>
        </div>
    </div>)
}

export default Pokemon;
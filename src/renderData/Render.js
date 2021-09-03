import {useContext} from 'react';
import FavoritesContext from '../addToFavorites/addToFavorites';
import Card from "../uiux/Card";
import classes from "./Render.module.css";
function Render(props) {
  const FavoritesCtx=useContext(FavoritesContext);
    const itemIsFavorite=FavoritesCtx.itemIsFavorite(props.id);
  function togglefavoriteStatusHandler(){
    if(itemIsFavorite){
      FavoritesCtx.removeFavorite(props.id);
    }
    else{
      FavoritesCtx.addFavorite({
        key:props.id,
        name:props.name,
        image:props.image,
        description:props.description,
      })
    }
  }

  return (
    <Card>
      <li className={classes.li}>
        <div>
          <img src={props.image} alt={props.name} />
        </div>
        <div>
          <h1>{props.name}</h1>
          <span>{props.description}</span>
        </div>
        <div>
          <button onClick={togglefavoriteStatusHandler}>{itemIsFavorite ? 'Remove':'Add'}</button>
        </div>
      </li>
    </Card>
  );
}

export default Render;

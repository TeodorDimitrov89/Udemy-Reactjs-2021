import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hook-store/store';
import './ProductItem.css';


const ProductItem = React.memo(props => {
  const dispatch = useStore(false)[1];
  console.log("RENDERING")
  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
    // productContext.toggleFav(props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;

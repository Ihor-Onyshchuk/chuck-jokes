import React from 'react';
import T from 'prop-types';

import Card from '../card/Card';

const FavouriteList = ({favourites, onFavouriteChange}) => (
  <>
    {favourites.map(favourite => (
      <Card
        key={favourite.id}
        joke={favourite}
        isFavourite
        inFavouriteList
        onFavouriteChange={onFavouriteChange}
        className="modal-card rounded-sm mb-3"
      />
    ))}
  </>
);

FavouriteList.propTypes = {
  favourites: T.array.isRequired,
  onFavouriteChange: T.func.isRequired,
};

export default FavouriteList;

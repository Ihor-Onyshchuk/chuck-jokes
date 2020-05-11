import React from 'react';
import T from 'prop-types';

import Card from '../card/Card';

const FavouriteList = ({favourites, onFavouriteChange}) => {
  return (
    <div>
      {favourites.map(favourite => (
        <Card
          key={favourite.id}
          joke={favourite}
          isFavourite
          inFavouriteList
          onFavouriteChange={onFavouriteChange}
        />
      ))}
    </div>
  );
};

FavouriteList.propTypes = {
  favourites: T.array.isRequired,
  onFavouriteChange: T.func.isRequired,
};

export default FavouriteList;

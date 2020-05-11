import React from 'react';
import T from 'prop-types';

import Card from '../card/Card';

const JokeList = ({favourites, onFavouriteChange, fetchedData}) => {
  const {data, isLoading, isError} = fetchedData;
  return (
    <>
      {isLoading && 'loading...'}
      {!isLoading && isError && 'Error'}
      {!isLoading && !!data?.result.length
        ? data.result.map(joke => (
            <Card
              key={joke.id}
              joke={joke}
              isFavourite={favourites.some(({id}) => id === joke.id)}
              onFavouriteChange={onFavouriteChange}
            />
          ))
        : 'Not found'}
    </>
  );
};

JokeList.propTypes = {
  onFavouriteChange: T.func.isRequired,
  fetchedData: T.object.isRequired,
  favourites: T.array.isRequired,
};

export default JokeList;

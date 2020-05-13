import React from 'react';
import T from 'prop-types';

import Card from '../card/Card';
import Spiner from '../spiner/Spiner';

const JokeList = ({favourites, onFavouriteChange, fetchedData, className}) => {
  const {data, isLoading, isError} = fetchedData;
  return (
    <div className="card-wrapper">
      {isLoading && <Spiner />}
      {!isLoading && isError && (
        <div class="alert alert-danger" role="alert">
          Something go wrong!
        </div>
      )}
      {!isLoading && !!data?.result.length && !isError ? (
        data.result.map(joke => (
          <Card
            key={joke.id}
            joke={joke}
            isFavourite={favourites.some(({id}) => id === joke.id)}
            onFavouriteChange={onFavouriteChange}
            className={className}
          />
        ))
      ) : (
        <div class="alert alert-info" role="alert">
          Joke Not found
        </div>
      )}
    </div>
  );
};

JokeList.propTypes = {
  onFavouriteChange: T.func.isRequired,
  fetchedData: T.object.isRequired,
  favourites: T.array.isRequired,
};

export default JokeList;

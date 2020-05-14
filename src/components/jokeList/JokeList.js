import React from 'react';
import T from 'prop-types';

import Card from '../card/Card';
import Spiner from '../spiner/Spiner';
import Alert from '../alert/Alert';

const JokeList = ({favourites, onFavouriteChange, fetchedData, className}) => {
  const {data, isLoading, isError} = fetchedData;
  const showInit = !isLoading && data === undefined;
  const showError = !isLoading && isError;
  const showData = !isLoading && !isError && !!data?.result.length;
  const showEmpty = !isLoading && !isError && !showInit && !data?.result.length;

  return (
    <div className="card-wrapper">
      {showInit && (
        <Alert text=" Click on the button above for getting a joke " />
      )}
      {isLoading && <Spiner />}
      {showData &&
        data.result.map(joke => (
          <Card
            key={joke.id}
            joke={joke}
            isFavourite={favourites.some(({id}) => id === joke.id)}
            onFavouriteChange={onFavouriteChange}
            className={className}
          />
        ))}

      {showEmpty && <Alert type="secondary" text="No jokes" />}
      {showError && <Alert type="danger" text="Something go wrong!" />}
    </div>
  );
};

JokeList.propTypes = {
  onFavouriteChange: T.func.isRequired,
  fetchedData: T.object.isRequired,
  favourites: T.array.isRequired,
};

export default JokeList;

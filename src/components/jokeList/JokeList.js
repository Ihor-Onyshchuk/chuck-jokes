import React from 'react';
import T from 'prop-types';

import Card from '../card/Card';
import Alert from '../alert/Alert';
import Spiner from '../spiner/Spiner';

const JokeList = ({favourites, apiRequestData, ...restProps}) => {
  const {data, isLoading, isError} = apiRequestData;
  const showInit = !isLoading && data === undefined;
  const showError = !isLoading && isError;
  const showData = !isLoading && !isError && !!data?.result.length;
  const showEmpty = !isLoading && !isError && !showInit && !data?.result.length;

  return (
    <div className="card-wrapper">
      {showInit && (
        <Alert text="Click on the button above for getting a joke" />
      )}
      {isLoading && <Spiner />}
      {showData &&
        data.result.map(joke => (
          <Card
            key={joke.id}
            {...restProps}
            joke={joke}
            isFavourite={favourites.some(({id}) => id === joke.id)}
            className="main-card rounded-lg mb-3 p-md-4"
          />
        ))}

      {showEmpty && <Alert type="secondary" text="No jokes" />}
      {showError && <Alert type="danger" text="Something go wrong!" />}
    </div>
  );
};

JokeList.propTypes = {
  onFavouriteChange: T.func.isRequired,
  apiRequestData: T.object.isRequired,
  favourites: T.array.isRequired,
};

export default JokeList;

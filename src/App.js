import React, {useState, useEffect} from 'react';
import Animation from './components/animation/Animation';

import Form from './components/form/Form';
import Modal from './components/modal/Modal';
import Header from './components/header/Header';
import JokeList from './components/jokeList/JokeList';
import FavouriteList from './components/favouriteList/FavouriteList';

import {useChuckApi} from './hooks/useChuckApi';

const handlePreventScroll = action =>
  document.body.classList[action]('no-scroll');

const getStorageItem = key => {
  const storageItem = localStorage.getItem(key);
  return storageItem ? JSON.parse(storageItem) : [];
};

const App = () => {
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [fetchedData, doFetch] = useChuckApi();

  useEffect(() => {
    setFavourites(getStorageItem('favourites'));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  handlePreventScroll(isModalOpen ? 'add' : 'remove');

  const handleFormSubmit = url => doFetch(url);

  const handleFavouritesUpdate = joke => {
    let nextFavourite;
    if (favourites.some(({id}) => id === joke.id)) {
      nextFavourite = favourites.filter(({id}) => id !== joke.id);
    } else {
      nextFavourite = [...favourites, joke];
    }
    setFavourites(nextFavourite);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8">
            <Header
              toggleModalOpen={toggleModalOpen}
              isModalOpen={isModalOpen}
            />

            <Form onSubmit={handleFormSubmit} />

            <JokeList
              fetchedData={fetchedData}
              favourites={favourites}
              onFavouriteChange={handleFavouritesUpdate}
            />
          </div>
          <div className="d-none d-xl-flex col-xl-4">
            <h5>Favourite</h5>
            <FavouriteList
              favourites={favourites}
              onFavouriteChange={handleFavouritesUpdate}
            />
          </div>
        </div>
      </div>
      <Animation show={isModalOpen}>
        <Modal
          isOpen={isModalOpen}
          onClose={toggleModalOpen}
          className="d-xl-none"
        >
          <FavouriteList
            favourites={favourites}
            onFavouriteChange={handleFavouritesUpdate}
          />
        </Modal>
      </Animation>
    </>
  );
};

export default App;

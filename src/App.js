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
  const [apiRequestData, doFetch] = useChuckApi();

  useEffect(() => {
    setFavourites(getStorageItem('favourites'));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    handlePreventScroll(isModalOpen ? 'add' : 'remove');
  });

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
      <div className="container-xl">
        <div className="row">
          <div className="col-12 col-xl-7 layout-offset">
            <Header
              toggleModalOpen={toggleModalOpen}
              isModalOpen={isModalOpen}
            />

            <Form onSubmit={handleFormSubmit} />

            <JokeList
              apiRequestData={apiRequestData}
              favourites={favourites}
              onFavouriteChange={handleFavouritesUpdate}
              className="main-card rounded-lg mb-3 p-md-4"
            />
          </div>
          <div className="d-none d-xl-flex col-xl-5 layout-offset flex-column bg-light">
            <h5 className="fw-500 fz-20 lh-28 mb-3 text-secondary">
              Favourite
            </h5>
            <FavouriteList
              favourites={favourites}
              onFavouriteChange={handleFavouritesUpdate}
              className="modal-card rounded-sm"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModalOpen}
        className="d-xl-none"
      >
        <FavouriteList
          favourites={favourites}
          onFavouriteChange={handleFavouritesUpdate}
          className="modal-card rounded-sm"
        />
      </Modal>
    </>
  );
};

export default App;

import React, {useState, useEffect} from 'react';
import Modal from './components/modal/Modal';
import ToggleModal from './components/toggleModal/ToggleModal';
import Card from './components/card/Card';
import Categories from './components/categories/Categories';
import {getCategories} from './components/api';
import {useChuckApi} from './hooks/useChuckApi';
import RadionButton from './components/radioButton/RadioButton';
import InputText from './components/inputText/InputText';
import FavouriteList from './components/favouriteList/FavouriteList';

const handlePreventScroll = action =>
  document.body.classList[action]('no-scroll');

const getStorageItem = key => {
  const storageItem = localStorage.getItem(key);
  return storageItem ? JSON.parse(storageItem) : [];
};

const App = () => {
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [mode, setMode] = useState('random');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [query, setQuery] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [{data, isLoading, isError}, doFetch] = useChuckApi();

  const handleFormSubmit = event => {
    event.preventDefault();
    const apiUrlsMapper = {
      random: '/random',
      categories: `/random?category=${category}`,
      search: `/search?query=${query}`,
    };
    doFetch(apiUrlsMapper[mode]);
  };

  handlePreventScroll(isModalOpen ? 'add' : 'remove');

  useEffect(() => {
    (async function fetchCategories() {
      const {data} = await getCategories();
      setCategory(data[0]);
      setCategories(data);
    })();

    setFavourites(getStorageItem('favourites'));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleCategoryChange = category => setCategory(category);

  const handleRadioChange = event => setMode(event.target.value);

  const handleInputChange = event => setQuery(event.target.value);

  const handleFavouritesUpdate = joke => {
    let nextFavourite;
    if (favourites.some(({id}) => id === joke.id)) {
      nextFavourite = favourites.filter(({id}) => id !== joke.id);
    } else {
      nextFavourite = [...favourites, joke];
    }
    setFavourites(nextFavourite);
    console.log('joke', joke);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8">
            <nav className="navbar">
              <h1 className="navbar-brand lh-28 fw-700 p-0">MSI 2020</h1>
              <ToggleModal
                onClick={toggleModalOpen}
                active={isModalOpen}
                className="d-xl-none"
              />
            </nav>
            <h2 className="fz-32 lh-44 fw-700 px-1">Hey!</h2>
            <h4 className="fw-500 fz-24 lh-44 px-1">
              Let's try to find a joke for you
            </h4>
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <RadionButton
                  label="Random"
                  name="joke"
                  value="random"
                  active={mode}
                  onChange={handleRadioChange}
                />
                <RadionButton
                  label="From categories"
                  name="joke"
                  value="categories"
                  active={mode}
                  onChange={handleRadioChange}
                />
                {mode === 'categories' && !!categories.length ? (
                  <Categories
                    options={categories}
                    active={category}
                    onChange={handleCategoryChange}
                  />
                ) : null}
                <RadionButton
                  label="Search"
                  name="joke"
                  value="search"
                  active={mode}
                  onChange={handleRadioChange}
                />
                {mode === 'search' && (
                  <InputText
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Free text search"
                  />
                )}
              </div>
              <button
                className="btn btn-lg btn-primary btn-lg btn-gradient fw-700 lh-22"
                type="submit"
              >
                Get a joke
              </button>
            </form>
            {isLoading && 'loading...'}
            {!isLoading && isError && 'Error'}
            {!isLoading && !!data?.result.length
              ? data.result.map(joke => (
                  <Card
                    key={joke.id}
                    joke={joke}
                    isFavourite={favourites.some(({id}) => id === joke.id)}
                    onFavouriteChange={handleFavouritesUpdate}
                  />
                ))
              : 'Not found'}
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
      {isModalOpen && (
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
      )}
    </>
  );
};

export default App;

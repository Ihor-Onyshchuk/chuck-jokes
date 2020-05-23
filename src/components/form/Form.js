import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import T from 'prop-types';

import RadionButton from '../radioButton/RadioButton';
import Categories from '../categories/Categories';
import InputText from '../inputText/InputText';
import {getCategories} from '../../api';

const Form = ({onSubmit, className = 'mb-4'}) => {
  const [mode, setMode] = useState('random');
  const [category, setCategory] = useState();
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function fetchCategories() {
      const {data} = await getCategories();
      setCategory(data[0]);
      setCategories(data);
    })();
  }, []);

  const isSubmitDisabled = () =>
    (mode === 'search' && query.trim() === '') ||
    (mode === 'category' && !category);

  const handleCategoryChange = category => setCategory(category);
  const handleInputChange = event => setQuery(event.target.value);
  const handleRadioChange = event => {
    setMode(event.target.value);
    setCategory(categories[0]);
    setQuery('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (isSubmitDisabled()) return;

    const apiUrlsMapper = {
      random: '/random',
      categories: `/random?category=${category}`,
      search: `/search?query=${query}`,
    };
    onSubmit(apiUrlsMapper[mode]);
  };

  return (
    <form className={cx('form pt-1', className)} onSubmit={handleFormSubmit}>
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
        className="btn btn-lg btn-primary btn-gradient fw-700 lh-22"
        type="submit"
        disabled={isSubmitDisabled()}
        data-testid="submit-button"
      >
        Get a joke
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: T.func.isRequired,
  className: T.string,
};

export default Form;

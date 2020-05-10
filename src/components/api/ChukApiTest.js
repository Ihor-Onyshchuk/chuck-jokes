import React, {PureComponent, useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../card/Card';
import {useChuckApi} from '../../hooks/useChuckApi';

const TestChukApi = () => {
  const [{data, isLoading, isError}, doFetch] = useChuckApi();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('animal');
  const [query, setQuery] = useState();
  const [mode, setMode] = useState('category');

  const getJoke = () => {
    const apiUrlsMapper = {
      random: '/random',
      category: `/random?category=${category}`,
      search: `/search?query=${query}`,
    };
    doFetch(apiUrlsMapper[mode]);
  };
  console.log('data', data);

  // const getJokeWithCat = () => {
  //   axios
  //     .get('https://api.chucknorris.io/jokes/random?category=celebrity')
  //     .then(res => {
  //       const {id, value, updated_at, categories} = res.data;
  //       this.setState({
  //         joke: {
  //           id,
  //           value,
  //           updatedAt: updated_at,
  //           category: categories[0],
  //         },
  //       });
  //     });
  // };

  // const handleSearchInputChange = event => {
  //   const value = event.target.value;
  //   this.setState({
  //     searchWord: value,
  //   });
  // };

  // const searchJoke = () => {
  //   axios
  //     .get(
  //       `https://api.chucknorris.io/jokes/search?query=${this.state.searchWord}`
  //     )
  //     .then(res => {
  //       if (res.data.total === 0) return;
  //       const {id, value, updated_at, categories} = res.data.result[0];
  //       this.setState({
  //         joke: {
  //           id,
  //           value,
  //           updatedAt: updated_at,
  //           category: categories,
  //           searchWord: '',
  //         },
  //       });
  //     });
  // };

  return (
    <div className="container">
      <span className="icon-message fz-3"></span>
      <h2> {false ? 'loading' : 'Test Chuk Api'} </h2>
      <div className="row">
        <div className="col">
          {/* <Card {...this.state} /> */}
          {/* Favourite list card */}
          {/* <Card {...this.state} /> */}
          <button className="d-block" onClick={() => getJoke()}>
            get random joke
          </button>
          {/* <button className="d-block" onClick={() => this.getJokeWithCat()}>
              get joke with categories
            </button>
            <button onClick={() => this.searchJoke()}>get with search</button>
            <input
              type="text"
              value={this.state.searchWord}
              onChange={this.handleSearchInputChange}
            /> */}
        </div>
      </div>
    </div>
  );
};

export default TestChukApi;

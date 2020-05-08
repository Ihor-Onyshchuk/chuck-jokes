import React, {PureComponent} from 'react';
import axios from 'axios';
import Card from '../card/Card';

export default class TestChukApi extends PureComponent {
  state = {
    id: '',
    value: '',
    updatedAt: '',
    category: '',
    searchWord: '',
    isFetching: null,
    isFavourite: false,
    isFavouriteList: false,
  };

  getRandomJoke = () => {
    this.setState({
      isFetching: true,
    });
    axios.get('https://api.chucknorris.io/jokes/random').then(res => {
      const {id, value, updated_at} = res.data;
      this.setState({
        id: id,
        value: value,
        updatedAt: updated_at,

        isFetching: false,
      });
    });
  };

  getJokeWithCat = () => {
    this.setState({
      isFetching: true,
    });
    axios
      .get('https://api.chucknorris.io/jokes/random?category=celebrity')
      .then(res => {
        const {id, value, updated_at, categories} = res.data;
        this.setState({
          id: id,
          value: value,
          updatedAt: updated_at,
          category: categories[0],

          isFetching: false,
        });
      });
  };

  handleSearchInputChange = event => {
    const value = event.target.value;
    this.setState({
      searchWord: value,
      isFetching: false,
    });
  };

  searchJoke = () => {
    this.setState({
      isFetching: true,
    });
    axios
      .get(
        `https://api.chucknorris.io/jokes/search?query=${this.state.searchWord}`
      )
      .then(res => {
        if (res.data.total === 0) return;
        const {id, value, updated_at, categories} = res.data.result[0];
        this.setState({
          joke: {
            id: id,
            value: value,
            updatedAt: updated_at,
            category: categories,
          },
          isFetching: false,

          searchWord: '',
        });
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>Test Chuk Api</h2>
          <div className="row">
            <div className="col">
              <Card {...this.state} />
              {/* Favourite list card */}
              <Card {...this.state} />
              <button className="d-block" onClick={() => this.getRandomJoke()}>
                get random joke
              </button>
              <button className="d-block" onClick={() => this.getJokeWithCat()}>
                get joke with categories
              </button>
              <button onClick={() => this.searchJoke()}>get with search</button>
              <input
                type="text"
                value={this.state.searchWord}
                onChange={this.handleSearchInputChange}
              />
            </div>
          </div>
        </div>
        )
      </>
    );
  }
}

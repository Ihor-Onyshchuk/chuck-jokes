import React, {PureComponent} from 'react';
import axios from 'axios';

export default class TestChukApi extends PureComponent {
  state = {
    joke: {
      id: '',
      value: '',
      updatedAt: '',
      category: '',
    },
    searchWord: '',
  };

  getRandomJoke = () => {
    axios.get('https://api.chucknorris.io/jokes/random').then(res => {
      const {id, value, updated_at} = res.data;
      this.setState({
        joke: {
          id: id,
          value: value,
          updatedAt: updated_at,
        },
      });
    });
  };

  getJokeWithCat = () => {
    axios
      .get('https://api.chucknorris.io/jokes/random?category=celebrity')
      .then(res => {
        const {id, value, updated_at, categories} = res.data;
        this.setState({
          joke: {
            id: id,
            value: value,
            updatedAt: updated_at,
            category: categories[0],
          },
        });
      });
  };

  handleSearchInputChange = event => {
    const value = event.target.value;
    this.setState({
      searchWord: value,
    });
  };

  searchJoke = () => {
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
          searchWord: '',
        });
      });
  };

  render() {
    const {id, value, updatedAt, category} = this.state.joke;

    return (
      <div>
        <div className="container">
          <h2>Test Chuk Api</h2>
          <div className="row">
            <div className="col">
              <h3>Random joke</h3>
              <div>
                <p>
                  <u>joke:</u> {value}
                </p>
              </div>
              <div>
                <u>id:</u> {id}
              </div>
              <div>
                <u>Updated-at:</u> {updatedAt}
              </div>
              <div>
                <u>category:</u> {category}
              </div>
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
      </div>
    );
  }
}

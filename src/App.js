import React, { Component } from 'react';

import CatsList from './components/CatsList';
import SearchBox from './components/SearchBox';

import { cats } from './Assets/cats';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state= {
      cats: cats,
      searchField: ''
    }
  }
  

  onSearchChange = (event) => {
    this.setState( { searchField: event.target.value })
  }


  render() {

    const filteredCats = this.state.cats.filter(
      (cat) => {
        // console.log(cat.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()));
        return cat.username.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
      }
    );

    return (
      <div className='tc'>
        <h1 className='f1 h1'>Cats filter</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CatsList cats={ filteredCats } />
      </div>
    );
  }
}

export default App;
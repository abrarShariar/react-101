import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//my components
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
    <div className="App">
        <div className="col-md-6">
            <h1>Filter By Language</h1>
            <hr/>
            <hr/>
            <Filter/>
        </div>
        <div className="col-md-6">
            <h1>Search Github</h1>
            <hr/>
            <SearchBar/>
        </div>
    </div>
    );
  }
}

export default App;

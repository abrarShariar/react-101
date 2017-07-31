import React, { Component } from 'react';
import './App.css';

//my components
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import LanguageAdder from './components/LangugeAdder';


class App extends Component {

    onNewLangAdd = (newLang) => {
        console.log("From App Component");
        console.log("Hello World");
    }

    render() {
        return (
        <div className="App">
            <div className="col-md-12">
                <div className="col-md-6">
                    <h1>Add Programming Languages</h1>
                    <hr/>
                    <LanguageAdder onNewLangAdd={this.onNewLangAdd}/>
                </div>
                <div className="col-md-6">

                </div>
            </div>

            <div className="col-md-12">
                <div className="col-md-6">
                    <h1>Filter By Language</h1>
                    <hr/>
                    <Filter/>
                </div>
                <div className="col-md-6">
                    <h1>Search Github</h1>
                    <hr/>
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../App.scss';
import Country from './Country'
import countries from '../countries'

class App extends Component {
  render() {
    return (
      <div className="app">
        {countries.map((country, i) => <Country key={`country-${i}`} country={country}/>)}
      </div>      
    );
  }
}

export default App;
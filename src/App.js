import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import WorldChampionsList from './components/WorldChampionsList/WorldChampionsList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WorldChampionsList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './services/redux/store';
import Header from './components/Header/Header';
import WorldChampionsList from './components/WorldChampionsList/WorldChampionsList';
import SeasonWinners from './components/SeasonWinnersList/SeasonWinnersList';

/** clean code is it's own documentation */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <WorldChampionsList />
          <SeasonWinners />
        </div>
      </Provider>
    );
  }
}

export default App;

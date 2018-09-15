import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './services/redux/store';
import Header from './components/Header/Header';
import WorldChampionsList from './components/WorldChampionsList/WorldChampionsList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <WorldChampionsList />
        </div>
      </Provider>
    );
  }
}

export default App;

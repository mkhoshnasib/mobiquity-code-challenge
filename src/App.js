import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './services/redux/store';
import Header from './components/Header/Header';
import WorldChampionsList from './components/WorldChampionsList/WorldChampionsList';
import SeasonWinners from './components/SeasonWinnersList/SeasonWinnersList';

/** clean code is it's own documentation */

/** I usually use a combination of functional and OOP
 *  when I'm working with React. In my opinion using OOP
 *  in components is more readable and easy to maintain,
 *  although I use functional style in Redux integration
 *  (defining store, reducers and actions using pure functions),
 *  because the purpose of using Redux is immutability and functional
 *  styles considers a lot about immutability. */

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

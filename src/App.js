import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './components/Menu';
import FilterSearch, {} from './components/FilterSearch'
import './App.css';
import Cards from './components/Cards';
import CardDetials, {} from './components/CardDetails'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Menu></Menu>
      <div className="cardsView">
        <FilterSearch></FilterSearch>
        <Cards></Cards>
      </div>
      <CardDetials></CardDetials>
      </div>
      </Provider>
    );
  }
}

export default App;

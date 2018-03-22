import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Items from './Items';
import Item from './Item';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/items" component={Items} />
            <Route path="/items/:id" component={Item} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {ContactData} from './contacts';
import { Provider } from './Context';
import Profile from './components/Profile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: ContactData,
    }
  }
  render() {
    return (
      <div className="App">
        <Provider value={this.state}>
          <Profile />
        </Provider>
      </div>
    );
  }
}

export default App;

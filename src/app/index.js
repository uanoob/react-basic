import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
  render() {
    const user = {
      name: 'Angie',
      hobbies: ['sports', 'reading', 'learning'],
    };
    return (
      <div className="container">
        <Header homeLink="Home" />
        <Home name="Max" initialAge={27} user={user}>
          <p>This is paragraph</p>
        </Home>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));

import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import InitialPage from './pages/InitialPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ InitialPage } />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import './App.css';
import VideoDashboard from './containers/video-dashboard';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={VideoDashboard}/>
        </Switch>
    );
  }
}

export default App;

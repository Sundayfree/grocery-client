import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

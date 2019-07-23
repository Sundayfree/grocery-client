import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/dashboard" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

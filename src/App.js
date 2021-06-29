import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

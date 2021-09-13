
import React from 'react';
import './App.css';
import Navigation from './components/Navbar/NavbarElements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Games from './pages/my-stuff/games';
import Programming from './pages/my-stuff/programming';
  
function App() {
  return (
    <Router>
      <div className="App-base">
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/my-stuff/programming' component={Programming} />
        <Route path='/my-stuff/games' component={Games} />
      </Switch>
      {/* <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        padding: "15% 0%",
        textAlign: 'center',
        height: '100vh',
        color: 'white',
      }}>You seem to be lost...</h1> */}
    </div>
    </Router>

  );
}
  
export default App;
import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import CardsetsView from "./views/CardsetsView";
import FlashcardsView from "./views/FlashcardsView";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Route exact path='/' component={CardsetsView}/>
          <Route exact path='/:id/flashcards' component={FlashcardsView}/>
        </div>
      </div>
    </Router>
  );
}

export default App;

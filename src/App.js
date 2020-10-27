import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideos */}
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            {/* Header */}
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideos */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

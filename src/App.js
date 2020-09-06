import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails ';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
       <Switch>
          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route path="/post">
          <Post></Post>
          </Route>
          <Route path="/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/about">
             
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;

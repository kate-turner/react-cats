import React, { Component } from 'react';
import CatContainer from './CatContainer';
import CatDetail from './CatDetail';
import CreateCat from './CreateCat';
import EditCat from './EditCat';
import { Route, Switch } from 'react-router-dom';


const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
    )
};

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ CatContainer } />
        <Route exact path="/cat" component={ CatDetail } />
        <Route exact path="/new" component={ CreateCat } />
        <Route exact path="/edit" component={ EditCat } />
        <Route component={My404} />
      </Switch>
    </main>
    )
};



export default App;

// Main Routes Component...!

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Components/home";
import TodoList from "./Components/todo-list-app";
import StopWatch from "./Components/stop-watch";
import Timer from "./Components/timer";
import BiddingGame from "./Components/bidding-game";
import LudoGame from "./Components/ludo-game";
import CardFlipGame from "./Components/card-flip-game";
import Counter from "./Components/counter";
import SearchFilter from "./Components/search-filter";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/search-filter" component={SearchFilter} />
          <Route path="/counter" component={Counter} />
          <Route path="/card-flip-game" component={CardFlipGame} />
          <Route path="/ludo-game" component={LudoGame} />
          <Route path="/bidding-game" component={BiddingGame} />
          <Route path="/timer" component={Timer} />
          <Route path="/stop-watch" component={StopWatch} />
          <Route path="/todo-list" component={TodoList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
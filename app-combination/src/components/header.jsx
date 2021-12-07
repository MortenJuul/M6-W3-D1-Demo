import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BarChart from "./barchart/BarChart"
import Home from "./Home";
import Vertex from "./vertex/Vertex";
import Trees from "./tree/Tree";
import data from "./tree/data";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <div className="header items">
          <h1>
            <Link to="/" className="titleLogo">
              Home
            </Link>
          </h1>
          <h1 className="barchart">
            <Link to="/barchart">
              Bar Chart
            </Link>
          </h1>
          <h1 className="barchart">
            <Link to="/vertex">
              Vertex
            </Link>
          </h1>
          <h1 className="barchart">
            <Link to="/tree">
              Tree
            </Link>
          </h1>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/barchart">
            <BarChart />
          </Route>
          <Route path="/vertex">
            <Vertex />
          </Route>
          <Route path="/tree">
            <Trees data={data} width={600} height={500} />
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default Header;

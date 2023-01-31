import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "../App.css";
import Gallery from "./Gallery";

export default function NavBar() {
  return (
    /////Navigation Bar///////
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <a className="Nav-text" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="Nav-text" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="Nav-text" href="/Gallery">
                Gallery
              </a>
            </li>
            <li>
              <a href="">
                <button className="button">Build Your Own Event</button>
              </a>
            </li>
          </ul>
        </nav>

        <div className="display">
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/packages" render={() => <Gallery />} />
        </div>
      </Router>
    </div>
  );
}

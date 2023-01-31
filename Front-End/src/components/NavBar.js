import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "../App.css";
import Gallery from "./Gallery";
import About from "./About";

export default function NavBar() {
  return (
    /////Navigation Bar///////
    <div className="App">
        <nav>
          <ul>
            <li>
              <a className="Nav-text" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="Nav-text" href="/About">
                About
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
<Router>
        <div className="display">
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/gallery" render={() => <Gallery />} />
          <Route path="/about" render={() => <About />} />
        </div>
      </Router>
    </div>
  );
}


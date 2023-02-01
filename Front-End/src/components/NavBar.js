import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "../App.css";
import Gallery from "./Gallery";

import EventPackages from "./EventPackages";
import CustomForm from "./CustomForm";
import PackageForm from "./PackageForm";
import WeddingBudgetPkg from "./WeddingBgtPkg";
import WeddingGlamPkg from "./WeddingGlamPkg";
import WeddingShimmerPkg from "./WeddingShimmerPkg";

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
              <a className="Nav-text" href="/eventPackages">
                Event Packages
              </a>
            </li>
            <li>
              <a className="Nav-text" href="/packageForm">
                Package Form
              </a>
            </li>
            <li>
              <a href="/customForm">
                <button className="button">Build Your Own Event</button>
              </a>
            </li>
          </ul>
        </nav>

        <div className="display">
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/packages" render={() => <Gallery />} />
          <Route path="/eventPackages" render={() => <EventPackages />} />
          <Route path="/budget" component={WeddingBudgetPkg} />
          <Route path="/glam" component={WeddingGlamPkg} />
          <Route path="/shimmer" component={WeddingShimmerPkg} />
          <Route path="/packageForm" render={() => <PackageForm />} />
          <Route path="/customForm" render={() => <CustomForm />} />
        </div>
      </Router>
    </div>
  );
}

import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "../App.css";
import Gallery from "./Gallery";
import About from "./About";


import EventPackages from "./EventPackages";
import CustomForm from "./CustomForm";
import PackageForm from "./PackageForm";
import CelebrationAnniversaryPkg from "./CelebAnniversaryPkg";
import CelebrationBirthdayPkg from "./CelebBirthdayPkg";
import CelebrationGraduationPkg from "./CelebGradPkg";
import CelebrationHolidayPkg from "./CelebHolidayPkg";
import CelebrationReunionPkg from "./CelebReunionPkg";
import CorporateClassicPkg from "./CorpClassicPkg";
import CorporateHolidayPkg from "./CorpHolidayPkg";
import CorporateMixerPkg from "./CorpMixerPkg";
import WeddingBudgetPkg from "./WeddingBgtPkg";
import WeddingGlamPkg from "./WeddingGlamPkg";
import WeddingShimmerPkg from "./WeddingShimmerPkg";


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
              <a className="Nav-text" href="/Services">
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
<Router>
        <div className="display">
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/packages" render={() => <Gallery />} />
          <Route path="/eventPackages" render={() => <EventPackages />} />
          <Route path="/anniversary" component={CelebrationAnniversaryPkg} />
          <Route path="/birthday" component={CelebrationBirthdayPkg} />
          <Route path="/graduation" component={CelebrationGraduationPkg} />
          <Route path="/holiday" component={CelebrationHolidayPkg} />
          <Route path="/reunion" component={CelebrationReunionPkg} />
          <Route path="/classic" component={CorporateClassicPkg} />
          <Route path="/corp-holiday" component={CorporateHolidayPkg} />
          <Route path="/mixer" component={CorporateMixerPkg} />
          <Route path="/form" component={CustomForm} />
          <Route path="/budget" component={WeddingBudgetPkg} />
          <Route path="/glam" component={WeddingGlamPkg} />
          <Route path="/shimmer" component={WeddingShimmerPkg} />
          <Route path="/packageForm" render={() => <PackageForm />} />
          <Route path="/customForm" render={() => <CustomForm />} />
          <Route path="/gallery" render={() => <Gallery />} />
          <Route path="/About" render={() => <About />} />
        </div>
      </Router>
    </div>
  );
}


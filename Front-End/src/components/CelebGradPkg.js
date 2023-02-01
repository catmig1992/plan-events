import React from "react";
import Container from "react-bootstrap/Container";
import "../App.css";

export default function CelebrationGraduationPkg() {
  return (
    <Container>
      <div className="PresetPkgs">
        <div className="PresetContent">
          <header className="PresetHeader">
            <h1>Graduation Celebration Package</h1>
            <div className="PresetInfo">
              <p>
                Event hall will be selected based on availability per event
                date.
              </p>
              <p>Pricing will be based on party size.</p>
            </div>
          </header>
          <main className="PresetMain">
            <p>
              <span className="PresetCategory">Meal Service:</span>
            </p>
            <p>
              <span className="PresetCategory">Appetizers:</span>
            </p>
            <p>
              <span className="PresetCategory">Entrées:</span>
            </p>
            <p>
              <span className="PresetCategory">Desserts:</span>
            </p>
            <p>
              <span className="PresetCategory">Non-Alcoholic Beverages:</span>
            </p>
            <p>
              <span className="PresetCategory">Cash bar duration:</span>
            </p>
            <p>
              <span className="PresetCategory">Open bar duration:</span>
            </p>
            <p>
              <span className="PresetCategory">Tables and chairs:</span>
            </p>
            <p>
              <span className="PresetCategory">Flower Arrangements:</span>
            </p>
            <p>
              <span className="PresetCategory">Music:</span>
            </p>
            <p>
              <span className="PresetCategory">Entertainment:</span>
            </p>
          </main>
          <footer>
            <p>Plan with us!</p>
          </footer>
        </div>
      </div>
    </Container>
  );
}

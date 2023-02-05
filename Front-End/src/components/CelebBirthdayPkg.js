import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../App.css";

export default function CelebrationBirthdayPkg() {
  return (
    <Container>
      <div className="PresetPkgs">
        <div className="PresetContent">
          <header className="PresetHeader">
            <h1>Birthday Celebration Package</h1>
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
              <span className="PresetCategory">Meal Service:</span> Buffet
            </p>
            <p>
              <span className="PresetCategory">Appetizers:</span> Egg Rolls,
              Kebabs and Meatballs
            </p>
            <p>
              <span className="PresetCategory">Entrées:</span> Filet Mignon and
              Grilled Fish
            </p>
            <p>
              <span className="PresetCategory">Desserts:</span> Chocolate Cake,
              Vanilla Cake and Fruit Tarts
            </p>
            <p>
              <span className="PresetCategory">Non-Alcoholic Beverages:</span>
              Orange Juice, Ginger Ale, Sprite and Coke
            </p>
            <p>
              <span className="PresetCategory">Cash bar duration:</span> 1.5
              hours
            </p>
            <p>
              <span className="PresetCategory">Open bar duration:</span> 2.5
              hours
            </p>
            <p>
              <span className="PresetCategory">Tables and chairs:</span> classic
              style - round tables
            </p>
            <p>
              <span className="PresetCategory">Flower Arrangements:</span> Pink
              and White Chrysanthemums with Marigolds
            </p>
            <p>
              <span className="PresetCategory">Music:</span> DJ
            </p>
            <p>
              <span className="PresetCategory">Entertainment:</span> Photo Booth
            </p>
            <div>
              <Button
                className="BackButton"
                variant="secondary"
                action
                href="/eventPackages"
              >
                Back
              </Button>{" "}
              <Button
                className="NextButton"
                variant="secondary"
                action
                href="/anniversary"
              >
                Next
              </Button>
            </div>
            <br />
            <div>
              <Button
                className="SelectButton"
                variant="success"
                action
                href="/packageForm"
              >
                Select
              </Button>
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
}

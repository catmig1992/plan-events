import React from "react";
import Container from "react-bootstrap/Container";

export default function Gallery() {
  return (
    <Container>
<div id="myDIV">
  <div class="image"><img className="image" src="/image/wedding.jpeg" alt="wedding"/></div>
  <div class="image"><img className="image" src="/image/party_people.jpeg" alt="party people"/></div>
  <div class="image"><img className="image" src="/image/party_people2.jpeg" alt="party people 2"/></div>
  </div>

  <div id="myDIV">
  <div class="image"><img className="image" src="/image/newyear_celebration.jpeg" alt="new year celebration"/></div>
  <div class="image"><img className="image" src="/image/corporate_party.jpeg" alt="corporate party"/></div>
  <div class="image"><img className="image" src="/image/birthday.jpeg" alt="birthday"/></div>
</div>
</Container>

  );
}
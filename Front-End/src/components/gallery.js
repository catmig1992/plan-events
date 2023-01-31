import React from "react";

export default function Gallery() {
  return (
    <div class="ImageGallery">
<div id="myDIV">
  <div class="item1"><img className="image" src="/image/wedding.jpeg" alt="wedding"/></div>
  <div class="item2"><img className="image" src="/image/party_people.jpeg" alt="party people"/></div>
  <div class="item3"><img className="image" src="/image/party_people2.jpeg" alt="party people 2"/></div>
  </div>

  <div id="myDIV">
  <div class="item4"><img className="image" src="/image/newyear_celebration.jpeg" alt="new year celebration"/></div>
  <div class="item5"><img className="image" src="/image/corporate_party.jpeg" alt="corporate party"/></div>
  <div class="item6"><img className="image" src="/image/birthday.jpeg" alt="birthday"/></div>
</div>
</div>

  );
}
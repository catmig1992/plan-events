import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "image/wedding.jpeg" },
  { url: "image/party_people.jpeg" },
  { url: "image/party_people2.jpeg" },
  { url: "image/newyear_celebration.jpeg" },
  { url: "image/kid_birthday.jpeg" },
  { url: "image/birthday.jpeg" }
];

const Gallery = () => {
  return (
    <div Class="imagegallery">
      <SimpleImageSlider
        width={1000}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Gallery;
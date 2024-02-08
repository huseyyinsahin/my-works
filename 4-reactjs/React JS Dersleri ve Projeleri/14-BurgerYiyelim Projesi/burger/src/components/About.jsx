import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          dolore reiciendis dicta laborum accusantium minima, labore suscipit
          excepturi voluptate commodi amet atque, nulla eos maxime dolorum?
          Suscipit consequuntur unde pariatur. Possimus, repudiandae commodi eum
          modi aut atque quidem. Fugit atque odio consequuntur iure reiciendis
          beatae ex consequatur commodi dicta consectetur non est quasi, at
          autem hic esse dolorem illum suscipit?Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ratione dolore reiciendis dicta laborum
          accusantium minima, labore suscipit excepturi voluptate commodi amet
          atque, nulla eos maxime dolorum? Suscipit consequuntur unde pariatur.
          Possimus, repudiandae commodi eum modi aut atque quidem. Fugit atque
          odio consequuntur iure reiciendis beatae ex consequatur commodi dicta
          consectetur non est quasi, at autem hic esse dolorem illum suscipit?
        </p>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import logo from "../logo.png";

const Home = ({ facility }) => {
  const { id, name, image } = facility;

  const images = require.context("../gymBuilding", true);
  let facilityImage = images(`./${image}`).default;

  return (
    <>
      <div className="home">
        <img
          src={facilityImage}
          alt={name}
          key={id}
          width="250px"
          height="250px"
          style={{ borderRadius: "5%" }}
        />
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import bioBttn from "./index.css"

function Trainers({ trainerList }) {
  const { name, image, bio } = trainerList;
  const [showBio, setShowBio] = useState(false);
  const [review, setReview] = useState("");

  const images = require.context("../trainerPhotos", true);
  let trainerImage = images(`./${image}`).default;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='trainer'>
      <img
        src={trainerImage}
        width="250px"
        height="250px"
        style={{ borderRadius: "10%" }}
      />
      <div>
        <h3>{name}</h3>
        <button id= "bioBttn"
          style={{ marginLeft: "300px" }} className= "bioBttn"
          onClick={() => setShowBio((showBio) => !showBio)}
        >
          {showBio ? "Hide Bio" : "Show Bio"} 
        </button>
        {showBio ? <p>{bio}</p> : null}
      </div>
    </div>
  );
}

export default Trainers;

import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";


function Trainers({ trainerList, comments }) {
  const { name, image, bio } = trainerList;
  const [showBio, setShowBio] = useState(false);
  const [review, setReview] = useState("");


  const images = require.context("../trainerPhotos", true);
  let trainerImage = images(`./${image}`).default;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

 

  return (
    <div>
      <img
        src={trainerImage}
        width="250px"
        height="250px"
        style={{ borderRadius: "10%" }}
      />
      <h3>{name}</h3>
      <button
        style={{ marginLeft: "300px" }}
        onClick={() => setShowBio((showBio) => !showBio)}
      >
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>
      {showBio ? <p>{bio}</p> : null}
    </div>
  );
}

export default Trainers;


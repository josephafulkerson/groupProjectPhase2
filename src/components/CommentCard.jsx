import React, { useState } from 'react'

const CommentCard = ({comment}) => {

  

    const [review, setReview] = useState("");
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }; 

    console.log(comment)
    return (
        <form onSubmit={handleSubmit}>
        <div className="commentbtn">
          <h2>Want to Leave a Review?</h2>
          <label> Leave Comment </label>
          <textarea
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit Comment" />
      </form>
    )
}

export default CommentCard

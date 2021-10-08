import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'


const Comments = ({comments, addComment }) => {

    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      addComment(review)
    }; 


    return (
      <>
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
        <input id="judge" type="submit" value="Submit Comment" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto'}} />
      </form>
      <CommentCard comments={comments} />
      </>

    )
}

export default Comments;

import React from 'react'
const CommentCard = ({comments}) => {


    return (
        <>
        <h4>Comments:</h4>
        <ul>
            {comments.map(item => <li style={{padding: '5px'}}>{item.comment} </li>)}
        </ul>
        </>
    )
}

export default CommentCard;



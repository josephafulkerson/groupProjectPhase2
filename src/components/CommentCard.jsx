import React from 'react'
const CommentCard = ({comments}) => {


    return (
        <>
        <h3>Comments:</h3>
        <ul>
            {comments.map(item => <li style={{padding: '5px'}}>{item.comment} </li>)}
        </ul>
        </>
    )
}

export default CommentCard;



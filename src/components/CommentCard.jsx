import React from 'react'

const CommentCard = ({comment}) => {
    console.log(comment)
    return (
        <ul>
            <li>{comment}</li>
        </ul>
    )
}

export default CommentCard

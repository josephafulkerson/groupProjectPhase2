import React, { useState, useEffect } from 'react'

function Trainers({trainerList}) {

    const { name, image, bio } = trainerList
    const [ showBio, setShowBio ] = useState(false)
    const [ comments, setComments ] = useState([])


    const images = require.context('../trainerPhotos', true)
    let trainerImage = images(`./${image}`).default;

    useEffect(() => {
        fetch('http://localhost:8000/comments')
        .then(r => r.json())
        .then(data => setComments(data))
    }, [])


    const renderComments = () => comments.map(item => <li>{item}</li>)
    return (
        <div>
            <img src={trainerImage} width='250px' height='250px' style={{borderRadius:"10%"}}/>
            <h3>{name}</h3>
            <button style={{marginLeft: '300px'}} onClick={() => setShowBio(showBio => !showBio)}>{showBio ? 'Hide Bio' : 'Show Bio'}</button>
            {showBio ? <p>{bio}</p> : null}
            <button style={{}}>Add Comment</button>
            <form>
                <input type='text' value='enter comment...'/>
            </form>
            <ul>{renderComments}</ul>
        </div>
    )
}

export default Trainers



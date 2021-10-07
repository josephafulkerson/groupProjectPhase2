import React, { useState, useEffect } from 'react'

function Trainers({trainerList}) {

    const { name, image, bio } = trainerList
    const [ showBio, setShowBio ] = useState(false)
    const [ comments, setComments ] = useState([])
    const [review, setReview] = useState("")


    const images = require.context('../trainerPhotos', true)
    let trainerImage = images(`./${image}`).default;

    useEffect(() => {
        fetch('http://localhost:8000/comments')
        .then(r => r.json())
        .then(data => setComments(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
         
    }

    return (
        <div>
            <img src={trainerImage} width='250px' height='250px' style={{borderRadius:"10%"}}/>
            <h3>{name}</h3>
            <button style={{marginLeft: '300px'}} onClick={() => setShowBio(showBio => !showBio)}>{showBio ? 'Hide Bio' : 'Show Bio'}</button>
            {showBio ? <p>{bio}</p> : null}
            <form onSubmit={handleSubmit}>
            <div className= "commentbtn">
            <h2>Want to Leave a Review?</h2>
            <label> Leave Comment </label>
                <textarea 
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <input type="submit" value="Submit Comment"/>
        </form>
    </div>

    )
}

export default Trainers



import React, { useState } from 'react'

function Trainers({trainerList}) {

    const { name, image, bio } = trainerList
    const [ showBio, setShowBio ] = useState(false)


    const images = require.context('../trainerPhotos', true)
    let trainerImage = images(`./${image}`).default;

    return (
        <div>
            <img src={trainerImage} width='250px' height='250px' style={{borderRadius:"10%"}}/>
            <h3>{name}</h3>
            <button onClick={() => setShowBio(showBio => !showBio)}>Show Bio</button>
            {showBio ? <p>{bio}</p> : null}
        </div>
    )
}

export default Trainers



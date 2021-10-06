import React from 'react'

function Trainers({trainerList}) {

    const { name, image, bio } = trainerList

    const images = require.context('../trainerPhotos', true)
    let trainerImage = images(`./${image}`).default;

    return (
        <div>
            <img src={trainerImage} width='250px' height='250px'/>
            <h3>{name}</h3>
            <p>{bio}</p>
        </div>
    )
}

export default Trainers



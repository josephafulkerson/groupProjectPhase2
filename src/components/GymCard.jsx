import React from 'react'

function GymCard({equipment}) {
    const { name, quantity, image } = equipment

    const images = require.context('../gymEquipment', true)
    let equipmentImage = images(`./${image}`).default;
   
    return (
        <div>
            <img src={equipmentImage} alt={name} width='200px' height='200px'/>
            <h3>{name}</h3>
            <p>{quantity}</p>
        </div>
    )
}

export default GymCard

//src/gymEquipment/BallMachine.jpg
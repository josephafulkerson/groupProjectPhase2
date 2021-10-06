import React from 'react'
import styled from 'styled-components';

function GymCard({equipment}) {
    const { name, quantity, image } = equipment

    const images = require.context('../gymEquipment', true)
    let equipmentImage = images(`./${image}`).default;
   
    return (
        <div style={{display: 'inline-block'}}>
            <Wrapper>
            <img src={equipmentImage} alt={name} width='200px' height='200px' style={{borderRadius:"5%"}}/>
            </Wrapper>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default GymCard;

const Wrapper = styled.div`
    border-radius: 50%;
`;
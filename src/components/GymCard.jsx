import React, { useState } from 'react'
import styled from 'styled-components';

function GymCard({equipment}) {
    const { name, quantity, image, moreInfo, SJCert, weightMax, muscleGroup } = equipment
    const [ showBtn, setShowBtn ] = useState(false)

    const images = require.context('../gymEquipment', true)
    let equipmentImage = images(`./${image}`).default;
   
    return (
        <div  style={{display: 'inline-block'}}>
            <Wrapper>
            <img src={equipmentImage} alt={name} width='200px' height='200px' style={{borderRadius:"5%"}}/>
            </Wrapper>
            <h3>{name}</h3>
            <button ClassName="Gym-info" onClick={() => setShowBtn(showBtn => !showBtn)}>{showBtn ? 'Hide Info' : 'More Info'}</button>
            {showBtn ? 
            <ul>
            <ul><strong>Quantity:</strong> {quantity}</ul>
            <ul><strong>More Info:</strong> {moreInfo}</ul>
            <ul><strong>Max Weight:</strong> {weightMax}</ul>
            <ul><strong>Muscle Group:</strong> {muscleGroup}</ul>
            <ul><strong>S & J Certified:</strong> {SJCert}</ul>
            </ul>
            :
            null }
        </div>
    )
}

export default GymCard;

const Wrapper = styled.div`
    border-radius: 50%;
`;
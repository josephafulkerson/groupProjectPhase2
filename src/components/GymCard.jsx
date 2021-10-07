import React, { useState } from 'react'
import styled from 'styled-components';

function GymCard({equipment}) {
    const { name, quantity, image, moreInfo, SJCert, weightMax, muscleGroup } = equipment
    const [ showBtn, setShowBtn ] = useState(false)

    const images = require.context('../gymEquipment', true)
    let equipmentImage = images(`./${image}`).default;
   
    return (
        <div className='gymCard'>
            <Wrapper>
            <img src={equipmentImage} alt={name} width='200px' height='200px' style={{borderRadius:"5%"}}/>
            </Wrapper>
            <h3>{name}</h3>
            <button onClick={() => setShowBtn(showBtn => !showBtn)}>{showBtn ? 'Hide Info' : 'More Info'}</button>
            {showBtn ? 
            <ul>
            <li><strong>Quantity:</strong> {quantity}</li>
            <li><strong>More Info:</strong> {moreInfo}</li>
            <li><strong>Max Weight:</strong> {weightMax}</li>
            <li><strong>Muscle Group:</strong> {muscleGroup}</li>
            <li><strong>S & J Certified:</strong> {SJCert}</li>
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
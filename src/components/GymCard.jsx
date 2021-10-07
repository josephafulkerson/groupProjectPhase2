import React, { useState } from 'react'
import styled from 'styled-components';

function GymCard({equipment}) {
    const { name, quantity, image, moreInfo, SJCert } = equipment
    const [ showBtn, setShowBtn ] = useState(false)

    const images = require.context('../gymEquipment', true)
    let equipmentImage = images(`./${image}`).default;
   
    return (
        <div style={{display: 'inline-block'}}>
            <Wrapper>
            <img src={equipmentImage} alt={name} width='200px' height='200px' style={{borderRadius:"5%"}}/>
            </Wrapper>
            <h3>{name}</h3>
            <button onClick={() => setShowBtn(showBtn => !showBtn)}>{showBtn ? 'Hide Info' : 'More Info'}</button>
            {showBtn ? 
            <div>
            <p>Quantity: {quantity}</p>
            <p>{moreInfo}</p>
            <p>S & J Certified: {SJCert}</p>
            </div>
            :
            null }
        </div>
    )
}

export default GymCard;

const Wrapper = styled.div`
    border-radius: 50%;
`;
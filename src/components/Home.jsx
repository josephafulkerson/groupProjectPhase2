import React from 'react'
import styled from "styled-components";


const Home = ({facility}) => {
    const {id, name, image} = facility

    const images = require.context('../gymBuilding', true)
    let facilityImage = images(`./${image}`).default;

    return (
        <div style={{display: 'inline-block'}}>
        <Wrapper>
        <img src={facilityImage} alt={name} key={id}
        width='200px' height='200px' style={{borderRadius:"5%"}}/>
        </Wrapper>
            <p></p>
        </div>
    )
}

export default Home;

const Wrapper = styled.div`
    border-radius: 50%;
`;
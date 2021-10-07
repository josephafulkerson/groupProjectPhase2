import React, { useState, useEffect } from 'react'
import GymCard from './GymCard'
import { BASE_API_URL } from "../const";
import Home from "./Home"


function Gym() {
    const [ equipment, setEquipment ] = useState([])
    const [ facility, setFacility ] = useState([])


    useEffect(() => {
        fetch(`${BASE_API_URL}/equipment`)
        .then(r => r.json())
        .then(data => setEquipment(data))
    }, [])

    useEffect(() => {
        fetch(`${BASE_API_URL}/facility`)
        .then(r => r.json())
        .then(data => setFacility(data)) 
            // setFacility(data))
    }, [])


    return (
        <div>
            <p>TEST</p>
            {equipment.map(items => <GymCard equipment={items} key={items.id} />)}
            {facility.map(stock => <Home facility={stock} key={stock.id} />)}
        </div>
    )
}

export default Gym

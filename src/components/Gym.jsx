import React, { useState, useEffect } from 'react'
import GymCard from './GymCard'
import { BASE_API_URL } from "../const";


function Gym() {
    const [ equipment, setEquipment ] = useState([])

    useEffect(() => {
        fetch(`${BASE_API_URL}/equipment`)
        .then(r => r.json())
        .then(data => setEquipment(data))
    }, [])



    return (
        <div>
            <p>TEST</p>
            {equipment.map(items => <GymCard equipment={items} key={items.id} />)}
        </div>
    )
}

export default Gym

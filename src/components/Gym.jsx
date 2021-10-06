import React, { useState, useEffect } from 'react'
import GymCard from './GymCard'


function Gym() {
    const [ equipment, setEquipment ] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/equipment')
        .then(r => r.json())
        .then(data => setEquipment(data))
    }, [])


    return (
        <div>
            {equipment.map(items => <GymCard equipment={items} key={items.id} />)}
        </div>
    )
}

export default Gym

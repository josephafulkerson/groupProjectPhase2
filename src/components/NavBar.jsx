import React, { useState, useEffect } from 'react'
import Gym from './Gym'
import Trainers from './Trainers'
import JoinNow from './JoinNow'

function NavBar() {

const [ trainers, setTrainers ] = useState([])

useEffect(() => {
    fetch(" http://localhost:8000/trainers")
    .then(r => r.json())
    .then(data => setTrainers(data))
    }, [])

    return (
        <div>
            <Gym />
           {trainers.map(item => <Trainers trainerList={item} key={item.id}/>)}
            <JoinNow />
            <p>TEST</p>
        </div>
    )
}

export default NavBar

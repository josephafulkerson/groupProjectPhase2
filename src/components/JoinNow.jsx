import React from 'react'
import {useState} from 'react'

function JoinNow (addMember) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [medals, setMedals] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        const app = { firstName, lastName, phoneNumber, medals, bloodType, email}
        console.log(app)
    }

    return (
        <div className="NewMemberForm">
            <h2>Submit Application</h2>
            <form onSubmit={handleSubmit}>
            <label> First Name: </label>
                <textarea 
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            <label> Last Name:</label>
                <textarea 
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            <label> Membership: </label>
                <select
                    value={medals}
                    onChange={(e) => setMedals(e.target.value)}
                    >
                    <option value=""></option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <optoin value="Gold">Gold</optoin>
                </select>
            <label> Phone Number: </label>
                <textarea 
                name="description" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />

            <label> Email Address: </label>
                <input 
                    type="email" 
                    name="description"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            <label> Blood Type: </label>
                <select
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    >
                    <option value=""></option>    
                    <option value="Type A+">Type A+</option>
                    <option value="Type A-">Type A-</option>
                    <option value="Type B+">Type B+</option>
                    <option value="Type B-">Type B-</option>
                    <option value="Type AB+">Type AB+</option>
                    <option value="Type AB-">Type AB-</option>
                    <option value="Type O+">Type O+</option>
                    <option value="Type O-">Type O-</option>
                </select>
                
                {/* OnChange => setFormData */}
                {/* Aler on submit */}

            <input type="submit" value="Apply Now"/>
        </form>
        </div>
    )
}

export default JoinNow

import React from 'react'
import {useState} from 'react'
import swal from 'sweetalert'
import NewMemberForm from './index.css'


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
        // e.currentTarget.reset()
        swal(`Thank you for Applying, ${firstName} ${lastName}!`, `You may get an email for the ${medals} membership but don't count on it.` , "success")
        
    }

    return (
        <div className="NewMemberForm" style={{backgroundImage: `url('https://media2.giphy.com/media/h4U8d8WuHeftRLADek/giphy.gif?cid=6c09b952u3xj8jp59y2uu9c8ogkhdjorlln8u0f4qzaff4mu&rid=giphy.gif&ct=s')`}} >
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
                    <option value="Bronze">Bronze $100.00</option>
                    <option value="Silver">Silver $500.00</option>
                    <option value="Gold">Gold $1400.00</option>
                </select>
            <label> Phone Number: </label>
                <textarea 
                name="description" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />

            <label> Email Address: </label>
                <textarea 
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

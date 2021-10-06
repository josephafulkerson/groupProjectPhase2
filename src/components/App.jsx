import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import useState from 'react'

const Url = 'http://localhost:8000/equipment'

const [members, setMembers] = useState([])

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <JoinNow addMember={addMember} />
    </div>
  );
}

function addMember(newMember) {
  fetch(Url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(newMember)})
    .then(resp => resp.json())
    .then(resp => {setMembers([...members, resp])})
  }
  

export default App;

//Swole & Jacked REact ??
import React, {useState} from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import JoinNow from "./JoinNow"

const Url = 'http://localhost:8000/equipment'



function App(addMember) {

  const [members, setMembers] = useState([])

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
    
  

  return (
    <div>
      <Header />
      <NavBar />
    </div>
  );
}


export default App;

//Swole & Jacked REact ??
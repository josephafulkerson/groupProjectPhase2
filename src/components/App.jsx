import React, {useState, useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import JoinNow from "./JoinNow"
import Gym from "./Gym";
import Home from "./Home";
import Trainers from "./Trainers";
import { Route, Switch } from "react-router-dom";
import { BASE_API_URL } from "../const";
const Url = 'http://localhost:8000/equipment'



function App(addMember) {

  const [members, setMembers] = useState([])
  const [trainers, setTrainers] = useState([]);
  const [ facility, setFacility ] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/trainers`)
      .then((r) => r.json())
      .then((data) => setTrainers(data));
  }, []);

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

    useEffect(() => {
      fetch(`${BASE_API_URL}/facility`)
      .then(r => r.json())
      .then(data => setFacility(data)) 
  }, [])
    
  return (
    <div>
      <Header />
      <NavBar />
      <main>
      <Route exact path='/'>
      {facility.map(stock => <Home facility={stock} key={stock.id} />)}
        </Route>
        <Route exact path='/gym'>
          <Gym />
        </Route>
        <Route exact path='/trainers'>
          {trainers.map((item) => (
            <Trainers trainerList={item} key={item.id} />
          ))}
        </Route>
        <Route exact path='/join'>
          <JoinNow />
        </Route>
        </main>
    </div>
  );
}


export default App;

//Swole & Jacked REact ??
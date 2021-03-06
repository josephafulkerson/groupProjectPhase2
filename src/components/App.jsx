import React, {useState, useEffect } from "react";
import Header from "./Header";
import JoinNow from "./JoinNow"
import Gym from "./Gym";
import Home from "./Home";
import Trainers from "./Trainers";
import { Route, Switch } from "react-router-dom";
import { BASE_API_URL } from "../const";
import Comments from "./Comments";
import logo from '../logo.png'
import Info from "./Info";
const Url = 'http://localhost:8000/equipment'



function App(addMember) {

  const [members, setMembers] = useState([])
  const [trainers, setTrainers] = useState([]);
  const [ facility, setFacility ] = useState([]);
  const [ comments, setComments ] = useState([]);
 
 

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

  useEffect(() => {
    fetch('http://localhost:8000/comments')
    .then(r => r.json())
    .then(data => setComments(data))
}, [])

function addComment(newComment) {fetch('http://localhost:8000/comments', {
  method: "POST",
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({
    comment: newComment
  })
})
.then(r => r.json())
.then(data => setComments([...comments, data]))
}

  return (
    <div >
      <Header />
      <main>
      <Route exact path='/'>
      <Info />
      {facility.map(stock => <Home facility={stock} key={stock.id} />)}
        </Route>
        <Route exact path='/gym'>
          <Gym />
        </Route>
        <Route exact path='/trainers'>
          {trainers.map((item) => (
            <Trainers trainerList={item} key={item.id} />
          ))}
          <Comments comments={comments} addComment={addComment} />
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

import React, { useState, useEffect } from "react";
import Gym from "./Gym";
import Trainers from "./Trainers";
import JoinNow from "./JoinNow";
import { Switch, Route } from "react-router-dom";

function NavBar() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:8000/trainers")
      .then((r) => r.json())
      .then((data) => setTrainers(data));
  }, []);



  return (
    <div>
      <Switch>
        <Route path='/'>
          <Gym />
        </Route>
        <Route path='/trainers'>
          {trainers.map((item) => (
            <Trainers trainerList={item} key={item.id} />
          ))}
        </Route>
        <Route path='/join'>
          <JoinNow />
        </Route>
      </Switch>
    </div>
  );
}

export default NavBar;

import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import * as puppyAPI from "../../utilities/puppies-api";
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from "../EditPuppyPage/EditPuppyPage";
import PuppiesPage from "../PuppiesPage/PuppiesPage";
import NewPuppyPage from "../NewPuppyPage/NewPuppyPage";
import "./App.css";

export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getPuppies() {
      // retrieve the puppies data
      const puppies = await puppyAPI.getAll();
      // set it to state
      setPuppies(puppies);
    }
    getPuppies();
  }, []);

  useEffect(() => {
    // This is listenting for each time puppies state is changed,
    // then will run our function below to reroute
    history.push("/");
  }, [puppies, history]);

  async function handleAddPuppy(newPuppyData) {
    const newPuppy = await puppyAPI.create(newPuppyData);
    setPuppies([...puppies, newPuppy]);
  }

  // code the update puppy handler function to invoke the fetch call and update state
  async function handleUpdatePuppy(updatedPuppyData) {
    // invoke the fetch call from api services
    const updatedPuppy = await puppyAPI.update(updatedPuppyData);
    // set the new state using the result from the fetch call
    const newPuppiesArray = puppies.map((p) =>
      p._id === updatedPuppy._id ? updatedPuppy : p
    );
    setPuppies(newPuppiesArray);
  }

  async function handleDeletePuppy(id) {
    await puppyAPI.deleteOne(id);
    setPuppies(puppies.filter((puppy) => puppy._id !== id));
  }
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/puppies">
              <PuppiesPage puppies={puppies} handleDeletePuppy={handleDeletePuppy}/>
            </Route>
            <Route exact path="/puppies/new">
              <NewPuppyPage handleAddPuppy={handleAddPuppy} />
            </Route>
            <Route exact path="/puppies/details">
              <PuppyDetailPage />
            </Route>
            <Route exact path="/puppies/edit">
              <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
            </Route>
            <Redirect to="/puppies" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}


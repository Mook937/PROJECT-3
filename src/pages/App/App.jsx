import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import * as surfSpotAPI from "../../utilities/surfspots-api";
import SurfSpotDetailPage from "../SurfSpotDetailPage/SurfSpotDetailPage";
import EditSurfSpotPage from "../EditSurfSpotPage/EditSurfSpotPage";
import SurfSpotPage from "../SurfSpotPage/SurfSpotPage";
import NewSurfSpotPage from "../NewSurfSpotPage/NewSurfSpotPage";
import "./App.css";

export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [surfspots, setsurfspots] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getSurfSpots() {
      const surfspots = await surfSpotAPI.getAll();

      setsurfspots(surfspots);
    }
    getSurfSpots();
  }, []);

  useEffect(() => {
    history.push("/");
  }, [surfspots, history]);

  async function handleAddSurfSpot(newSurfSpotData) {
    const newSurfSpot = await surfSpotAPI.create(newSurfSpotData);
    setsurfspots([...surfspots, newSurfSpot]);
  }

  async function handleUpdateSurfSpot(updatedSurfSpotData) {
    const updatedSurfSpot = await surfSpotAPI.update(updatedSurfSpotData);
    const newsurfspotsArray = surfspots.map((p) =>
      p._id === updatedSurfSpot._id ? updatedSurfSpot : p
    );
    setsurfspots(newsurfspotsArray);
  }

  async function handleDeleteSurfSpot(id) {
    await surfSpotAPI.deleteOne(id);
    setsurfspots(surfspots.filter((SurfSpot) => SurfSpot._id !== id));
  }
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/surfspots">
              <SurfSpotPage
                surfspots={surfspots}
                handleDeleteSurfSpot={handleDeleteSurfSpot}
              />
            </Route>
            <Route exact path="/surfspots/new">
              <NewSurfSpotPage handleAddSurfSpot={handleAddSurfSpot} />
            </Route>
            <Route exact path="/surfspots/details">
              <SurfSpotDetailPage />
            </Route>
            <Route exact path="/surfspots/edit">
              <EditSurfSpotPage handleUpdateSurfSpot={handleUpdateSurfSpot} />
            </Route>
            <Redirect to="/surfspots" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from "react-router-dom";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Callback from "./components/Callback";
import Profile from "./components/Profile";
import Playlists from "./components/Playlists";

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleCode = async (code) => {
    // console.log("code", code)
    let response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    })
    response = await response.json();
    console.log("response", response)
    setCurrentUser(response)

  }
  console.log("currentUser", currentUser)


  return (
    <Router>
      <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/callback">
            <Callback handleCode={handleCode} currentUser={currentUser} />
          </Route>
          <Route exact path="/profile">
            <Profile currentUser={currentUser} />
          </Route>
          <Route exact path="/playlists">
            <Playlists/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



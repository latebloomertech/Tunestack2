import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing"
import Header from "./components/Header";

function App() {
//   const [count, setCount] = useState(0);
  const [accessToken, setAccessToken] = useState(null)


  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  useEffect(() => {
    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      console.log([hashParams])
      console.log([hashParams.access_token])
      setAccessToken(hashParams.access_token);

    }
    getHashParams()

  }, [setAccessToken])

console.log("access token", {accessToken})
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          {/* <Route exact path="/">
            <h1>This is Tunestack. Page Count: {count}</h1>
            <a href="http://localhost:3000/api/v1/login">
              <button>Sign in with Spotify</button>
              </a>
          </Route> */}
          <Route exact path="/">
            <Landing accessToken={accessToken} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
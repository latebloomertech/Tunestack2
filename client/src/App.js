import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <h1>This is Tunestack. Page Count: {count}</h1>
            {/* <a href="/api/v1/login">
              <button>Sign in with Spotify</button>
            </a> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
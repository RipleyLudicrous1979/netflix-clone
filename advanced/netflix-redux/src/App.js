/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react router dom.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Loading from "./components/loading/Loading";
// import global styling.
import "./index.css";
// import use selector to get state from the store.
import { useSelector } from "react-redux";
// create App components.
function App() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
      {loading && loading.isShown && <Loading />}
    </>
  );
}
// export App component.
export default App;

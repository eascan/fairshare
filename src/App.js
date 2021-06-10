import "./App.css";

import Header from "./components/Header";

import Expense from "./components/Expense";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Main from "./components/Main";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="mainLoader">
          <RingLoader color={"#EC7241"} loading={loading} size={150} />
        </div>
      ) : (
        <Router>
          <Header />
          <div className="app__body">
            <LeftSideBar />
            <Switch>
              <Route path="/expense">
                <Expense />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
            <RightSideBar />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;

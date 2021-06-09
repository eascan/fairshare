import "./App.css";

import Header from "./components/Header";
import SidebarOption from "./components/SidebarOption";
import Expense from "./components/Expense";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Main from "./components/Main";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
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
      </div>
    </Router>
  );
}

export default App;

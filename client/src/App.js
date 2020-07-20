import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CalenderPage from "./pages/CalenderPage.js";
import SchedulePage from "./pages/SchedulePage.js";
import AccountingPage from "./pages/AccountingPage.js";

import "./App.css";

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={CalenderPage} /> {/*추후에 인증 화면으로 교체*/}
          <Route exact path="/calender" component={CalenderPage} />
          <Route exact path="/schedule" component={SchedulePage} />
          <Route exact path="/accounting" component={AccountingPage} />
        </Switch>
      </>
    </Router>
  );
}

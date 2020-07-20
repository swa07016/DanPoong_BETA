import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "./components/Nav.js";
import CalendarPage from "./pages/CalendarPage.js";
import SchedulePage from "./pages/SchedulePage.js";
import AccountingPage from "./pages/AccountingPage.js";

import "./App.css";

const { Footer } = Layout;

export default function App() {
  return (
    <Layout className="layout">
      <Router>
      <NavBar defaultKey={1}></NavBar>
        <Switch>
          <Route exact path="/" component={CalendarPage} />
          {/*추후에 인증 화면으로 교체*/}
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/accounting" component={AccountingPage} />
        </Switch>
        <Footer className="footer">Made by swa07016 and dhxl50</Footer>
      </Router>
    </Layout>
  );
}

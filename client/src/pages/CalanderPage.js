import React, { useState } from "react";
import NavBar from "../components/Nav.js";
import { Layout } from "antd";
import { Calendar, Alert } from "antd";

import "./CalanderPage.css";

const { Footer, Content } = Layout;

export default function CalanderPage() {
  const [selectedValue, setSelectedValue] = useState("Please select any day");

  const onSelect = (value) => {
    setSelectedValue("You selected "+value.format("YYYY-MM-DD"));
  };

  return (
    <Layout className="layout">
      <NavBar defaultKey={1}></NavBar>
      <Content className="content">
        <h2 className="headerText">안녕하세요! 따개비님!</h2>
        <Alert className="alert" message={selectedValue} />
        <Calendar className="calander" onSelect={onSelect} />
      </Content>
      <Footer className="footer">Made by swa07016 and dhxl50</Footer>
    </Layout>
  );
}
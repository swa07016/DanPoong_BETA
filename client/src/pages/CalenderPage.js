import React, { useState } from "react";
import NavBar from "../components/Nav.js";
import { Layout, AutoComplete } from "antd";
import { Calendar, Alert } from "antd";
import { CloseCircleFilled  } from "@ant-design/icons";
import "./CalenderPage.css";

const { Footer, Content } = Layout;

export default function CalanderPage() {
  const [checkedDate, setCheckedDate] = useState(new Set());
  const [selectedValue, setSelectedValue] = useState("Please select any day");

  const onSelect = (value) => {
    const date = value.format("YYMMDD");
    if (checkedDate.has(date)) {
      checkedDate.delete(date);
    } else {
      let newCheckedDate = checkedDate;
      newCheckedDate.add(date);
      setCheckedDate(newCheckedDate);
    }

    setSelectedValue("You selected " + value.format("YYYY-MM-DD"));
  };

  const dateCellRender = (value) => {
    const date = value.format("YYMMDD");
    if (checkedDate.has(date)) {
      return (
        <CloseCircleFilled 
          style={{ fontSize: 30, color: "#FB6262" }}
        />
      );
    }
  };

  return (
    <Layout className="layout">
      <NavBar defaultKey={1}></NavBar>
      <Content className="content">
        <h2 className="headerText">안녕하세요! 따개비님!</h2>
        <Alert className="alert" message={selectedValue} />
        <Calendar
          className="calander"
          onSelect={onSelect}
          dateCellRender={dateCellRender}
        />
      </Content>
      <Footer className="footer">Made by swa07016 and dhxl50</Footer>
    </Layout>
  );
}

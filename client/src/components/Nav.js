import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./Nav.css";

const { Header } = Layout;

export default function Nav({ defaultKey }) {
  return (
    <Header className="header">
      <h2 className="title" >Dan-Poong</h2>
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[defaultKey.toString()]}
      >
        <Menu.Item key="1">
          <Link to="/calendar">캘린더</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/schedule">일정</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/accounting">회계부</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

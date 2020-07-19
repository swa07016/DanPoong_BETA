import React from "react";
import NavBar from "../components/Nav.js";
import { Layout } from "antd";

const { Footer, Content } = Layout;
export default function SchedulePage() {
  return (
    <Layout>
      <NavBar defaultKey={2}></NavBar>
      <div>일정페이지입니다.</div>
    </Layout>
  );
}

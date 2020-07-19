import React from "react";
import NavBar from "../components/Nav.js";
import { Layout } from "antd";

const { Footer, Content } = Layout;
export default function AccountingPage() {
  return (
    <Layout>
      <NavBar defaultKey={3}></NavBar>
      <div>회계부입니당</div>
    </Layout>
  );
}

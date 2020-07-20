import React, { useState } from "react";
import { Layout, Calendar, Alert, Button } from "antd";
import "./CalendarPage.css";
import SetUpCalendar from "../components/SetUpCalendar.js";

const { Content } = Layout;

// userData from
// {
//   userName:String,
//   isAdmin:Boolean,
//   isSetUp:Boolean
// }
const testUser = {
  userName: "따개비",
  isAdmin: true,
  isSetUp: false,
};

export default function CalendarPage() {
  const [isSetUp, setIsSetUp] = useState(testUser.isSetUp);

  if (!isSetUp) {
    return (
      <Content className="content"> {/*Page 컴포넌트에서 항상 Content로 감싸줄.. 것? */}
        <SetUpCalendar userData={testUser} setIsSetUp={setIsSetUp} /> {/*함수 넘겨줘야함 */}
      </Content>
    );
  } else {
    return (
      <Content className="content">
        <Alert className="alert" message="이건 그냥 캘린더임" />
        <Calendar className="calendar" />
      </Content>
    );
  }
}

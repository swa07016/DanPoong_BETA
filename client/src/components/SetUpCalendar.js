import React, { useState } from "react";
import { Button, message } from "antd";

import SelectableCalendar from "./SelectableCalendar.js";

export default function SetUpCalendar({ userData, setIsSetUp }) {
  const numOfPage = 3;
  const [renderNum, setRenderNum] = useState(0);

  const handleNextBtn = () => {
    if (renderNum === numOfPage - 1) {
      complete();
      setIsSetUp(true);
    }
    setRenderNum(renderNum + 1);
  };

  const complete = () => {
    message.success("설정을 완료하였습니다.");
  };

  switch (renderNum) {
    case 0:
      return (
        <>
          <h1 className="headerText">안녕하세요 {userData.userName}님!</h1>
          <h1 className="headerText">단풍으로 최적의 여행날짜를 찾아보세요!</h1>
          <Button type="primary" onClick={handleNextBtn}>
            시작하기
          </Button>
        </>
      );
      break;
    case 1:
      return (
        <>
          <p>안되는날을 고르십쇼.</p>;
          <SelectableCalendar />
          <Button type="primary" onClick={handleNextBtn}>
            다음
          </Button>
        </>
      );
      break;
    case 2:
      return (
        <>
          <p>반갑다 3번 페이지</p>;
          <Button type="primary" onClick={handleNextBtn}>
            끝 버튼 onClick시 isSetUp : true로 변경 후 상위 컴포넌트 복귀
          </Button>
        </>
      );
      break;
  }
}

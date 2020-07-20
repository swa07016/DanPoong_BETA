import React, { useState } from "react";
import { Calendar, Alert } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

export default function SelectableCalendar() {
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
      return <CloseCircleFilled style={{ fontSize: 30, color: "#FB6262" }} />;
    }
  };

  return (
    <>
      <Alert className="alert" message={selectedValue} />
      <Calendar
        className="calendar"
        onSelect={onSelect}
        dateCellRender={dateCellRender}
      />
    </>
  );
}

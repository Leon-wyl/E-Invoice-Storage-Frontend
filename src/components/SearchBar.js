import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { getInvoiceData } from "../pages/api";
import { Input, Space, DatePicker } from "antd";

const SearchBar = (props) => {
  const { filter, setInvoiceData } = props;
  const [filterValue, setFilterValue] = useState("");
  const firstUpdate = useRef(true);

  const fetchDataByFilter = async (filter, value) => {
    const data = await getInvoiceData(filter, value);
    setInvoiceData(data);
  };

  const timeoutId = () =>
    setTimeout(() => {
      fetchDataByFilter(filter, filterValue);
    }, 250);

  useEffect(() => {
    if (firstUpdate.current === false) {
      timeoutId();
    } else {
      firstUpdate.current = false;
    }

    // This returned function will invoke before the next call of of this useEffect hook
    return () => {
      clearTimeout(timeoutId());
    };
  }, [filterValue]);

  return (
    <Space direction="vertical">
      {filter !== "date" && (
        <Input
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={(e) => setFilterValue(e.target.value)}
        />
      )}
      {filter === "date" && (
        <DatePicker
          onChange={(date, dateString) => setFilterValue(dateString)}
        />
      )}
    </Space>
  );
};

export default SearchBar;

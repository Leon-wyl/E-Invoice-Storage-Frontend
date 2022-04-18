import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { getInvoiceData } from "../pages/api";
import { Input, Space, DatePicker } from "antd";

const SearchBar = (props) => {
  const { filter, setInvoiceData, setNeedToLoad } = props;
  const { Search } = Input;
  const [filterValue, setFilterValue] = useState("");

  const fetchDataByFilter = async (filter, value) => {
    const data = await getInvoiceData(filter, value);
    setInvoiceData(data);
  };

  useEffect(() => {
    //fetchDataByFilter(filter, filterValue);

    const timeoutId = setTimeout(() => {
      fetchDataByFilter(filter, filterValue);
    }, 250);

    // This returned function will invoke before the next call of of this useEffect hook
    return () => {
      clearTimeout(timeoutId);
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

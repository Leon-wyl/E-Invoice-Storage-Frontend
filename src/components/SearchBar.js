import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { getInvoiceData } from "../pages/api";
import { Input, Space, DatePicker } from "antd";

const SearchBar = (props) => {
  const { filter, setInvoiceData } = props;
  // 第一步：第一次加载: loadApiByFirstTime
  // 已经在InvoicePage用useEffect完成

  // 第二步：根据filterValue加载：loadApiByUserInput
  // filterKey的更改不影响页面, filterValue更改的时候延时请求
  // filterKey用一个useState保存状态，filterValue更改时在onchange函数call Api，延时0.25秒

  const listenOnChange =  (filterValue) => {
    // 用这个filterValue去call Api
    setTimeout(async () => {
      const data = await getInvoiceData(filter, filterValue);
      setInvoiceData(data);
    }, 250);
  }

  return (
    <Space direction="vertical">
      {filter !== "date" && (
        <Input
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={(e) => listenOnChange(e.target.value)}
        />
      )}
      {filter === "date" && (
        <DatePicker
          onChange={(date, dateString) => listenOnChange(dateString)}
        />
      )}
    </Space>
  );
};

export default SearchBar;

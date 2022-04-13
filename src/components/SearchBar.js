import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { getInvoiceDataByFilter } from "../pages/api";
import { Input, Space, DatePicker } from "antd";

const SearchBar = (props) => {
  const { filter, setInvoiceData, setNeedToLoad } = props;
  const { Search } = Input;
  const [filterValue, setFilterValue] = useState("");

  const onChange = (e) => {
    setFilterValue(e.target.value);
  };

	const onChangeDate = (date, dateString) => {
		setFilterValue(dateString);
	}

  useEffect(() => {
    const onSearch = (filter, filterValue) => {
      const fetchDataByFilter = async (filter, value) => {
        if (filter === "filter" || value === "") {
          console.log(typeof setNeedToLoad);
          setNeedToLoad(true);
        } else {
          const data = await getInvoiceDataByFilter(filter, value);
          setInvoiceData(data);
        }
      };
      fetchDataByFilter(filter, filterValue);
    };

    const timeoutId = setTimeout(() => {
      onSearch(filter, filterValue);
    }, 500);

    // This returned function will invoke before the next call of of this useEffect hook
    return () => {
      clearTimeout(timeoutId);
    };
  }, [filterValue]);

  return (
    <Space direction="vertical">
      {filter !== "date" && 
			<Input
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onChange={onChange}
      />}
			{filter === "date" &&
			<DatePicker onChange={onChangeDate}/>}
    </Space>
  );
};

export default SearchBar;

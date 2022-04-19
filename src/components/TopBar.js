import React, { useState } from "react";
import { Space, Button } from "antd";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import AddNewInvoiceButton from "./AddNewInvoiceButton";
import { LogoutOutlined } from "@ant-design/icons";

const TopBar = (props) => {
  const { setNeedToLoad, setInvoiceData } = props;
  const [filter, setFilter] = useState("filter");
	let navigate = useNavigate();
	const logout = () => navigate("/");

  return (
    <Space wrap>
      <FilterButton filter={filter} setFilter={setFilter} setNeedToLoad={setNeedToLoad} />
      <SearchBar
        filter={filter}
        setInvoiceData={setInvoiceData}
        setNeedToLoad={setNeedToLoad}
      />
      <AddNewInvoiceButton setNeedToLoad={setNeedToLoad} />
	  <Button size="large" onClick={logout}><LogoutOutlined />Logout</Button>
    </Space>
  );
};

export default TopBar;

import React, { useState } from "react";
import { Space } from "antd";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import AddNewInvoiceButton from "./AddNewInvoiceButton";

const TopBar = (props) => {
  const { setNeedToLoad, setInvoiceData } = props;
  const [filter, setFilter] = useState("filter");

  return (
    <Space wrap>
      <FilterButton filter={filter} setFilter={setFilter} />
      <SearchBar
        filter={filter}
        setInvoiceData={setInvoiceData}
        setNeedToLoad={setNeedToLoad}
      />
      <AddNewInvoiceButton setNeedToLoad={setNeedToLoad} />
    </Space>
  );
};

export default TopBar;

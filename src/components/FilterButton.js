import React from "react";
import "antd/dist/antd.css";
import { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FilterButton = (props) => {
  const [filterPresentName, setFilterPresentName] = useState("Filter");
  const { filter, setFilter} = props;

  const handleMenuClick = (e) => {
    if (e.key === "Invoice Id") {
      setFilter("id");
    } else if (e.key === "Issue Date") {
      setFilter("date");
    } else if (e.key === "Supplier") {
      setFilter("supplier");
    } else if (e.key === "Supplier Country") {
      setFilter("supplierCountry");
    } else if (e.key === "Customer") {
      setFilter("customer");
    } else if (e.key === "Customer Country") {
      setFilter("customerCountry");
    } else {
      setFilter("filter");
    }
    setFilterPresentName(e.key);
  };

  const menu = (
    <Menu>
      {filter !== "filter" && (
        <Menu.Item key="Filter" onClick={handleMenuClick}>
          Filter
        </Menu.Item>
      )}
      {filter !== "id" && (
        <Menu.Item key="Invoice Id" onClick={handleMenuClick}>
          Invoice Id
        </Menu.Item>
      )}
      {filter !== "date" && (
        <Menu.Item key="Issue Date" onClick={handleMenuClick}>
          Issue Date
        </Menu.Item>
      )}
      {filter !== "supplier" && (
        <Menu.Item key="Supplier" onClick={handleMenuClick}>
          Supplier
        </Menu.Item>
      )}
      {filter !== "supplierCountry" && (
        <Menu.Item key="Supplier Country" onClick={handleMenuClick}>
          Supplier Country
        </Menu.Item>
      )}
      {filter !== "customer" && (
        <Menu.Item key="Customer" onClick={handleMenuClick}>
          Customer
        </Menu.Item>
      )}
      {filter !== "customerCountry" && (
        <Menu.Item key="Customer Country" onClick={handleMenuClick}>
          Customer Country
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button size="large">
          {filterPresentName} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default FilterButton;

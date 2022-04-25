import React, { useState, useEffect } from "react";
import { Space, Card } from "antd";
import styles from "./InvoicePage.module.css";
import TopBar from "../components/TopBar";
import InvoiceTable from "../components/InvoiceTable";
import axios from "axios";
import { getInvoiceData } from "./api";
// https://invoice-storage.herokuapp.com

const InvoicePage = () => {
  const [invoiceData, setInvoiceData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setInvoiceData(await getInvoiceData());
    };
    fetchData();
  }, []);
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <TopBar setInvoiceData={setInvoiceData} />
      </div>
      <Card>
        <InvoiceTable data={invoiceData} setInvoiceData={setInvoiceData} />
      </Card>
    </div>
  );
};

export default InvoicePage;

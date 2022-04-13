import React, {useState, useEffect} from "react";
import { Space, Card } from "antd";
import styles from "./InvoicePage.module.css";
import TopBar from "../components/TopBar";
import InvoiceTable from "../components/InvoiceTable";
import axios from "axios";
import {getInvoiceData} from "./api";
// https://invoice-storage.herokuapp.com

const InvoicePage = () => {
	const [needToLoad, setNeedToLoad] = useState(true)
	const [invoiceData, setInvoiceData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			if (needToLoad) {
				const data = await getInvoiceData();
				setInvoiceData(data);
				setNeedToLoad(false);
			}
		}
		fetchData()
	}, [needToLoad]);
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <TopBar setNeedToLoad={setNeedToLoad} setInvoiceData={setInvoiceData}/>
      </div>
      <Card>
        {invoiceData.length !== 0 && <InvoiceTable data={invoiceData}  setNeedToLoad={setNeedToLoad} />}
      </Card>
    </div>
  );
};

export default InvoicePage;

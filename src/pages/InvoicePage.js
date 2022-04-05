import React, {useState, useEffect} from "react";
import { Space, Card } from "antd";
import styles from "./InvoicePage.module.css";
import TopBar from "../components/TopBar";
import InvoiceTable from "../components/InvoiceTable";
import axios from "axios";
// https://invoice-storage.herokuapp.com
const InvoicePage = () => {
	const [invoiceData, setInvoiceData] = useState([]);
	useEffect(() => {
		const getInvoiceData = async () => {
			const response = await axios({
				method: "get",
				url: "http://127.0.0.1:5000/list_all",
				headers: {},
				data: {},
			});
			console.log(response.data);
			setInvoiceData(response.data)
		};
		getInvoiceData();
	}, []);


  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <TopBar />
      </div>
      <Card>
        <InvoiceTable data={invoiceData} />
      </Card>
    </div>
  );
};

export default InvoicePage;

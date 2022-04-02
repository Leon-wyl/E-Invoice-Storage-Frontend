import React from 'react';
import { Space, Card } from 'antd';
import styles from './InvoicePage.module.css';
import TopBar from '../components/TopBar'
import InvoiceTable from '../components/InvoiceTable';

const InvoicePage = () => {
	return (
		<div className={styles.bg}>
				<div className={styles.card}>
					<TopBar />
				</div>
				<Card>
					<InvoiceTable />
				</Card>
		</div>
	);
}

export default InvoicePage;
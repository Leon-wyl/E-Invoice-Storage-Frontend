import React from 'react';
import { Space } from 'antd';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import AddNewInvoiceButton from './AddNewInvoiceButton';

const TopBar = () => {
	return (
		<Space wrap>
			<FilterButton />
			<SearchBar />
			<AddNewInvoiceButton />
		</Space>
	);
}

export default TopBar;
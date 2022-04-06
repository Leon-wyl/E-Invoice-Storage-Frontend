import React from 'react';
import { Space } from 'antd';
import FilterButton from './FilterButton';
import SearchBar from './SearchBar';
import AddNewInvoiceButton from './AddNewInvoiceButton';

const TopBar = (props) => {
	const {setNeedToLoad} = props;
	return (
		<Space wrap>
			<FilterButton />
			<SearchBar />
			<AddNewInvoiceButton setNeedToLoad={setNeedToLoad}/>
		</Space>
	);
}

export default TopBar;
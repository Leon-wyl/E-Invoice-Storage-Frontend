import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';

const SearchBar = () => {
	const { Search } = Input;

	const onSearch = value => console.log(value);

	return (
		<Space direction="vertical">
			<Search
				placeholder="input search text"
				allowClear
				enterButton="Search"
				size="large"
				onSearch={onSearch}
			/>
		</Space>
	);
}

export default SearchBar;
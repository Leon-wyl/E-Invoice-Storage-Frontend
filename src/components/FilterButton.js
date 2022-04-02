import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const FilterButton = () => {
	const [filterName, setFilterName] = useState('Filter')
	const handleButtonClick = (e) => {
		message.info(e);
		console.log('click left button', e);
	}
	
	const handleMenuClick = (e) => {
		setFilterName(e.key)
	}
	
	const menu = (
		<Menu>
			{filterName !== 'Filter' && 
			<Menu.Item key="Filter" onClick={handleMenuClick}>
				Filter
			</Menu.Item>}
			<Menu.Item key="Invoice Id" onClick={handleMenuClick}>
				Invoice Id
			</Menu.Item>
			<Menu.Item key="Issue Date" onClick={handleMenuClick}>
				Issue Date (YYYY-MM-DD)
			</Menu.Item>
			<Menu.Item key="Supplier" onClick={handleMenuClick}>
				Supplier
			</Menu.Item>
			<Menu.Item key="Supplier Country" onClick={handleMenuClick}>
				Supplier Country
			</Menu.Item>
			<Menu.Item key="Customer" onClick={handleMenuClick}>
				Customer
			</Menu.Item>
			<Menu.Item key="Customer Country" onClick={handleMenuClick}>
				Customer Country
			</Menu.Item>
		</Menu>
	);
	return (
		<div>
			{/* <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
				Dropdown
			</Dropdown.Button>
			<Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
				Dropdown
			</Dropdown.Button>
			<Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
				Dropdown
			</Dropdown.Button>
			<Dropdown.Button
				overlay={menu}
				buttonsRender={([leftButton, rightButton]) => [
					<Tooltip title="tooltip" key="leftButton">
						{leftButton}
					</Tooltip>,
					React.cloneElement(rightButton, { loading: true }),
				]}
			>
				With Tooltip
			</Dropdown.Button> */}
			<Dropdown overlay={menu}>
				<Button size="large">
					{filterName} <DownOutlined />
				</Button>
			</Dropdown>
		</div>
	);
}

export default FilterButton;
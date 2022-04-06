import React from 'react';
import 'antd/dist/antd.css';
import { Upload, message, Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

const AddNewInvoiceButton = (props) => {
	const {setNeedToLoad} = props;
	const UploadProps = {
		name: 'file',
		action: 'http://127.0.0.1:5000/upload/v2',
		headers: {
			authorization: 'authorization-text',
		},
		onChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
				setNeedToLoad(true);
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	}; 
	return (
		<Upload {...UploadProps} maxCount={1}>
			<Button onClick={setNeedToLoad} type="primary" size="large">
				<FileAddOutlined />	Add New Invoice
			</Button>
		</Upload>
	);
}

export default AddNewInvoiceButton;
import { Form, Input, Button, Modal} from 'antd';
import 'antd/dist/antd.css';
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
	let navigate = useNavigate();

  const onFinish = async (values) => {

		const response = await axios({
			method: 'post',
			url: 'https://invoice-storage.herokuapp.com/login',
			headers: {}, 
			data: {
				username: values.username,
				password: values.password,
			}
		}).catch(error => {
			if (error.response) {
				Modal.error({
					title: "Register Error",
					content: error.response.data
				});
			} else if (error.request) {
				Modal.error({
					title: "Register Error",
					content: error.request
				});
			} else {
				Modal.error({
					title: "Register Error",
					content: error.message
				});
			}
			return Promise.reject(error);
		});

		navigate("/invoicepage");
	}

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

	const onClickRegister = () => {
		navigate("/register")
	}

  return (
		<div className={styles.bg}>
			<div className={styles.title}>
				<h1>E-Invoice System Login</h1>
			</div>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
					<a onClick={onClickRegister}>No account? Register!</a>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit" style={{borderRadius: 5}}>
						Login
					</Button>
				</Form.Item>
			</Form>
		</div>
  );
};

export default Login;
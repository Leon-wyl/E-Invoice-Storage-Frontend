import { Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom";

const Login = () => {
	let navigate = useNavigate();

  const onFinish = () => {
    navigate("/invoicepage");
  };

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
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please input your email!' }]}
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
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
  );
};

export default Login;
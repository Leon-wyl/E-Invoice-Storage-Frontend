import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InvoicePage from "./pages/InvoicePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<Login />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/invoicepage" element={<InvoicePage />}/>
				<Route path="*" element={<Login />}/>
			</Routes>
		</Router>
  );
}

export default App;

import './App.css';
import Login from './components/Login'
import Table from './components/InvoiceTable'
import Register from './pages/Register';
import InvoiceTable from './components/InvoiceTable';
import FilterButton from './components/FilterButton';
import SearchBar from './components/SearchBar';
import AddNewInvoiceButton from './components/AddNewInvoiceButton';
import TopBar from './components/TopBar';
import InvoicePage from './pages/InvoicePage';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
		// 		<Login />
    //   </header>
    // </div>
		<div>
			<InvoicePage />
		</div>
  );
}

export default App;

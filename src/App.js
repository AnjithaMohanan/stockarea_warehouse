import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WarehouseDetails from "./components/warehouse-details";
import WarehousesList from "./components/warehouses-list";




function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<WarehousesList />} />
				<Route
					exact
					path="/warehouses/:warehouseId"
					element={<WarehouseDetails />}
				/>
  
			</Routes>
		</Router>
	);
}

export default App;
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DeviceDetect from './components/DeviceDetect';
import IPAddress from './components/IPAddress';
import NetworkInformation from './components/NetworkInformation';
import WindowNavigator from './components/WindowNavigator/WindowNavigator';

function App() {
	return (
		<div className="App">
			<h1>React Web Tracking</h1>

			<Link to="/">Window Navigator</Link>
			<br />
			<Link to="/ip-address-tracking">IP Address Tracking</Link>
			<br />
			<Link to="/device-detect">Device Detect</Link>
			<br />
			<Link to="/network-information">Network Information</Link>

			<Routes>
				<Route path="/" element={<WindowNavigator />} />
				<Route path="/ip-address-tracking" element={<IPAddress />} />
				<Route path="/device-detect" element={<DeviceDetect />} />
				<Route path="/network-information" element={<NetworkInformation />} />
			</Routes>
		</div>
	);
}

export default App;

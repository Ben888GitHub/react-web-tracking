import axios from 'axios';
import { useState, useEffect } from 'react';
import { publicIpv4 } from 'public-ip';

function IPAddress() {
	const [ipAddress, setIpAddress] = useState();
	const [ipV4Address, setV4Address] = useState('');
	const [ipApiData, setIpApiData] = useState();

	const getIpData = async () => {
		const { data } = await axios.get('https://geolocation-db.com/json/');

		data && setIpAddress(data);
		setV4Address(await publicIpv4());
	};

	const getIpAPI = async () => {
		const { data } = await axios.get('https://ipapi.co/json/');
		data && setIpApiData(data);
	};
	useEffect(() => {
		getIpData();
		getIpAPI();
	}, []);

	return (
		<>
			<h1>IP Address Tracking</h1>
			<h2>(1) Track IP with https://geolocation-db.com/json/ API</h2>
			{ipAddress ? (
				<>
					<h3>Your IP Address is: {ipAddress?.IPv4}</h3>
					<h3>
						Your Country is: {ipAddress?.country_name}, {ipAddress.country_code}
					</h3>
					<h3>Your City is: {ipAddress?.city}</h3>
				</>
			) : (
				<p>Loading...</p>
			)}
			<br />
			<h2>
				(2) Track IP with <code>public-ip</code> library
			</h2>
			{ipV4Address && <h3>Your IP Address is: {ipV4Address}</h3>}
			<br />
			<h2>(3) Track IP with https://ipapi.co/json/ API</h2>
			{ipApiData ? (
				<>
					<h3>Your IP Address is: {ipApiData?.ip}</h3>
					<h3>
						Your Location is: {ipApiData?.city}, {ipApiData?.region}
					</h3>
					<h3>Your Country is: {ipApiData?.country_name}</h3>
					<h3>Country Code: {ipApiData?.country_calling_code}</h3>
					<h3>Currency: {ipApiData?.currency}</h3>
					<h3>ISP: {ipApiData?.org}</h3>
				</>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
}

export default IPAddress;

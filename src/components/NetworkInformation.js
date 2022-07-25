import { useState, useEffect } from 'react';

function NetworkInformation() {
	useEffect(() => {
		console.log(navigator.connection.effectiveType);
		console.log(performance);
	}, []);

	return (
		<>
			<h1>NetworkInformation</h1>
			<h2>Check your Browser DevTools Console</h2>
		</>
	);
}

export default NetworkInformation;

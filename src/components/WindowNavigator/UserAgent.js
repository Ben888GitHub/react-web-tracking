import { useState, useEffect } from 'react';

function UserAgent({ userAgent }) {
	const [browser, setBrowser] = useState('');

	useEffect(() => {
		console.log('Hey');
		if (userAgent.indexOf('Firefox') > -1) {
			setBrowser('Mozilla Firefox');
		} else if (userAgent.indexOf('SamsungBrowser') > -1) {
			setBrowser('Samsung Internet');
		} else if (
			userAgent.indexOf('Opera') > -1 ||
			userAgent.indexOf('OPR') > -1
		) {
			setBrowser('Opera');
		} else if (userAgent.indexOf('Trident') > -1) {
			setBrowser('Microsoft Internet Explorer');
		} else if (userAgent.indexOf('Edge') > -1) {
			setBrowser('Microsoft Edge');
		} else if (userAgent.indexOf('Chrome') > -1) {
			setBrowser('Google Chrome');
		} else if (userAgent.indexOf('Safari') > -1) {
			setBrowser('Apple Safari');
		} else {
			setBrowser('unknown');
		}
	}, [userAgent]);

	return (
		<>
			<h2>UserAgent: {userAgent}</h2>
			{browser && <h2>You are using: {browser} Browser</h2>}
		</>
	);
}

export default UserAgent;

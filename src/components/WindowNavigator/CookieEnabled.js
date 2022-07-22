function CookieEnabled({ cookieEnabled }) {
	return (
		<>
			{cookieEnabled ? (
				<h3>Your Cookie Is Enabled</h3>
			) : (
				<h3>Your Cookie Is Disabled</h3>
			)}
		</>
	);
}

export default CookieEnabled;

import { useState, useEffect } from 'react';
import CookieEnabled from './CookieEnabled';
import Language from './Language';
import Online from './Online';
import Platform from './Platform';
import UserAgent from './UserAgent';

function WindowNavigator() {
	const [platform, setPlatform] = useState('');
	const [online, setOnline] = useState(false);
	const [language, setLanguage] = useState('');
	const [userAgent, setUserAgent] = useState('');
	const [cookieEnabled, setCookieEnabled] = useState(false);

	useEffect(() => {
		const platform = navigator.platform;

		const online = navigator.onLine;

		const language = navigator.language;

		const userAgent = navigator.userAgent;

		const cookieEnabled = navigator.cookieEnabled;

		if (platform || online || language || userAgent || cookieEnabled) {
			setPlatform(platform);
			setOnline(online);
			setLanguage(language);
			setUserAgent(userAgent);
			setCookieEnabled(cookieEnabled);
		}
	}, []);

	return (
		<>
			<Platform platform={platform} />
			<br />
			<Online online={online} />
			<Language language={language} />
			<CookieEnabled cookieEnabled={cookieEnabled} />
			<UserAgent userAgent={userAgent} />
		</>
	);
}

export default WindowNavigator;

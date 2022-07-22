import {
	BrowserView,
	MobileView,
	browserName,
	browserVersion,
	isMobile,
	engineName,
	engineVersion,
	osName,
	osVersion
} from 'react-device-detect';

function DeviceDetect() {
	return (
		<>
			<BrowserView>
				<h1>This is rendered only in browser</h1>
			</BrowserView>
			<MobileView>
				<h1>This is rendered only on mobile</h1>
			</MobileView>
			<h2>
				You are using {browserName} at version {browserVersion}
			</h2>
			<h2>
				You are using {engineName} engine at version {engineVersion}
			</h2>
			<h2>
				You are using {osName} at version {osVersion}
			</h2>
			{isMobile ? (
				<h2>You are using mobile device</h2>
			) : (
				<h2>You are using desktop or tablet device</h2>
			)}
		</>
	);
}

export default DeviceDetect;

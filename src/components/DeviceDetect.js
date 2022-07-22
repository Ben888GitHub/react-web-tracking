import { BrowserView, MobileView } from 'react-device-detect';

function DeviceDetect() {
	return (
		<>
			<BrowserView>
				<h1>This is rendered only in browser</h1>
			</BrowserView>
			<MobileView>
				<h1>This is rendered only on mobile</h1>
			</MobileView>
		</>
	);
}

export default DeviceDetect;

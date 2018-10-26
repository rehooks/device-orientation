import React from 'react';
import { render } from 'react-dom';
import useDeviceOrientation from './';

function App() {
	let value = useDeviceOrientation();
	return (
		<div>
			<p>Absolute: {value.absolute}</p>
			<p>Alpha: {value.alpha}</p>
			<p>Beta: {value.beta}</p>
			<p>Gamma: {value.gamma}</p>
		</div>
	);
}

render(<App />, window.root);

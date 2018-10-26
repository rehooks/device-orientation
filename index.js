'use strict';
let { useState, useEffect } = require('react');

function useDeviceOrientation() {
	const [deviceOrientation, setDeviceOrientation] = useState({ absolute: false, alpha: null, beta: null, gamma: null });

	function handleDeviceOrientation(event) {
		setDeviceOrientation({
			absolute: event.absolute,
			alpha: event.alpha,
			beta: event.beta,
			gamma: event.gamma
		})
	}

	useEffect(() => {
		window.addEventListener('deviceorientation', handleDeviceOrientation, true);

		return () => {
			window.removeEventListener('deviceorientation', handleDeviceOrientation);
		};
	}, [])

	return deviceOrientation;
}

module.exports = useDeviceOrientation;

function initMap() {
	L.mapquest.key = 'PEcQf2gacA9P0hRAxjYj1B5ZsvjIpfmc';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.87870949762811, -117.23581090068045],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}
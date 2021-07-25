const accessToken = 'pk.eyJ1IjoicGFydmV6cm9iaSIsImEiOiJja3JqYXJoMnEwaXJvMm9ydmg0NmxxMWMwIn0.0eHEKZIG_lJNW8k8iFirKw';
mapboxgl.accessToken = accessToken;

const zoomLevel = 14;

// Initialize map box
const initializeMapBox = (center) => {
    const mapBoxOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: zoomLevel
    };
    return new mapboxgl.Map(mapBoxOptions);
};

// Map box navigation controls
const addNavigationControls = (map) => {
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
};

// Map box directions
const addDirections = (map) => {
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
};

const setupMap = (center) => {
    const map = initializeMapBox(center);
    addNavigationControls(map);
    addDirections(map);
};

const successLocation = (position) => {
    setupMap([position.coords.longitude, position.coords.latitude]);
};

const errorLocation = (error) => {
    // Longitude & latitude of Rangpur
    setupMap(89.27523, 25.743893);
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  center: [77.2088, 28.6139], // starting position [lng, lat].
  zoom: 9,
});

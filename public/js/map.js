mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  center: listing.geometry.coordinates, // starting position [lng, lat].
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates.
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Loaction will be provided after booking</p>`
    )
  )
  .addTo(map);

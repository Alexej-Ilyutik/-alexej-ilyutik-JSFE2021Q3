mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGVqLWlseXV0aWsiLCJhIjoiY2t1bjBxb21yMDQ4MzJuanQweWg4ZTV3ZSJ9.EQsqjQOhXhppXpb85LD84g";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [2.3363, 48.8609],
  zoom: 15.8,
});

map.addControl(new mapboxgl.NavigationControl());
const marker1 = new mapboxgl.Marker({ color: "black" })
  .setLngLat([2.3364, 48.86087])
  .addTo(map);
const marker2 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3334, 48.8601])
  .addTo(map);
const marker3 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3396, 48.8606])
  .addTo(map);
const marker4 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3331, 48.86185])
  .addTo(map);
const marker5 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3365, 48.8624])
  .addTo(map);

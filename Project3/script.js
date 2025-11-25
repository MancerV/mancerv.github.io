// Initialize Google Map
function myMap() {
  var FavMap = {
    center: new google.maps.LatLng(20, 0),
    zoom: 2
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), FavMap);

  // Place I want to visit or already visited
  const wonders = [
    {name: "Great Pyramid of Giza", position: {lat: 29.9792, lng: 31.1342}},
    {name: "Mount Fuji", position: {lat: 35.3606, lng: 138.7274}},
    {name: "Stonehenge", position: {lat: 51.1789, lng: -1.8262}},
    {name: "Illinois Institute of Technology (Chicago)", position: {lat: 41.8349, lng: -87.6270}},
    {name: "Great Wall of China", position: {lat: 40.4319, lng: 116.5704}},
    {name: "Chocolate Hills (Bohol)", position: {lat: 9.75, lng: 124.15}},
    {name: "Eiffel Tower", position: {lat: 48.8584, lng: 2.2945}}
  ];

  wonders.forEach(wonder => {
    new google.maps.Marker({
      position: wonder.position,
      map: map,
      title: wonder.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: "red",
        fillOpacity: 0.8,
        strokeWeight: 1
      }
    });
  });

  // Continents
  const continents = [
    {name: "Africa", position: {lat: 0.0, lng: 20.0}},
    {name: "Asia", position: {lat: 34.0479, lng: 100.6197}},
    {name: "Europe", position: {lat: 54.5260, lng: 15.2551}},
    {name: "North America", position: {lat: 54.5260, lng: -105.2551}},
    {name: "South America", position: {lat: -8.7832, lng: -55.4915}},
    {name: "Australia", position: {lat: -25.2744, lng: 133.7751}},
    {name: "Antarctica", position: {lat: -82.8628, lng: 135.0000}}
  ];

  continents.forEach(continent => {
    new google.maps.Marker({
      position: continent.position,
      map: map,
      title: continent.name,
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 6,
        fillColor: "blue",
        fillOpacity: 0.8,
        strokeWeight: 1
      }
    });
  });
}

function init() {
  const questionsBtn = document.getElementById("questionsbutton");
  if (questionsBtn) {
    questionsBtn.addEventListener("click", function() {
      alert("If you have any problems, contact me at:\nkarltamparong28@gmail.com");
    });
  }

  if (document.getElementById("googleMap")) {
    myMap();
  }
}

window.addEventListener("load", init);

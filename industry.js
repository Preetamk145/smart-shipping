
document.addEventListener("DOMContentLoaded",function() {
    var mapcont =  document.getElementById("map");
    var map = L.map(mapcont).setView([51.803,-0.09],13);
    var clickedLocationMarker = null; 
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
   
    function MapOnClick(e){
        if (clickedLocationMarker) {
            map.removeLayer(clickedLocationMarker); 
            clickedLocationMarker = null; 
          } else {
            var clickedLocation = e.latlng;
            clickedLocationMarker = L.marker(clickedLocation).addTo(map).bindPopup("You clicked here! "+e.latlng).openPopup();
          }
    }

    map.on("click",MapOnClick)

    L.Routing.control({
      waypoints: [
        L.latLng(51.505, -0.09), // Starting point (latitude, longitude)
        L.latLng(51.511181, -0.101)  // Destination point (latitude, longitude)
      ],
      routeWhileDragging: true, // Allow route to update when dragging waypoints
        draggableWaypoints: true
    }).addTo(map);
    
})
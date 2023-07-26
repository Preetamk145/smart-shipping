document.addEventListener("DOMContentLoaded",function() {
    var mapcont =  document.getElementById("map");
    var map = L.map(mapcont).setView([51.803,-0.09],13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    window.addEventListener("resize",()=>{
   
    })
   
    
})
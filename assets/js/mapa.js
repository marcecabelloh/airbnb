 var map;  /*inicializo el mapa*/
 function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
 zoom: 10,
 center: new google.maps.LatLng(-33.45, -70.66667),
 mapTypeId: 'roadmap'
 });
}


 window.addEventListener("load", buscar); 

 /* autocompletado de los input origen y destino (ruta)*/

 var destination = (document.getElementById("destination"));
 var autocompletar = new google.maps.places.Autocomplete(destination);
 autocompletar.bindTo("bounds", map);
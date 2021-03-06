function initAutocomplete() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -33.8688, lng: 151.2195},
		zoom: 13,
		mapTypeId: 'roadmap'
	});

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
        	searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
        	var places = searchBox.getPlaces();

        	if (places.length == 0) {
        		return;
        	}

          // Clear out the old markers.
          markers.forEach(function(marker) {
          	marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
          	if (!place.geometry) {
          		console.log("Returned place contains no geometry");
          		return;
          	}
          	var icon = {
          		url: place.icon,
          		size: new google.maps.Size(71, 71),
          		origin: new google.maps.Point(0, 0),
          		anchor: new google.maps.Point(17, 34),
          		scaledSize: new google.maps.Size(25, 25)
          	};

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
            	map: map,
            	icon: icon,
            	title: place.name,
            	position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
          } else {
          	bounds.extend(place.geometry.location);
          }
      });
          map.fitBounds(bounds);
      });
}

       /* from here on I tried to load data from the json file into an info window, didnt't work though, don't know how =/

       var json = "../assets/js/json.js"; 
        var infowindow = new google.maps.InfoWindow();


   		$.each(json.search_results.listing, function (key, data) {
       			var latLng = new google.maps.LatLng(data.lat, data.lng);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            // icon: icon,
            title: data.listing.bathrooms
        });

        var details = data.listing.bedrooms;

        bindInfoWindow(marker, map, infowindow, details);

         });

        //    });


function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initAutocomplete);

}*/



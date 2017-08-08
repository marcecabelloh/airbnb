Probando rama XD

//para autocompletar
 		var origenAutoComp = (document.getElementById('partida')); //toma punto de origen
  		var autocompletar = new google.maps.places.Autocomplete(origenAutoComp);
  		autocompletar.bindTo('bounds', map);

  		var destinoAutoComp = (document.getElementById('destino')); //toma punto de destino
  		var autocompletar = new google.maps.places.Autocomplete(destinoAutoComp);
  		autocompletar.bindTo('bounds', map);

//ejemplo para recorrer resultados en json

jason.search_results.forEach(function(el){
	document.write("<img  src='" + el.listing.thumbnail_url + "' ><br>");
	document.write("<b>" + el.listing.localized_city + " - " + el.listing.name + "</b><br>");
	document.write("<b>Habitaciones : </b>" + el.listing.bedrooms + "<br>");
	document.write("<b>Baños : </b>" + el.listing.bathrooms + "<br>");
	el.listing.picture_urls.forEach(function(e){
		document.write("<img width='100' src='"+ e +"'>")
	});
	document.write("<br><hr><br>");
});
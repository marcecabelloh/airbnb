
  //plugin para marcar fecha de ingreso y salida

  $('.timepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });


  $('.timepicker2').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  

$(document).ready( function(){

	//funcion que permite esconder sección filtros con clase filtros. Index3
	function esconder(){
		$('.filtros').hide();
	}

	esconder();

	$('.btn-filtros').click(function(){
			//funcion que permite que al dar click al boton filtros muestre la sección filtros
			$('.filtros').show();
			
		});

	$('.btn-cancelar').click(function(){
			//funcion que permite que al dar click al boton filtros muestre la sección filtros
			$('.filtros').hide();
		
	});

});

  // codigo slider

  $('#controlR').click(function() {
      event.preventDefault();
      $('#content').animate({
        marginLeft: "-=400px"
      }, "fast");
   });

 $('#controlL').click(function() {
      event.preventDefault();
      $('#content').animate({
        marginLeft: "+=400px"
      }, "fast");
 });

$( document ).ready(function() {
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback( drawChart );

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart( ) {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Version');
   data.addColumn('number', '%');
   data.addRows( [ ['IE 6', 05], ['IE 7', 20], ['IE 8', 75] ] );

   // Set chart options
   var options = {'title': 'Versiones IE',
                  'width':500,
                  'height':600};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart( document.getElementById('divPieChart') );
   chart.draw(data, options);
  }
  console.log( "ready!" );
});

$('#buttonCambiarValores').click( function() {
  var value = $('#buttonCambiarValores').val().trim();

  if ( value == 1 ) {
    value = 2;
    $('#buttonCambiarValores').val(value);
    $('#buttonCambiarValores').text( "Cambiar Datos 1" );

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback( drawChart );

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart( ) {

     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Version');
     data.addColumn('number', '%');
     data.addRows( [ ['IE 6', 50], ['IE 7', 40], ['IE 8', 10] ] );

     // Set chart options
     var options = {'title': 'Versiones IE',
                    'width':500,
                    'height':600};

     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart( document.getElementById('divPieChart') );
     chart.draw(data, options);
    }

  } else if ( value == 2 ) {
    value = 1;
    $('#buttonCambiarValores').val(value);
    $('#buttonCambiarValores').text( "Cambiar Datos 2" );

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback( drawChart );

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart( ) {

     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Version');
     data.addColumn('number', '%');
     data.addRows( [ ['IE 6', 05], ['IE 7', 20], ['IE 8', 75] ] );

     // Set chart options
     var options = {'title': 'Versiones IE',
                    'width':500,
                    'height':600};

     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart( document.getElementById('divPieChart') );
     chart.draw(data, options);
    }
  }
})

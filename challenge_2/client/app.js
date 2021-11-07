$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    // console.log(event);
    var reader = new FileReader();
    var csvData = document.getElementById('csv').files;
    console.log(csvData);
    reader.onload = function() {
      var fileData = reader.result;
      $.ajax({
        url: 'http://localhost:3000',
        method: 'POST',
        data: {'name': csvData[0].name, csvData},
        dataType: 'application/json',
        processData: false,
        success: function(res) {
          console.log('here');
          $('#text').val('');
          app.render(res);
          $('#app').append(res);
        }
      });
    }
    reader.readAsText(csvData[0]);
  })
});
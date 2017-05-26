var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctors.js').getDoctors;

//query, first, last, location/range, specialty, key

var displayDoctors = function(result){
  result.forEach(function(doctor){
    //append a div
    console.log(doctor);
  });
}

$(document).ready(function(){

  $('form').submit(function(e){
    e.preventDefault();
    queryParams = {
      query: $('#condition').val(),
      first: $('#firstName').val(),
      last: $('#lastName').val(),
      specialty: $('#specialties').val(),
      key: apiKey,
    }
    getDoctors(queryParams, displayDoctors);
  })
});

var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctors.js').getDoctors;

//query, first, last, location/range, specialty, key

var displayDoctors = function(result){
  result.data.forEach(function(doctor){
    //append a div
    console.log(doctor);
  });
};

$(document).ready(function(){

  $('form').submit(function(e){
    e.preventDefault();
    queryParams = {
      condition: $('#condition').val(),
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      specialty: $('#specialties').val(),
      key: apiKey,
      range: $('#range').val(),
    };
    getDoctors(queryParams, displayDoctors);
  });
});

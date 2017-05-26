var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctors.js').getDoctors;
var getSpecialties = require('./../js/doctors.js').getSpecialties;

var showSpecialties = function(result){
  var nameArr = [];
  result.data.forEach(function(spec){
    nameArr.push([spec.name,spec.uid]);
  });
  nameArr.sort().forEach(function(spec){
    $('#specialties').append('<option value='+spec[1]+'>'+spec[0]+'</option>');
  });
};

var displayDoctors = function(result){
  $('#results').empty();
  result.data.forEach(function(doctor){
    var address = doctor.practices[0].visit_address;
    var fullAddress = address.street+' '+address.city+','+address.state;
    $('#results').append('<div class="doctorInfo"><h3>'+doctor.profile.first_name+' '+doctor.profile.last_name+'</h3><p>'+doctor.profile.bio+'</p><img src="'+doctor.profile.image_url+'"><p>'+fullAddress+'</p></div>');
    $('#results').show();
  });
};

$(document).ready(function(){
  getSpecialties(showSpecialties);

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

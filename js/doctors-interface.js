var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctors.js').getDoctors;
var getSpecialties = require('./../js/doctors.js').getSpecialties;

var showSpecialties = function(result){
  var nameArr = [];
  result.data.forEach(function(spec){
    nameArr.push([spec.name,spec.uid]);
  })
  nameArr.sort().forEach(function(spec){
    $('#specialties').append('<option value='+spec[1]+'>'+spec[0]+'</option>')
  })
};

var displayDoctors = function(result){
  result.data.forEach(function(doctor){
    //append a div
    console.log(doctor);
  });
};

$(document).ready(function(){
  getSpecialties(showSpecialties);

  $('.formDivButton').click(function(){
    $('.searchParam').hide();
    $('.'+this['value']).show();
  })

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

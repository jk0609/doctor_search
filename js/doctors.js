

exports.getSpecialties = function(showSpecialties){
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=7fc91d9851939ecec74cb6aaff0866dc')
    .then(function(result){
      showSpecialties(result)
    })
}

exports.getDoctors = function(queryParams, displayDoctors) {
  navigator.geolocation.getCurrentPosition(function(position){
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?first_name='+queryParams.firstName+'&last_name='+queryParams.lastName+'&query='+queryParams.condition+'&specialty_uid='+queryParams.specialty+'&location='+position.coords.latitude+'%2C'+position.coords.longitude+'%2C'+queryParams.range+'&user_location='+position.coords.latitude+'%2C'+position.coords.longitude+'&skip=0&limit=10&user_key=' + queryParams.key,
      success: function(result){
                  console.log(result)
                  displayDoctors(result);
                },
      failure: function(error){
                  console.log('test');
                }
    });
  });
};

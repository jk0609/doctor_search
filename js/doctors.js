
//assign front end function to a variable, pass it into here as a parameter so you can run it
// exports.getSpecialties = function(){
//   $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=7fc91d9851939ecec74cb6aaff0866dc')
//     .then(function(result){
//       console.log(result)
//     })
//     .fail(function(error){
//        console.log("fail");
//      });
// }

exports.getDoctors = function(queryParams, displayDoctors) {
  // https://api.betterdoctor.com/2016-03-01/doctors?first_name=test&last_name=test&query=test&specialty_uid=test&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=7fc91d9851939ecec74cb6aaff0866dc
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      displayDoctors(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

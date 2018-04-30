//https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb

// Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb', true);

// request.onload = function () {
// console.log('hi')
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);

//   if (request.status >= 200 && request.status < 400) {
//    console.log(data)
//   } else {
//     console.log('error');
//   }
// }

// request.send();
$("button").click(function(){
    $.ajax({url: "https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb", success: function(result){
      console.log('hi')
        $("#div1").html(result);
    },
error: function(e){
  console.log(e)
}
           });
});

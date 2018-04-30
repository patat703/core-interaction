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
//result.projects[0].covers.original
//result.projects[0].name
// request.send();
$("button").click(function(){
    $.ajax({type: "GET",
  dataType: 'jsonp',
  url: "https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb",
  success: function(result){
      console.log(result.projects)
      for (var i = 0; i < result.projects.length; i++) {
        var name = result.projects[i].name
        var imgLink = result.projects[i].covers.original
        //create div to hold each image and title
        var container = $('<div></div>');
        var img = $('<img/>');
        var title = $('<h1></h1>');
        $(img).attr('src', imgLink);
        $(title).html(name);
        $(container).append(img);
        $(container).append(title);
        $(body).append(container);



      }
        // $("#div1").html(result);
    },
error: function(e){
  console.log(e)
}
           });
});

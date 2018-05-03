{
  $.ajax({type: "GET",
    dataType: 'jsonp',
    url: "https://www.behance.net/v2/projects/?q=photography%20graphic&client_id=RbEgyxFDwBZlOmDvWqayuwejUt3fADvb",
    success: function(result){
      console.log(result.projects)
      for (var i = 0; i < result.projects.length; i++) {
        var name = result.projects[i].name;
        var imgLink = result.projects[i].covers.original;
        //create div to hold each image and title
        var container = $('<div></div>');
        var img = $('<img/>');
        var title = $('<h2></h2>');
        $(img).attr('src', imgLink);
        $(title).html(name);
        $(container).attr('class', 'work')
        $(container).append(img);
        $(container).append(title);
        $('body').append(container);
      }
    },
    error: function(e){
      console.log(e)
    }
  });
}

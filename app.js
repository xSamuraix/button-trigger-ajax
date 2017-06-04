// create event listener for all button elements
$("button").on("click", function() {
  //In this case, this is referred to the button
      var person = $(this).attr("data-person");
      // We build our queryURL using the name person
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";
        // Ajax request
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response);
          console.log(queryURL);
      
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            // make a div using jquery
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
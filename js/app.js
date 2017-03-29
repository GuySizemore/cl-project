

/* Shadowbox */
$(function () {
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $caption =$("<p></p>");

  $overlay.append($image); //add image to overlay
  $overlay.append($caption);
  $("body").append($overlay); //add overlay to body

  $(".main-gallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    $image.attr("src", imageLocation); //update overlay with img
    $overlay.show();
  var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText); //add caption to img
  });

  $overlay.click(function() {
    $overlay.hide();
  });

});

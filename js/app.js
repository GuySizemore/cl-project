
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);
$("body").append($overlay);

$("#image-gallery a").click(function(){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);
  $.overlay.show();



});

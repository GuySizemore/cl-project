
 /*
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$("#main-gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);
  $.overlay.show();

var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();
});
*/


/*Check to see if jQuery is loaded
<script>
window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
</script>*/


<script>
$(document).ready(function(){
  $("p").dblclick.(function(){
    $(this).hide();
  });
</script>
});

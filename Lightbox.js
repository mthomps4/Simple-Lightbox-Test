//Creates an #overlay div in the html on click.
//Stops the <a> with preventDefault
//Opens larger image within overlay div with "title"

var $overlay = $('<div id="overlay"></div>'); // Variable will add div to html
var $image = $("<img>"); //Variable is used to add imageGallery images to current onclick
var $caption = $("<p></p>"); //Used with attribute title to append caption with overlay

//An image to overlay
$overlay.append($image);

//A caption to div overlay
$overlay.append($caption);

//Add overlay div to body
$("body").append($overlay);

//Capture the click eventon a link and add to image
$("#imageGallery a").click(function(event){
  event.preventDefault();//Stop link from following through
  var imageLocation = $(this).attr("href"); //"This" Images full photo

  //Updates $image <img> with src and attribute from (this) clicked link
  $image.attr("src", imageLocation);

  //Show the overlay (initially hidden in CSS)
  $overlay.show();

  //Get "this" title attribute and creates text for var caption <p>
  var captionText = $(this).children("img").attr("title");
  $caption.text(captionText);
});

//To close and hide overlay
$overlay.click(function(){
  $overlay.hide();
});

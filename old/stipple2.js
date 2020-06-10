var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
//var canvas = document.createElement('imageCanvas');
var ctx = canvas.getContext('2d');

function handleImage(e) {
 var reader = new FileReader();
 reader.onload = function(event) {
  onReaderLoad(event);
 }
reader.readAsDataURL(e.target.files[0]);
}
var onReaderLoad = function(event) {
var image = new Image();

image.onload = function() {
 onImageLoad(image);
}

 image.src = event.target.result;
 document.getElementById("display-image").src = event.target.result;

}

var onImageLoad = function(img) {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
}
/*function handleImageUpload() 
{

var image = document.getElementById("toStipple").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      //document.getElementById("display-image").src = e.target.result;
		var testImage = new Image();
		testImage.src = event.target.result;
    }

    reader.readAsDataURL(image);
	//doStipple(image);
	
	document.getElementById("debug").textContent = testImage.width;
}

function doStipple(srcImage)
{
	/*var canvas = document.createElement('canvas');
	canvas.width = srcImage.width;
	canvas.height = srcImage.height;
	canvas.getContext('2d').drawImage(srcImage, 0, 0, srcImage.width, srcImage.height);
	
	var pixelData = canvas.getContext('2d').getImageData(50, 50, 1, 1).data;
	
	var resultImage    = canvas.toDataURL("image/png");
	document.getElementById("result-image").src = resultImage.target.result;*/
}*/

var testCanvas = document.createElement('testCanvas');
var ctx = testCanvas.getContext('2d');

function handleImageUpload(e) {
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
 
 doStipple(testCanvas, image);
}

var onImageLoad = function(img) {
  testCanvas.width = img.width;
  testCanvas.height = img.height;
  ctx.drawImage(img, 0, 0);
}

function doStipple(canvas, srcImage)
{
	document.getElementById("result-image").src = srcImage.src;
	//document.getElementById("debug").textContent = canvas.width;
	//var pixelData = canvas.getContext('2d').getImageData(50, 50, 1, 1).data;
	/*var canvas = document.createElement('canvas');
	canvas.width = srcImage.width;
	canvas.height = srcImage.height;
	canvas.getContext('2d').drawImage(srcImage, 0, 0, srcImage.width, srcImage.height);
	
	var pixelData = canvas.getContext('2d').getImageData(50, 50, 1, 1).data;
	
	var resultImage    = canvas.toDataURL("image/png");
	document.getElementById("result-image").src = resultImage.target.result;*/
}
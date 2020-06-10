//var imageLoader = document.getElementById('imageLoader');
//imageLoader.addEventListener('change', handleImage, false);
//var testImage;
var testWidth;
function handleImageUpload() {
	var readImage = document.getElementById("toStipple").files[0];
	//var testImage;
	
	var reader = new FileReader();
	
	reader.onload = function(e) {
      //document.getElementById("display-image").src = e.target.result;
		//testImage = new Image();
		//testImage.src = e.target.result;
		document.getElementById("display-image").src = e.target.result;
		document.getElementById("display-image").style.display = 'none';
    }

	reader.readAsDataURL(readImage);
	document.getElementById("debug").textContent = "Got image!";
	
	doStipple(readImage);
}

function doStipple(srcImage) {
	var testingImage = document.getElementById("display-image");
	testingImage.onload = function(){
  		document.getElementById("debug").textContent = "Start";
		var testCanvas = document.getElementById('testingCanvas');
		testCanvas.width = this.width*400/this.height;
		testCanvas.height = 400;
		testCanvas.getContext('2d').drawImage(this, 0, 0, testCanvas.width, testCanvas.height);
		var newCanvas = document.getElementById('newCanvas');
		newCanvas.width = testCanvas.width;
		newCanvas.height = testCanvas.height;
		var temp = testCanvas.getContext('2d');
		var temp2 = newCanvas.getContext('2d');
		var pixelData = temp.getImageData(0, 0, testCanvas.width, testCanvas.height);
		var pixelData2 = temp.getImageData(0, 0, 100, 100);
		//var alphaData = pixelData2.data[3];
		//console.log(alphaData);
		temp2.putImageData(pixelData, 0, 0);
		temp2.putImageData(pixelData2, 200, 200);
		
		var resultImageUrl = newCanvas.toDataURL("image/png");
		document.getElementById('result-image').src = resultImageUrl;
		document.getElementById("debug2").textContent = "Done!";
	}
}
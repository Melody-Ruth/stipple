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
		//var pixelData2 = temp.getImageData(0, 0, 100, 100);
		//var alphaData = pixelData2.data[3];
		//console.log(alphaData);
		temp2.putImageData(pixelData, 0, 0);
		//temp2.putImageData(pixelData2, 200, 200);
		
		var avg, tempPixel;
		for (var i = 150; i < testCanvas.width/5+150; i++) {
			for (var j = 150; j < testCanvas.height/5+150; j++) {
				tempPixel = temp.getImageData(i, j, 1, 1);
				avg = (tempPixel.data[0]+tempPixel.data[1]+tempPixel.data[2])/3;
				//console.log(avg);
				tempPixel.data[0] = avg;
				tempPixel.data[1] = avg;
				tempPixel.data[2] = avg;
				temp2.putImageData(tempPixel,i,j);
			}
		}
		
		//document.getElementbyId('testCanvas').style.display = 'none';
		
		var resultImageUrl = testCanvas.toDataURL("image/png");
		document.getElementById('result-image').src = resultImageUrl;
		var resultImageUrl2 = newCanvas.toDataURL("image/png");
		document.getElementById('result-image2').src = resultImageUrl2;
		document.getElementById("debug2").textContent = "Done!";
		document.getElementById("testingCanvas").style.display="none";
	}
}
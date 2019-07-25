var red = document.getElementsByClassName('red');
var green = document.getElementsByClassName('green');
var blue = document.getElementsByClassName('blue');
var doc = document.getElementsByTagName('body')[0];
function gradientChange(){
	// console.log(col.value);
	var leftCol = "rgb(" + red[0].value + "," + green[0].value + "," + blue[0].value + ")";
	var rightCol = "rgb(" + red[1].value + "," + green[1].value + "," + blue[1].value + ")";
	doc.style.backgroundImage = 'linear-gradient(to right,' + leftCol + "," + rightCol + ")";
}
red[0].addEventListener('input',gradientChange);
red[1].addEventListener('input',gradientChange);
green[0].addEventListener('input',gradientChange);
green[1].addEventListener('input',gradientChange);
blue[0].addEventListener('input',gradientChange);
blue[1].addEventListener('input',gradientChange);
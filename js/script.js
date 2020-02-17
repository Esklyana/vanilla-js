function slider(val) {
  	if (val == 1) {
  		document.querySelector('.slider').style.left = '0px';
  		document.querySelector('input[type=range]').style.background = '#435063';
  	} else if (val == 2) {
  		document.querySelector('.slider').style.left = '-1024px';
  		document.querySelector('input[type=range]').style.background = '-webkit-linear-gradient(right, #435063 0%, #435063 50%, #d1eaff 50%, #d1eaff 100%)';
  	} else if (val == 3) {
  		document.querySelector('.slider').style.left = '-2048px';
  		document.querySelector('input[type=range]').style.background = '#d1eaff';
  	}
}

function dots(dot) {
	if (dot == 1) {
		window.scrollTo(0, 0);
		document.querySelector('.active').classList.remove('active');
		document.getElementById('dot1').classList.add('active');
	} else if (dot == 2) {
		window.scrollTo(0, 768);
		document.querySelector('.active').classList.remove('active');
		document.getElementById('dot2').classList.add('active');
	} else if (dot == 3) {
		window.scrollTo(0, 1536);
		document.querySelector('.active').classList.remove('active');
		document.getElementById('dot3').classList.add('active');
	}
}

function scrollDown(down) {
	if (down == 1) {
		window.scrollTo(0, 768);
		document.querySelector('.active').classList.remove('active');
		document.getElementById('dot2').classList.add('active');
	} else if (down == 2) {
		window.scrollTo(0, 1536);
		document.querySelector('.active').classList.remove('active');
		document.getElementById('dot3').classList.add('active');
	}
}
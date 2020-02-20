function slider(val) {
  	if (val < 33) {
  		document.querySelector('.slider').style.left = '0px';
  	} else if (val > 33 && val < 66) {
  		document.querySelector('.slider').style.left = '-1024px';
  	} else if (val > 66) {
  		document.querySelector('.slider').style.left = '-2048px';
  	}

  	var fixval = 100 - val;
  	document.querySelector('input[type=range]').style.background = '-webkit-linear-gradient(right, #435063 0%, #435063 '+fixval+'%, #d1eaff '+fixval+'%, #d1eaff 100%)';
}

document.querySelectorAll('.slick-dots .dots').forEach(function(dot) {
	dot.addEventListener('click', function() {
		if (dot.id == 'dot1') {
			window.scrollTo(0, 0);
			document.querySelector('.active').classList.remove('active');
			document.getElementById('dot1').classList.add('active');
		} else if (dot.id == 'dot2') {
			window.scrollTo(0, 768);
			document.querySelector('.active').classList.remove('active');
			document.getElementById('dot2').classList.add('active');
		} else if (dot.id == 'dot3') {
			window.scrollTo(0, 1536);
			document.querySelector('.active').classList.remove('active');
			document.getElementById('dot3').classList.add('active');
		}
	});
});


document.querySelectorAll('.doun').forEach(function(down) {
	down.addEventListener('click', function() {
		if (down.id == 'down1') {
			window.scrollTo(0, 768);
			document.querySelector('.active').classList.remove('active');
			document.getElementById('dot2').classList.add('active');
		} else if (down.id == 'down2') {
			window.scrollTo(0, 1536);
			document.querySelector('.active').classList.remove('active');
			document.getElementById('dot3').classList.add('active');
		}
	});
});
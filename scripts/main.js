document.getElementById("navbar-close").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
});

document.getElementById("navicon").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "block";
	document.body.style.overflowY = 'hidden';
});

document.getElementById("home").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("header").scrollIntoView();
});

document.getElementById("about").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("main").scrollIntoView();
});

document.getElementById("mhome").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("header").scrollIntoView();
});

document.getElementById("mabout").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("main").scrollIntoView();
});

document.getElementById("am1").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("header").scrollIntoView();
});

document.getElementById("am2").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("main").scrollIntoView();
});

document.getElementById("homesub").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("header").scrollIntoView();
});

document.getElementById("aboutsub").addEventListener("click",function() {
	document.getElementById("mobile-nav-container").style.display = "none";
	document.body.style.overflowY = 'scroll';
	document.getElementById("main").scrollIntoView();
});

//Scrolls page
var bottom_of_screen  = innerHeight;
var y = 0;
var add = 1;
var time_until_scroll = 10;

var cards;
var left;
var right;

function scroll_to_bottom() {
	e = setInterval(function() {
		if (time_until_scroll <= 0) {
			add = 4;
			y += add;
			window.scrollTo(0,y);
			if (y >= bottom_of_screen) {
				y = 0;

				for (var i = 0; i < cards.length; i++) {
					cards[i].style.animationName = 'fade-in';
					cards[i].style.animationDuration = '3s';
					cards[i].style.animationFillMode = 'forwards';
				}

				left.style.animationName = 'slide-in-left';
				left.style.animationDuration = '1s';
				left.style.animationFillMode = 'forwards';
				clearInterval(e);
			}
			time_until_scroll = 0;
		}
		time_until_scroll -= 1;
	},1);
}

setInterval(function() {
	if (window.scrollY >= 850) {
		for (var i = 0; i < cards.length; i++) {
			cards[i].style.animationName = 'fade-in';
			cards[i].style.animationDuration = '1.5s';
			cards[i].style.animationFillMode = 'forwards';
		}

		left[0].style.animationName = 'slide-in-left';
		left[0].style.animationDuration = '1s';
		left[0].style.animationFillMode = 'forwards';
		right[0].style.animationName = 'slide-in-right';
		right[0].style.animationDuration = '1s';
		right[0].style.animationFillMode = 'forwards';
	}
},1000/30)

window.onload = function() {
	cards = document.getElementsByClassName("about-card");
	left = document.getElementsByClassName("background-tables-left");
	right = document.getElementsByClassName("background-tables-right");

}

//Translates page content to spanish or english
var en_enabled = false;
document.getElementById("translate").addEventListener("click",function() {
	if (en_enabled) {
		translator.translate.spanish(divs);
		en_enabled = false;
	} else if (!en_enabled) {
		translator.translate.english(divs);
		en_enabled = true;
	}
});

document.getElementById("am3").addEventListener("click",function() {
	if (en_enabled) {
		translator.translate.spanish(divs);
		en_enabled = false;
	} else if (!en_enabled) {
		translator.translate.english(divs);
		en_enabled = true;
	}
});

document.getElementById("ctranslate").addEventListener("click",function() {
	if (en_enabled) {
		translator.translate.spanish(divs);
		en_enabled = false;
	} else if (!en_enabled) {
		translator.translate.english(divs);
		en_enabled = true;
	}
});

document.getElementById("mtranslate").addEventListener("click",function() {
	if (en_enabled) {
		translator.translate.spanish(divs);
		en_enabled = false;
	} else if (!en_enabled) {
		translator.translate.english(divs);
		en_enabled = true;
	}
});
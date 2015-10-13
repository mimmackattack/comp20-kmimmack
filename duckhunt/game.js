// Katherine Mimmack 10/13/2015

function init() {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext('2d');

	// draws the background
	var bg = new Image();
	bg.src = "duckhunt-background.gif";
	bg.onload = function() {
		ctx.drawImage(bg, 0, 0, 800, 600);
	}

	// draws ducks
	var duck = new Image();
	duck.src = "duckhunt_various_sheet.png"
	duck.onload = function() {
		ctx.drawImage(duck, 0, 117, 40, 35, 160, 50, 100, 90); // Duck 1
		ctx.drawImage(duck, 169, 121, 40, 35, 320, 100, 100, 90); // Duck 2
	}
}
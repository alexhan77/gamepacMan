// 	1 => <div class='wall'></div>
// 2 => <div class='coin'></div>
// 3 => <div class='ground'></div>
// 4 => <div class='evilMorty'></div>
// 5 => <div class='rick'></div>
// 6 => <div class='portal'></div>
// 7 => <div class='beer'></div>
// map = [ 1, 2, 3 ]
// map = [ [1,2,3], [1,2,3], [1,2,3] ];

// var currentRick = rick
var rickScore = 0
var mortyScore = 0
// Where Rick starts

rick = {
	x: 12,
	y: 2,
}
evilMorty = {
	x: 12,
	y: 12,
}
topLeft = {
	x: 1,
	y: 1,
}
bottomLeft = {
	x: 13,
	y: 1,
}
topRight = {
	x: 1,
	y: 23,
}
bottomRight = {
	x: 13,
	y: 23,
}
map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

// grabbing the element 
var el = document.getElementById('world');
let endGame = (rickScore, mortyScore) => {
	console.log(rickScore)
	if (rickScore >= 50 || mortyScore >= 50) {
		alert("YOU WIN");
		// REFRESHES PAGE AFTER YOU CLICK OK
		document.location.reload();
		// synchronous is happening right when the computer see the line of code
		// asynchronous doesnt necessary happen when the computer see the line of code
		// Happens when it finishes doing its "job"
		// Usually occurs with API calls (library codes)
		// clearInterval(interval);
	}
}
function drawWorld() {
	console.log('i am drawing a world')
	el.innerHTML = '';
	for (var y = 0; y < map.length; y = y + 1) {
		for (var x = 0; x < map[y].length; x = x + 1) {
			if (map[y][x] === 1) {
				el.innerHTML += "<div class='wall'></div>";
			}
			else if (map[y][x] === 2) {
				el.innerHTML += "<div class='coin'></div>";
			}
			else if (map[y][x] === 3) {
				el.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] === 4) {
				el.innerHTML += "<div class='evilMorty'></div>";
			}
			else if (map[y][x] === 5) {
				el.innerHTML += "<div class='rick'></div>";
			}
			else if (map[y][x] === 6) {
				el.innerHTML += "<div class='portal'></div>";
			}
			else if (map[y][x] === 7) {
				el.innerHTML += "<div class='beer'></div>";
			}

		}
		el.innerHTML += "<br>";
	}
}
// 1st execution of drawWorld
drawWorld();

// RICKS MOVEMENTS
document.onkeydown = function (e) {
	e.preventDefault()
	console.log('i am moving')
	if (e.keyCode === 37) { // RICK MOVE LEFT
		// portal()
		if (map[rick.y][rick.x - 1] !== 1) {
			map[rick.y][rick.x] = 3;
			rick.x = rick.x - 1;
			map[rick.y][rick.x] = 5;
			if (map[rick.y][rick.x - 1] == 2) {
				rickScore++
				// console.log('score',rickScore)
			}
			else if (map[rick.y][rick.x - 1] == 7) {
				rickScore += 10
				console.log('score', rickScore)
			}
			// updateScore()
			// drawWorld();
		}
	}
	else if (e.keyCode === 39) { // RICK MOVE RIGHT
		// portal()
		if (map[rick.y][rick.x + 1] !== 1) {
			map[rick.y][rick.x] = 3;
			rick.x = rick.x + 1;
			map[rick.y][rick.x] = 5;
			if (map[rick.y][rick.x + 1] == 2) {
				rickScore++
				// console.log('score',rickScore)
				// drawWorld();
			}
			else if (map[rick.y][rick.x + 1] == 7) {
				rickScore += 10
				// console.log('score',rickScore)
			}
		}
	}
	else if (e.keyCode === 38) { // RICK MOVE UP
		// portal()
		if (map[rick.y - 1][rick.x] !== 1) {
			map[rick.y][rick.x] = 3;
			rick.y = rick.y - 1;
			map[rick.y][rick.x] = 5;
			if (map[rick.y - 1][rick.x] == 2) {
				rickScore++
				// console.log('score',rickScore)
				// drawWorld();
			}
			else if (map[rick.y - 1][rick.x] == 7) {
				rickScore += 10
				// console.log('score',rickScore)
			}
		}
	}
	else if (e.keyCode === 40) { // RICK MOVE DOWN
		// portal()
		if (map[rick.y + 1][rick.x] !== 1) {
			map[rick.y][rick.x] = 3;
			rick.y = rick.y + 1;
			map[rick.y][rick.x] = 5;
			if (map[rick.y + 1][rick.x] == 2) {
				rickScore++
				// console.log('score',rickScore)
				// drawWorld();

			}
			else if (map[rick.y + 1][rick.x] == 7) {
				rickScore += 10
				// console.log('score',rickScore)
			}
		}
		// Finding cordinates in console
		// drawWorld()
		console.log('rick coordinates' + rick.y + '' + rick.x)

	}
	document.getElementById('rickScore').innerHTML = rickScore


	// Random Movement
	if (Math.random() > .5) {
		// Move an "x" direction
		if (Math.random() > .5) {
			// Right
			if (map[evilMorty.y][evilMorty.x + 1] !== 1) {
				map[evilMorty.y][evilMorty.x] = 3;
				evilMorty.x = evilMorty.x + 1;
				map[evilMorty.y][evilMorty.x] = 4;
				if (map[evilMorty.y + 1][evilMorty.x] == 2) {
					mortyScore++
					// drawWorld();
				}
				else if (map[evilMorty.y][evilMorty.x + 1] == 7) {
					mortyScore += 10
					// console.log('score',evilMortyScore)
				}
				// console.log('right')
			}
			else {
				// Left

				if (map[evilMorty.y][evilMorty.x - 1] !== 1) {
					map[evilMorty.y][evilMorty.x] = 3;
					evilMorty.x = evilMorty.x - 1;
					map[evilMorty.y][evilMorty.x] = 4;
					if (map[evilMorty.y + 1][evilMorty.x] == 2) {
						mortyScore++
						// drawWorld();
					}
					else if (map[evilMorty.y][evilMorty.x - 1] == 7) {
						mortyScore += 10
						// console.log('score',evilMortyScore)
					}
				}
				// console.log('left')
			}
		}
		else {
			// check if i am able to move in the "y" direction
			// Move to "y" direction
			if (Math.random() > .5) {
				// Up
				if (map[evilMorty.y - 1][evilMorty.x] !== 1) {
					map[evilMorty.y][evilMorty.x] = 3;
					evilMorty.y = evilMorty.y - 1;
					map[evilMorty.y][evilMorty.x] = 4;
					if (map[evilMorty.y + 1][evilMorty.x] == 2) {
						mortyScore++
						// drawWorld();
					}
					else if (map[evilMorty.y - 1][evilMorty.x] == 7) {
						mortyScore += 10
						// console.log('score',evilMortyScore)
					}
				}

				// console.log('up')
			}
			else {
				// Down
				if (map[evilMorty.y + 1][evilMorty.x] !== 1) {
					map[evilMorty.y][evilMorty.x] = 3;
					evilMorty.y = evilMorty.y + 1;
					map[evilMorty.y][evilMorty.x] = 4;
					if (map[evilMorty.y + 1][evilMorty.x] == 2) {
						mortyScore++
						// drawWorld();
					}
					else if (map[evilMorty.y + 1][evilMorty.x] == 7) {
						mortyScore += 10
						// console.log('score',evilMortyScore)
					}
				}
				// console.log('down')
			}
			// drawWorld();

		}
		// document.getElementById('mortyScore').innerHTML = mortyScore
	}
	drawWorld();
	document.getElementById('mortyScore').innerHTML = mortyScore
	document.getElementById('rickScore').innerHTML = rickScore
	endGame(rickScore, mortyScore);
}
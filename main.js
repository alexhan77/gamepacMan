	// 	1 => <div class='wall'></div>
	// 2 => <div class='coin'></div>
	// 3 => <div class='ground'></div>
	// 4 => <div class='evilMorty'></div>
	// 5 => <div class='rick'></div>
	// map = [ 1, 2, 3 ]
	// map = [ [1,2,3], [1,2,3], [1,2,3] ];
    
	// var currentRick = rick

	// Where Rick starts
	rick = {
		x: 12,
		y: 2,
	}

	evilMorty = {
		x: 12,
		y: 7,
	}
	map = [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
		[1,6,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,6,1], 
		[1,2,1,1,1,2,2,1,2,1,1,1,5,1,1,1,2,1,2,2,1,1,1,2,1], 
		[1,2,1,7,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,7,1,2,1], 
		[1,2,1,2,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,2,1,2,1], 
		[1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1], 
		[1,2,1,2,1,2,2,1,2,2,1,1,2,1,1,2,2,1,2,2,1,2,1,2,1], 
        [1,2,1,1,1,2,1,1,1,2,2,2,4,2,2,2,1,1,1,2,1,1,1,2,1], 
        [1,2,1,2,1,2,2,1,2,2,1,1,2,1,1,2,2,1,2,2,1,2,1,2,1],
        [1,2,2,2,1,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,1],
        [1,2,1,2,1,2,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1,2,1,2,1],
        [1,2,1,7,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,7,1,2,1],
        [1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,2,1,2,2,1,1,1,2,1],
        [1,6,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,6,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	]
// grabbing the element 
	var el = document.getElementById('world');
	
	function drawWorld() {
		el.innerHTML = '';
		for(var y = 0; y < map.length ; y = y + 1) {
			for(var x = 0; x < map[y].length ; x = x + 1) {		
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

document.onkeydown = function(e){
		// console.log(e);
		if (e.keyCode === 37){ // RICK MOVE LEFT
			if ( map[rick.y][rick.x-1] !== 1){
				map[rick.y][rick.x] = 3;
				rick.x = rick.x - 1;
				map[rick.y][rick.x] = 5;
				drawWorld();
			}
		}
		else if (e.keyCode === 38){ // RICK MOVE UP
			if ( map[rick.y-1][rick.x] !== 1){
				map[rick.y][rick.x] = 3;
				rick.y = rick.y - 1;
				map[rick.y][rick.x] = 5;
				drawWorld();
			}
		}
		else if (e.keyCode === 39){ // RICK MOVE RIGHT
			if ( map[rick.y][rick.x+1] !== 1){
				map[rick.y][rick.x] = 3;
				rick.x = rick.x + 1;
				map[rick.y][rick.x] = 5;
				drawWorld();
			}
		}
		else if (e.keyCode === 40){ // RICK MOVE DOWN
			if ( map[rick.y+1][rick.x] !== 1){
				map[rick.y][rick.x] = 3;
				rick.y = rick.y + 1;
				map[rick.y][rick.x] = 5;
				drawWorld();
			}
		}
		console.log(rick.y +'+'+ rick.x)
	}

	// Moving the evilMorty functions

	document.onkeyup = function(e){
		console.log(map[rick.x][rick.y])
		if (Math.random() > .5){
			// Move an "x" direction
			if (Math.random() > .5){
				// Right
				if ( map[evilMorty.y][evilMorty.x+1] !== 1){
					map[evilMorty.y][evilMorty.x] = 2;
					evilMorty.x = evilMorty.x + 1;
					map[evilMorty.y][evilMorty.x] = 4;
					drawWorld();
				}
				// console.log('right')
			}
			else {
				// Left
				
				if ( map[evilMorty.y][evilMorty.x-1] !== 1){
					map[evilMorty.y][evilMorty.x] = 2;
					evilMorty.x = evilMorty.x - 1;
					map[evilMorty.y][evilMorty.x] = 4;
					drawWorld();
				}
				// console.log('left')
			}
		}
		else {
			// Move to "y" direction
			if (Math.random() > .5) {
				// Up
				if ( map[evilMorty.y-1][evilMorty.x] !== 1){
					map[evilMorty.y][evilMorty.x] = 2;
					evilMorty.y = evilMorty.y - 1;
					map[evilMorty.y][evilMorty.x] = 4;
					drawWorld();
				}
				
				// console.log('up')
			}
			else {
				// Down
				if ( map[evilMorty.y+1][evilMorty.x] !== 1){
					map[evilMorty.y][evilMorty.x] = 2;
					evilMorty.y = evilMorty.y + 1;
					map[evilMorty.y][evilMorty.x] = 4;
					drawWorld();
				}
				// console.log('down')
			}
			drawWorld();
		}

	}

	// Moving rick from one portal to another


    rick.FPS = 30;
	
	drawWorld();
	

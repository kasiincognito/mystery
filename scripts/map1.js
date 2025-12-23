class Map {
	constructor() {
		this.tilemap = [// Tilemap config that can be personalized to have different patterns of map
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
			[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
			[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
			[1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
			[1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
			[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1],
			[1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1]
		]
		this.maplist = []
		this.colliders = []
		this.size = 70
	}
	draw() {		// The one and only than can understand tilemap
		this.x = mapX
		this.y = mapY
		this.maplist = []
		this.colliders = []
		for (var i = 0; i < this.tilemap.length; i++) {
			this.maplist.push(new Array())
			for (var o = 0; o < this.tilemap[i].length; o++) {
				if (this.tilemap[i][o] == 0) {
					this.x += this.size
					this.maplist[i].push(new Tile(this.x, this.y, this.size, this.size, "white"))
					// I don't draw here and I don't know why
				}
				else if (this.tilemap[i][o] == 1) {
					this.x += this.size
					this.maplist[i].push(new Tile(this.x, this.y, this.size, this.size, "red"))
					this.maplist[i][o].draw()
					this.colliders.push(this.maplist[i][o])
				}
			}
			this.x = mapX
			this.y += this.size
		}
	}
}

class Tile { // A tile object prepared to be part of the map
	constructor(x, y, width, height, c) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.color = c
	}
	draw() {
		ctx.fillStyle = this.color
		ctx.fillRect(this.x, this.y, this.width, this.height)
	}
}
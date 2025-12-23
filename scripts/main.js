var mapX = 30
var mapY = 30
var map = new Map(mapX, mapY)
var player = new Player()

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        player.jump()
    }
    if (event.key === "ArrowRight") {
        player.isStopped = false
        player.right()
    }
    if (event.key === "ArrowLeft") {
        player.isStopped = false
        player.left()
    }
})

document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        player.isStopped = true
    }
})
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function gameloop() {
    for (var i = 0; i < map.colliders.length; i++) {
        checkCollisionX(player, map.colliders[i])
    }
    draw()
    for (var i = 0; i < map.colliders.length; i++) {
        checkCollisionY(player, map.colliders[i])
    }
}

draw()
setInterval(gameloop, 1000 / 50)
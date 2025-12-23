var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function draw(){
    clear()
    player.draw()
    map.draw()
}
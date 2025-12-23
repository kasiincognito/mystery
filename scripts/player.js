class Player{
    constructor(){
        this.width = 60
        this.height = this.width * 2
        this.x = (canvas.width / 2) - (this.width / 2)
        this.y = (canvas.height / 2) - (this.height / 2)
        this.ay = 0
        this.ax = 0
        this.vx = 15
        this.isStopped = true
    }
    draw(){// Draws the player each frame
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)

        // updates the map's coordinates
        mapY += this.ay
        mapX += this.ax

        // checks if player stops
        if(this.isStopped == true){
            if(this.ax > 0){
                this.ax -= 1
            }else if(this.ax < 0){
                this.ax += 1
            }
        }

        this.ay -= 1
    }
    jump(){
        this.ay = 15
    }
    right(){
        this.ax = -this.vx
    }
    left(){
        this.ax = this.vx
    }
}
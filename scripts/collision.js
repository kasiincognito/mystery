function checkCollisionY(main, target, index) {
    main_bottom = main.y + main.height
    main_side = main.x + main.width
    target_bottom = target.y + target.height
    target_side = target.x + target.width

    // Am I colliding in the y axis?
    if (main_side > target.x && main.x < target.x + (target.width / 2)) {
        if (main.y + main.height > target.y && main.y + main.height < target.y + target.height) {
            main.ay = 0
            mapY += (main.y + main.height) - target.y
        }
    }
    // Am I colliding in the y axis?
    if (main.x < target_side && main.x > target.x) {
        if (main_bottom >= target.y && main_bottom < target_bottom) {
            main.ay = 0
            mapY += (main.y + main.height) - target.y
        }
    }
}

function checkCollisionX(main, target, index) {
    main_bottom = main.y + main.height
    main_side = main.x + main.width
    target_bottom = target.y + target.height
    target_side = target.x + target.width

    if (main_bottom > target.y && main.y < target_bottom) {
        if (main.x + main.width >= target.x && main.x + main.width < target.x + (target.width / 2)) {
            main.ax = 0
            mapX += (main.x + main.width) - target.x
        }
        if (main.x > target.x && main.x < target.x + target.width) {
            main.ax = 0
            mapX -= (target.x + target.width) - main.x
        }
    }
}


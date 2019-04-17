const ConsoleManager = require('./modules/console-manager')

const Vector = require('./model/Vector')
const Line = require('./model/Line')
const Player = require('./model/Player')

const cm = new ConsoleManager()
const player = new Player("□")
cm.init()
cm.setOnKeyPressEvent((str, key) => {
    cm.clear()
    switch (key.name) {
        case "up":
            player.moveY(-1)
            break;
        case "down":
            player.moveY(1)
            break;
        case "left":
            player.moveX(-1)
            break;
        case "right":
            player.moveX(1)
            break;
    }
    cm.createDot("□", player.getPosition())
    cm.render()
})
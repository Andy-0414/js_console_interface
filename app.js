const ConsoleManager = require('./modules/console-manager')

const Vector = require('./model/Vector')
const Line = require('./model/Line')
const Player = require('./model/Player')
const Shape = require('./model/Shape')

const cm = new ConsoleManager()
const player = new Player("□")
const box = new Shape.Box()
box.setSize(10, 10)
cm.init()
cm.setOnKeyPressEvent((str, key) => {
    cm.clear()
    switch (key.name) {
        case "up":
            box.setSize(box.getSize().getX(), box.getSize().getY() - 1)
            player.moveY(-1)
            break;
        case "down":
            box.setSize(box.getSize().getX(), box.getSize().getY() + 1)
            player.moveY(1)
            break;
        case "left":
            box.setSize(box.getSize().getX() - 1, box.getSize().getY())
            player.moveX(-1)
            break;
        case "right":
            box.setSize(box.getSize().getX() + 1, box.getSize().getY())
            player.moveX(1)
            break;
    }
    //cm.createDot("□", player.getPosition())
    cm.createShape(box)
    cm.render()
})
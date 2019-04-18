const ConsoleManager = require('./modules/console-manager')

const Vector = require('./model/Vector')
const Line = require('./model/Line')
const Player = require('./model/Player')
const Shape = require('./model/Shape')

const cm = new ConsoleManager()
const player = new Player("□")
const box = new Shape.Box()
const polygon = new Shape.Polygon()
box.setSize(2, 2)
polygon.setShape([
    ["■","□","■","□","■"],
    ["□","■","□","■","□"],
    ["■","□","■","□","■"]
])
polygon.setPosition(1,1)
cm.init()
cm.setOnKeyPressEvent((str, key) => {
    cm.clear()
    switch (key.name) {
        case "up":
            box.setSizeY( box.getSize().getY() - 1)
            player.moveY(-1)
            break;
        case "down":
            box.setSizeY(box.getSize().getY() + 1)
            player.moveY(1)
            break;
        case "left":
            box.setSizeX(box.getSize().getX() - 1)
            player.moveX(-1)
            break;
        case "right":
            box.setSizeX(box.getSize().getX() + 1)
            player.moveX(1)
            break;
    }
    //cm.createDot("□", player.getPosition())
    cm.createShape(box)
    cm.createShape(polygon)
    cm.render()
})
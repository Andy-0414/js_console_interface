const ConsoleManager = require('./modules/console-manager')

const Vector = require('./model/Vector')
const Line = require('./model/Line')
const Shape = require('./model/Shape')

const cm = new ConsoleManager()
const box = new Shape.Box()
const polygon = new Shape.Polygon()
box.setSize(10, 10)
polygon.setShape([
    ["■", "□", "■", "□", "■"],
    ["□", "■", "□", "■", "□"],
    ["■", "□", "■", "□", "■"],
    ["□", "■", "□", "■", "□"]
])
polygon.setPosition(10, 10)
cm.init()
cm.setOnKeyPressEvent((str, key) => {
    cm.clear()
    switch (key.name) {
        case "up":
            box.setSizeY(box.getSize().getY() - 1)
            polygon.moveY(-2)
            break;
        case "down":
            box.setSizeY(box.getSize().getY() + 1)
            polygon.moveY(2)
            break;
        case "left":
            box.setSizeX(box.getSize().getX() - 1)
            polygon.moveX(-2)
            break;
        case "right":
            box.setSizeX(box.getSize().getX() + 1)
            polygon.moveX(2)
            break;
    }
    cm.createShape(box)
    cm.createShape(polygon)

    cm.render()
})
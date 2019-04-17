const Vector = require('./Vector')

class Player {
    constructor(str) {
        this.position = new Vector(0, 0)
        this.shape = str || "□"
    }
    moveX(x) {
        this.position.moveX(x)
    }
    moveY(y) {
        this.position.moveY(y)
    }
    getPosition() {
        return this.position
    }
    setPosition(_x, _y) {
        _x && this.position.setX(_x)
        _y && this.position.setY(_y)
    }
    getX() {
        return this.position.getX()
    }
    getY() {
        return this.position.getY()
    }
}

module.exports = Player
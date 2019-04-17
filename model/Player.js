const Vector = require('./Vector')

class Player{
    constructor(){
        this.position = new Vector(0,0)
    }
    moveX(x) {
        this.position.moveX(x)
    }
    moveY(y) {
        this.position.moveY(y)
    }
    getPosition(){
        return this.position
    }
    getX() {
        return this.position.getX()
    }
    getY() {
        return this.position.getY()
    }
}

module.exports = Player
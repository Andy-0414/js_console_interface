module.exports = class Vector {
    constructor(_x = 0,_y = 0) {
        this.x = _x;
        this.y = _y
    }
    setX(_x) {
        this.x = _x
    }
    getX() {
        return this.x
    }
    setY(_y) {
        this.y = _y
    }
    getY() {
        return this.y
    }
    getXY() {
        return
    }

    static sum(v1, v2) {
        return new Vector(v1.getX() + v2.getX(), v1.getY() + v2.getY())
    }
}
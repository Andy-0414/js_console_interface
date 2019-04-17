const Vector = require('./Vector')

class Shape {
    constructor(str) {
        this.position = new Vector(0, 0)
        this.str = str || "□"

        this.size = new Vector(0,0)
    }
    getPosition(){
        return this.position
    }
    getSize(){
        return this.size
    }
    setPosition(_x, _y) {
        _x && this.position.setX(_x)
        _y && this.position.setY(_y)
    }
    setSize(_x,_y){
        this.size.setX(_x)
        this.size.setY(_y)
    }
    setSizeX(_x) {
        this.size.setX(_x)
    }
    setSizeY(_y) {
        this.size.setY(_y)
    }
}
class Polygon extends Shape {

}
class Box extends Shape {
    constructor() {
        super()
    }
    getShape() {
        var arr = []
        for (var i = 0; i < this.size.getY(); i++) {
            arr.push([])
            for (var j = 0; j < this.size.getX(); j++)
                arr[i].push(this.str)
        }
        return arr
    }
}
new Shape
module.exports = {
    Polygon,
    Box
}
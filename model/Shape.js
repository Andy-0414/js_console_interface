const Vector = require('./Vector')

class Shape {
    constructor() {
        this.position = new Vector(0, 0)

        this.size = new Vector(0,0)
    }
    getPosition(){
        return this.position
    }
    getSize(){
        return this.size
    }

    setPosition(_x, _y) {
        this.position.setX(_x)
        this.position.setY(_y)
    }
    setX(_x){
        this.position.setX(_x)
    }
    setY(_y){
        this.position.setY(_y)
    }
    moveX(_x){
        this.position.moveX(_x)
    }
    moveY(_y){
        this.position.moveY(_y)
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

    getShape() {
        
    }
}
class Polygon extends Shape {
    constructor(shape){
        super()
        this.shape = shape || []
    }
    setShape(shape){
        if(shape) this.shape = shape
    }
    getSize(){
        return new Vector(this.shape[0].length,this.shape.length)
    }
    getShape(){
        super.getShape()
        return this.shape
    }
}
class Box extends Shape {
    constructor(str) {
        super()
        this.str = str || "□"
    }
    getShape() {
        super.getShape()
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
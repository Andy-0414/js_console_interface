const Vector = require('./Vector')
class Line{
    constructor(){
        this.p1 = new Vector(0, 0)
        this.p2 = new Vector(0, 0)
    }
    setPointStart(_p1){
        this.p1 = _p1
    }
    getPointStart(){
        return this.p1
    }
    setPointEnd(_p2){
        this.p2 = _p2
    }
    getPointEnd(){
        return this.p2
    }
}
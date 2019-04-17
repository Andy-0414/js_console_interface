module.exports = class Vector {
    constructor(_x = 0, _y = 0) {
        this.x = _x;
        this.y = _y
    }
    _numberValidity(num,callback){
        if(num && typeof num == "number") callback()
    }
    setX(_x) {
        this._numberValidity(_x,()=>{
            this.x = _x
        })
    }
    setY(_y) {
        this._numberValidity(_y, () => {
            this.y = _y
        })
    }
    moveX(_x) {
        this._numberValidity(_x, () => {
            this.x += _x
        })
    }
    moveY(_y) {
        this._numberValidity(_y, () => {
            this.y += _y
        })
    }
    getX() {
        return this.x
    }
    getY() {
        return this.y
    }

    static sum(v1, v2) {
        return new Vector(v1.getX() + v2.getX(), v1.getY() + v2.getY())
    }
}
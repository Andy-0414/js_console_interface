const readline = require('readline');
const Vector = require('../model/Vector');
module.exports = class ConsoleManager {
    constructor() {
        this.consoleTable = []
    }
    getScreenX() {
        return process.stdout.columns / 2 - 1
    }
    getScreenY() {
        return process.stdout.rows - 1
    }

    init() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        this.clear()
    }
    setOnKeyPressEvent(keyEventCallBack) {
        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c') process.exit()
            keyEventCallBack(str, key)
        })
    }
    _writeArea(startPosition,size, chkCallBack) {
        for (var i = startPosition.getY(); i < size.getY(); i++) {
            for (var j = startPosition.getX(); j < size.getX(); j++) {
                chkCallBack(j, i)
            }
        }
    }
    createDot(str, vector) {
        this.consoleTable[vector.getY()][vector.getX()] = str
    }
    createShape(shape) {
        var prop = shape.getShape()
        this._writeArea(shape.getPosition(),shape.getSize(), (x, y) => {
            if (prop[y][x]) this.createDot(prop[y][x], new Vector(x, y))
        })
    }
    clear() {
        this.consoleTable = []
        for (var i = 0; i < this.getScreenY(); i++) {
            var arr = []
            for (var j = 0; j < this.getScreenX(); j++)
                arr.push("■")
            this.consoleTable.push(arr)
        }
    }

    render() {
        readline.cursorTo(process.stdout, 0, 0)
        this.consoleTable.forEach(x => {
            process.stdout.write(x.join('') + "\n")
        })
    }
}
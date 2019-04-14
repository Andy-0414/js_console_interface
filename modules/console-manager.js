const readline = require('readline');
module.exports = {
    consoleTable: [],
    getScreenX() {
        return process.stdout.columns / 2 - 1
    },
    getScreenY() {
        return process.stdout.rows - 1
    },

    init() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        this.clear()
    },
    setOnKeyPressEvent(keyEventCallBack) {
        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c') process.exit()
            keyEventCallBack(str, key)
        })
    },

    createDot(str, x, y) {
        this.consoleTable[y][x] = str
    },
    createBox(mode = "normal", x, y, sizeX, sizeY) {
        x = parseInt(x)
        y = parseInt(y)
        sizeX = parseInt(sizeX)
        sizeY = parseInt(sizeY)
        switch (mode) {
            case "normal":
                for (var i = y; i < y + sizeY; i++) {
                    for (var j = x; j < x + sizeX; j++) {
                        this.consoleTable[i][j] = "□"
                    }
                }
                break;
        }
    },
    clear() {
        for (var i = 0; i < this.getScreenY(); i++) {
            var arr = []
            for (var j = 0; j < this.getScreenX(); j++)
                arr.push("■")
            this.consoleTable.push(arr)
        }
    },

    render() {
        readline.cursorTo(process.stdout, 0, 0)
        this.consoleTable.forEach(x => {
            process.stdout.write(x.join('') + "\n")
        })
    }
}
const readline = require('readline');

module.exports = {
    init() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);

    },
    setOnKeyPressEvent(keyEventCallBack) {
        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c') process.exit()
            keyEventCallBack(str,key)
        })
    }
} 
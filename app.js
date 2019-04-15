const ConsoleManager = require('./modules/console-manager')

const Vector = require('./model/Vector')
const Line  = require('./model/Line')

const cm = new ConsoleManager()
cm.init()
cm.setOnKeyPressEvent((str,key)=>{
    cm.clear()
    cm.createDot("□",new Vector(str,str))
    cm.render()
})
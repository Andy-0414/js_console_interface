const cm = require('./modules/console-manager')

cm.init()
cm.setOnKeyPressEvent((str,key)=>{
    cm.clear()
    cm.createBox("normal", 0, 0, str, str)
    cm.createBox("normal", str, str, str, str)
    cm.render()
})
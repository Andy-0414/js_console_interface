const cm = require('./modules/console-manager')

cm.init()
cm.setOnKeyPressEvent((str,key)=>{
    cm.createDot("□",str,str)
    cm.render()
})
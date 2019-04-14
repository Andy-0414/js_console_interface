const cm = require('./modules/console-manager')

cm.init()
cm.setOnKeyPressEvent((str,key)=>{
    cm.createBox("normal",0,0,str,str)
    cm.render()
})
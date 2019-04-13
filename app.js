const cm = require('./modules/console-manager')

cm.init()
cm.setOnKeyPressEvent((str,key)=>{
    cm.createBox("normal",5,5,str,str)
    cm.render()
})
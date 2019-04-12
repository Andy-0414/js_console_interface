const cm = require('./modules/console-manager')

cm.init()
cm.setOnKeyPressEvent((str,key)=>{console.log(str)})
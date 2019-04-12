const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') process.exit();
    createBox(process.stdout.columns/2,process.stdout.rows-1)
});
function createBox(x,y,sizeX,sizeY){
    var str = []
    for(var i = 0; i < y;i++)
    {
        str[i] = ""
        for(var j = 0; j < x;j++)
        {
            if(i == 0 || i == y-1 || j == 0 || j == x-1)
                str[i] += "■"
            else
                str[i] += "□"
        }
    }
    for(var i = 0; i < y;i++)
        console.log(str[i])
}
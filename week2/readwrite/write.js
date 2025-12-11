const fs = require('fs').promises

const data = "Text to add to this file"
fs.writeFile("something.txt",data,'utf-8')

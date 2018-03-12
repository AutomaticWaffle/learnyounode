var fs = require('fs')
var file = process.argv[2]
var contents = fs.readFile(process.argv[2], (error, data) => {
  if (error) throw error
  var lines = data.toString().split('\n').length - 1
  console.log(lines)
})
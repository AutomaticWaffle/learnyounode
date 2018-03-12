var path = require('path')
var myModule = require('./module')
var directory = process.argv[2]
var filterExtension = process.argv[3]

var callback = (err, list) => {
  if (err) throw err;
  list.forEach((file) => {
    console.log(file)
  })
}

myModule(directory, filterExtension, callback)
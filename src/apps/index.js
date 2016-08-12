let fs = window.require('fs')
let path = window.require('path')

let obj = {}
let ignore = ['index.js']
let files = fs.readdirSync(path.resolve('./src/apps'))

files.forEach((file) => {
  if (ignore.indexOf(file) < 0) {
    obj[file] = require(`./${file}/main.vue`)
  }
})

export default obj

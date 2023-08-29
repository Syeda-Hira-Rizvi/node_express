//path module(a module that allows us to interact with the file paths. we can't interact with the file paths when we run javascript in the browser.
const path = require('path')

//seperator property returns our platform specific separator.
console.log(path.sep)

//join method
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//basename method (used to get the last part in the path)
const base = path.basename(filePath)
console.log(base)

//resolve method (returns absolute path)
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)
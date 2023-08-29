//CommonJS, every file is module(by default)
//Modules- Encapsulated Code (only share minimum)
//Module is global and it can be accessed and shared anywhere in our app.
//when import a module you actually invoke it ,this happens because code in 7-mind-granade.js is not exported on its own ,actually when the node exports it, it wraps it into a function and we can invoke the code if we can a function executed(invoked) in the file 7.

const names = require('./4-names')
//console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
//console.log(data)
require('./7-mind-grenade')

// sayHi("Hira")
// sayHi(names.batool)
// sayHi(names.zergull)
//File System Module(FS): we can interact through the file system through this.
//this module has two types asynchrous non-blocking and synchronously blocking.

//synchronous blocking FS module: here we are destructuring the methods i.e readFileSync
const {readFileSync,writeFileSync} = require('fs')
//we can also write it as:
// const fs = require('fs')
// const first = fs.readFileSync('./content/first.txt/','utf-8')
// in readFileSync method we have to pass two parameters i.e path to that specific path as well as what is the enoding we generally go with default utf-8. and node knows how to decode the file .
console.log('start')
const first = readFileSync('./content/first.txt/','utf-8');
const second = readFileSync('./content/second.txt/','utf-8');

console.log(first, second)

//writeFileSync uses two parameters i.e filename and if there is no file then node will create it and the other is the value that we wanted to pass.
//if you have any value(means text)in that file, this will be overwritten by the node and replaced by the new value.
//writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)

//to append in the file we pass another argument i.e options object having prperty name i.e flag in the, it will write the result again. line by line.
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'}) //this is very time consuming a dif one user is doing that then the node will not be able to serve ther users and this may down our application and here javascript is reading this code synchronously  i.e line by line.No other user can interact with the app then.
console.log('done with this task')
console.log('starting the new one')
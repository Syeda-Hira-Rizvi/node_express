// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS...it is a library of node.js)
// module - info about module (file)
// process - info about environment where the program is being executed



//console.log(__dirname)
//console.log(__filename)
//console.log(require)
//console.log(module)
//console.log(process)


// here 1000 is written bcz we want to run our interval every second.
// setInterval(() => {
//     console.log('hello world')
// }, 1000)

//we also have setTimeout:
console.log("Before the setTimeout function call")

setTimeout(() => {
    console.log('hello world')
}, 1000)

console.log("Before the setTimeout function call")
//built-in modules are OS module,path module,file system (FS) module and http module that provides properties and methods to interact with http and server.

//OS module:(that provides properties and methods to interact with OS and server.)
const os = require('os')

//info about current user
const user = os.userInfo()
os.networkInterfaces
//console.log(user)

//method returns the system uptime (for how long the system is running) in seconds.We don't need to declare a variable everytime like const user.We can just console.log it also.
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
   machine: os.machine(),
   hostname: os.hostname(),
}
console.log(currentOS);



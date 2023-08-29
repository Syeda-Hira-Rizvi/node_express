//local (previously this secret variable can be accessed anywhere in the app but now it is set as local.)
const secret = 'SUPER SECRET'
//global (share)
const batool = "Batool"
const zergull = "Zergull"

 //module is global and it is an object and it has an object named exports in it ...we can also console log module  into the app file but wecan also do it here and how type node 4-names.js in terminal.
//console.log(module)
module.exports = {batool, zergull}
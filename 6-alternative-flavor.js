//const items = ['item1', 'item2']
//module.exports = items
//here we are setting a property named(by ourself) items because module.exports is an obj and setting it equal to array.
module.exports.items = ['item1', 'item2']

const person = {
    name: "alizay",
}
//here singlePerson is a property
//module.exports.singlePerson = person
//we can also write it as
module.exports = person

//external modules...first we have to install them.
const _ = require('lodash')  //installed dependency lodash

const items = [1,[2,[3,[4]]]] //flat and deep method i.e flat array
const newItems = _.flattenDeep(items)
console.log(newItems)

console.log('hello people')
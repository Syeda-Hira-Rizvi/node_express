// asynchrous non-blocking FS module
const { readFile, writeFile} = require('fs')

//we run that callback function after we complete the functionality what we are doing.(like every time we click a button the event.listener event method runs.

// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 20> we will get this buffer if we don't provide the utf encoding and we provide this encoding value ater the path .
console.log("start")
readFile('./content/first.txt','utf-8', (err,result)=>{
    if (err){
        console.log(err)
        return
    }
   // console.log(result)
   const first = result
   readFile('./content/second.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
   const second = result
writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    //console.log(result) //it will give us undefined in the terminal cz we're not expecting anything here.
    console.log('done with this task')
  }
  )
 })
})
console.log('starting with the next task')

//this is asynchronous approach and in this node offload the task which is time consuming and start the next task. so app can keep on serving other users cz there is no condition to first complete that time-atking task.

//this async is messy but quick ...other alternatives are returning promises like async await.
 

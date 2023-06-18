const doSomething  = callback =>{
    setTimeout(()=>{
        const skills = ['HTML','CSS','JS','JAVA',"PYTHON","CSHARP","SOLIDITY"]
        callback(false,skills)
    },5000)
}
const callback = (err,res)=>{
   return err?console.log(err):console.log(res)
}
doSomething(callback)
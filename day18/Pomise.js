const doPromise = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        
        const skills = ['HTML','CSS','JS','JAVA',"PYTHON","CSHARP","SOLIDITY"]
        if(skills.length>0){
            resolve(skills)
        }
        else{
            reject("sorry myaan")
        }
    }, 2000)});

// doPromise.then(res=>console.log(res)).catch(error=> console.log(error))
doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
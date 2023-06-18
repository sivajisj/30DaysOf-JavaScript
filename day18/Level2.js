const url = 'https://api.thecatapi.com/v1/breeds'
fetch(url).then(response=> response.json())
.then(data=>{
   
        const CatName = data.map(e=> e.name)
   
    console.log("cat name :",CatName);
}).catch(err=>console.error("Error",err))

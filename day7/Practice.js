const randUniq = (l)=>{
     let randArr = []

     for (let index = 0; index < 7; index++) {
      // const element = array[index];
      let is = true;
      let r = Math.floor(Math.random()*l)
      for(let x of randArr){
                if(x==r){
                  is =false;
                  break
                }
      }
      if(is){
        randArr.push(r);
  
      }
          
     }
     return randArr

}
console.log(randUniq(9));
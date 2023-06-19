let yearText = document.querySelector('strong');
      yearText.style.fontSize = '30px'; 

      const colrgen = ()=>{
        let alfn ='0123456789abcdef';
        let colArr=[];
        for (let i=0; i<6; i++) {
     let index = Math.floor(Math.random()* 15);
     colArr.push(alfn[index]);
        }
        return '#'+colArr.join('');
      }

      setInterval(() => {
        yearText.style.color = colrgen();

        
      }, 1000);

      let h1 = document.querySelector('h1');
      h1.style.fontSize = '15px';
      h1.style.fontFamily = 'courier';
      h1.style.fontWeight = 'bold';
      h1.style.textAlign = 'center';

      let h2 = document.querySelector('h2');
      h2.style.color = 'grey';
      h2.style.fontSize = '12px';
      h2.style.textAlign = 'center';
      h2.style.fontWeight = '500';
      h2.style.textDecoration = 'underline';
      h2.style.marginBottom = '10px'
      h2.style.fontFamily = 'san-serif';
      h2.style.cursor ='pointer';
      setInterval(() => {
        date.style.backgroundColor = generateColor();
      }, 1000);
      let listItems = document.querySelectorAll('li');
      
      for(let item of listItems) {
        item.style.listStyleType = 'none';
        item.style.fontWeight = '350';
        item.style.padding = '8px';
        item.style.margin = '6px';
        item.style.textAlign = 'left';
      }
      
      // last task    
      for(const item of listItems) {
        if(item.textContent.endsWith('Done'))
          item.style.backgroundColor = '#228b22';
        else if (item.textContent.endsWith('Ongoing')) 
          item.style.backgroundColor = '#FFFF00';
        else item.style.backgroundColor = '#DC143C';
        
        item.style.fontFamily = 'san-serif';
        item.style.marginRight = '50px';
      }
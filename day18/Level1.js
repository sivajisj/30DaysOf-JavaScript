// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.error(error))
//const url = 'https://restcountries.com/v2/all'
const Countries = 'https://restcountries.com/v2/all'
fetch(Countries).then(response => response.json())
.then(data=>{
    data.forEach(c => {
        const name = c.name.common;
        const capital = c.capital[0];
        const languages = Object.values(c.languages).join(', ');
        const population = c.population.toLocaleString();
        const area = c.area.toLocaleString();
        
        console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area} sq km`);
      console.log('----------------------');
    });
})
.then(err=>console.error('Error',err))
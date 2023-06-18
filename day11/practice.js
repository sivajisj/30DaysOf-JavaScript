// let num = [ 1,2,3,4]
// let [t,...ott] = num 
// // console.log(ott);
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
// console.log(country, city)
// }
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  const area = ({width,height}) =>{
    return width*height
  }
  console.log(area(rectangle));
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
 }
// let Max = 0;
// let SkilledPerson;
// // for (const user of Object.keys(users)) {
// //     if(users[user].skills.length >Max){
// //         Max =users[user].skills.length
// //         SkilledPerson = Object.assign({},users[user])
// //     }
    
// // }
// // console.log(SkilledPerson);
// let MoreThan50 = 0;
// let CountLogged =0
// let Mern = ["Mongodb","Express","React","Node"]
// let MernDev =0

// for(const user of Object.keys(users)){
//        if(users[user].isLoggedIn){
//                 CountLogged++
//        }
//        if(users[user].points>=50){
//             MoreThan50++;
//        }
       

//       }
//       for(const skillls of users['skills']){
//         if(Mern.indexOf(skillls)!=-1){
//               MernDev++;
//         }
//        }
// console.log("Total logged Users :"+CountLogged)
// console.log(`${MoreThan50} users have more than 50 points.`);
// console.log("total numbere of Mern Devs :"+MernDev)
let keys = Object.keys(users);
let values = Object.values(users)
console.log(keys,values);

// // //instantiating class using new key word
// // class newCl{
// // constructor(lastName="Puri",irstName="Jagannath") {
// // //    console.log(this);
// //     this.lastName=lastName
// //     this.irstName=irstName
    
// // }
// //  Movie() {
// //     const s = `Marvel cenimatic universe are the best `    
// //     return s
// // }
// // }
// // const b = new newCl();
// // console.log(b.Movie());
// // const c = new newCl("wick","john");
// // console.log(c);
// // const c1 = new newCl("puth","charlie");
// // console.log(c1);
// // const c2 = new newCl("Parker","Peter");
// // console.log(c2);

// //Person classs
// class Person{
//     constructor(fName,lName,age,city){
//         this.fName =fName;
//         this.lName = lName;
//         this.setSkillore = 0;
//         this.setSkill =[];
//         this.age = 23;
//         this.city = city;

//     }
//     get getsetSkillore(){
//         return this.setSkillore
//     }
//     get getsetSkill(){
//         return this.setSkill
//     }
//     set SetS(setSkillore){
//         this.setSkillore+=setSkillore
//     }
//     set setsetSkill(skill){
//         this.setSkill.push(skill)

//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
//  person1.setSkillore =345;
//  person1.setSkill ="HTML"
//  person1.setSkill ="CSS"
//  person1.setSkill ="JAVA"
//  person1.setSkill ="JS"
//  person1.setSkill ="GIT"
//  person1.setSkill ="SQL"
// //  person1.setSkill ="PYTHON"



//  console.log(person1.setSkillore);
//  console.log(person1.setSkill);
// // class Person {
// //     constructor(firstName, lastName, age, country, city) {
// //       this.firstName = firstName
// //       this.lastName = lastName
// //       this.age = age
// //       this.country = country
// //       this.city = city
// //       this.setSkillore = 0
// //       this.setSkill = []
// //     }
// //     getFullName() {
// //       const fullName = this.firstName + ' ' + this.lastName
// //       return fullName
// //     }
// //     get getsetSkillore() {
// //       return this.setSkillore
// //     }
// //     get getsetSkill() {
// //       return this.setSkill
// //     }
// //     set setsetSkillore(setSkillore) {
// //       this.setSkillore += setSkillore
// //     }
// //     set setSkill(skill) {
// //       this.setSkill.push(skill)
// //     }
// //   }
  
// //   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// //   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
// //   person1.setsetSkillore = 1
// //   person1.setSkill = 'HTML'
// //   person1.setSkill = 'CSS'
// //   person1.setSkill = 'JavasetSkillript'
  
// //   person2.setsetSkillore = 1
// //   person2.setSkill = 'Planning'
// //   person2.setSkill = 'Managing'
// //   person2.setSkill = 'Organizing'
  
// //   console.log(person1.setSkillore)
// //   console.log(person2.setSkillore)
  
// //   console.log(person1.setSkill)
// //   console.log(person2.setSkill)
class Person{
    constructor(fname,lname,age) {
        this.fname = fname;
        this.lname = lname
        this.age = age
        this.skills = []
        this.setSkillore = 0

        
    }
    getFullName() {
        const fullName = this.fname + ' ' + this.lname
        return fullName
      }
    set setsetSkillore(setSkillore){
        this.setSkillore+=setSkillore
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    get getSkills() {
        return this.skills
    }
    get setc(){
        return this.setSkillore
    }
}
const p1 = new Person("Sivaji", "Gadidala",23);
p1.setc =9;
p1.setSkill = "HTML"
p1.setSkill = "CSS"
p1.setSkill = "JAVA"
p1.setSkill = "JS"
p1.setSkill = "PYTHON"
p1.setSkill = "CSHARP"
p1.setSkill = "MYSQL"
p1.setSkill = "GIT"
p1.setSkill = "BOOTSTRAP"

console.log(p1.setSkill);
console.log(p1.getFullName());
console.log(p1.getSkills);
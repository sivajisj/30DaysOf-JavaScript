const Student = {
     firstName : "Sivaji",
     lastName : "Gadidala",
     Age : 22,
     Skills: ["HTML","CSS","JS","C#","JAVA"],
     country:"India"
     
}
const Tx = JSON.stringify(Student,undefined,4)
localStorage.setItem("Student",Stext)

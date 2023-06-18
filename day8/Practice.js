let Dog ={
    Name: "max",
    Age:5,
    Color:"Brown",
    Bark :function (){ return "Woooof Wooooooooof"},
    getInfo: function(){ return `${Dog.Name} is ${Dog.Age} years old. it is ${Dog.Color} color doggy . it Make Sounds like ${Dog.Bark()}`}

}
console.log(Dog.Bark);
Dog.Breed="Golden Retriever"
console.log(Dog.getInfo);

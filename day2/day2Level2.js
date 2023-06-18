// console.log("'there is no excercise better for the heart reaching down and lifting people up' by John Holmes teaches us to help one another.");
//console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
// let num1 =parseInt("10");
// let num2 =10;
// console.log(num2===num1);
// console.log(Math.round(9.8));
// const sentence="I hope this course is not full of jargon";
// console.log(sentence.includes("jargon"));
// let rand  = Math.random("sj".length)+1;
// console.log("sj".charAt(rand));
// console.log(" 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125");
// console.log('You cannot end a sentence with because because because is a conjunction'.substr(31,23));
// let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love' ;
// let re = /love/gi;
// let count = sentence.match(re).length;
// console.log(count);
// sen2="You cannot end a sentence with because because because is a conjunction";
// let re = /because/gi;
// let count = sen2.match(re);
// console.log(count);
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean the text
// const cleanedText = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

// Count word frequency
// const words = cleanedText.split(" ");
// const wordCount = {};
// let mostFrequentWord = '';
// let highestFrequency = 0;

// for (let word of words) {
//   wordCount[word] = (wordCount[word] || 0) + 1;
//   if (wordCount[word] > highestFrequency) {
//     highestFrequency = wordCount[word];
//     mostFrequentWord = word;
//   }
// }

// console.log("Cleaned Text:", cleanedText);
// console.log("Most Frequent Word:", mostFrequentWord);
// let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
// let re = /\d+/g;
// let sum=0;
// console.log(text.match(re));
// for(let i =0;i<re.length;i++){
//     sum+=re[i];
// }
// console.log(re);
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text.match(/\d+/g);

let totalIncome = 0;

if (numbers !== null) {
  numbers.forEach(number => {
    totalIncome += parseInt(number);
  });
}

const annualIncome = totalIncome * 12;

console.log("Total Annual Income:", annualIncome, "euro");

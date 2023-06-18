// let str = "i love Js"
// let re = /js/gi
// console.log(re.test(str));
// console.log(str.match(re));
// console.log(str.search(re));
// const res = str.replace(re,'Javascript')
// console.log(res);
// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
// const pattern = /[Aa]pple| [Bb]anana/gi // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)

// // console.log(matches)  
// const txt = 'This regular expression example was made in January 12,  2020.'
// const p = /[g].+/g
// const r =txt.match(p);
// console.log(r);
// const pattern = /\d/g  // d is a special character which means digits
// const txt1 = 'This regular expression example was made in January 12,  2020.'
// const matches = txt1. match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']
// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const re = /[Ee]-?mail/g
// console.log(txt.match(re));
// const txt = 'This regular expression 56 4574 56875 example was made in December 6,  2019.'
// const pattern = /\b\w{4}\b | \d{5,}/g  //  exactly four character words
// const matches = txt.match(pattern)
// // console.log(matches)  //['This', 'made', '2019']
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/ // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This'],.jfgmjnfgm, -bbnlad9iyhvko/j.xb db dl/
let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern.test(name)

console.log(result) // true
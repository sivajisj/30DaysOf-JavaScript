// let sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// let pattern = /\d+/g;
// let income = sentence.match(pattern).map(x => parseFloat(x)).reduce((sum, x) => sum + x, 0);

// console.log(income);
// 2
// points = ['201', '2', '-4', '-3', '-10', '0', '4', '8']
// let numPattern = new RegExp(/\-?[0-9]+/,'g');
// // console.log(numPattern);
// let extractedPoints = points.map(x => parseFloat(x.match(numPattern))).sort((a,b) => a - b);
// let distance = Math.abs(extractedPoints[0] - extractedPoints[extractedPoints.length - 1]);
// console.log(extractedPoints);
// console.log(distance);

let is_valid_variable = (varName) => {
    let validVar = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
    return Boolean(varName.match(validVar));
 }

console.log(is_valid_variable('first_name'));



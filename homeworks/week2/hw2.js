//給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

function capitalize(str) {
 return str[0].toUpperCase() + str.slice(1)


}

console.log(capitalize('hello'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
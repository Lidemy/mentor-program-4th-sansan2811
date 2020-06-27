//join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
//repeat 的話就是回傳重複 n 次之後的字串。

function join(arr, concatStr) {
  var result = '';
  for(i=0; i < arr.length; i++){
      result +=  arr[i] + concatStr 
  }
  result = result.substring(0,result.length-1)


  return result;
}

function repeat(str, times) {
 var result='';
 for(i=0;i <= times;i++){
    result += str;
 }
  return result;
}

console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('a', 5));

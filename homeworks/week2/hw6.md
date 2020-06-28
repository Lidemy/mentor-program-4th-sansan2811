``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])


## 執行流程

1. 執行第十二行。呼叫 isValid 函式，輸入陣列 [3, 5, 8, 13, 22, 35]
2. 執行第二行，設定變數 i 是 0，檢查 i 是否小於 arr 長度，是，繼續執行，開始進入第一圈迴圈
3. 執行第三行，判斷 arr[i] 是否小於等於 0，是，回傳 'invalid'；否， 就繼續執行，進入第二個迴圈
4. 回到第二行，i++，i 變成 2，檢查 i 是否小於 arr 長度，是，繼續執行第三行
5. 重複 2 ~ 4 步驟，直到第六圈，檢查 i 是否小於 arr 長度，否，迴圈結束
6. 執行第六行，設定變數 i 是 2，檢查 i 是否小於 arr 長度，是，繼續執行，開始進入第一圈迴圈
7. 執行第七行，判斷 arr[i] 是否不等於 arr[i-1] + arr[i-2] ，否，回傳 'valid'，繼續執行，進入第二個迴圈
8. 回到第六行，i++，i 變成 3，檢查 i 是否小於 arr 長度，是，繼續執行第七行
9. 重複 6 ~ 8 步驟，直到第三圈，判斷 arr[4] 是否不等於 arr[4-1] + arr[4-2]，22 !== 13 + 8 ，是，回傳 'invalid'，迴圈結束
10. 結束程式


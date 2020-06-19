# 如何交作業

> 設定專案

[GitHub Classroom](https://github.com/Lidemy/mentor-program-4th-sansan2811)上點 Clone or Dowload 複製網址，再去  git-bash。

` git clone 網址`


> 不管怎樣先開 branch  

進入專案後，記得先切個 branch 出來，在新的 branch 在上面改動不是 master，寫完作業在合併回去。

`git checkout -b week1` 可以直接開新的 branch week1 並切過去

> 寫完作業後 

**注意 : 交作業之前要記得自我檢討**

1. `git status` 看有沒有改動到

2.  `git diff` 看改了什麼

3. `git commit -am “ week1 完成 ” ` 確認完成就 commit

4. `git push origin week1 ` 把本地端的 week1 推到遠端 github

5. 發一個`pull requests`，去學習系統的作業列表，新增作業，連結貼 pull requests 的連結

6. 等助教批改並 merge 後，自己到本地切到 master，然後`git pull origin master` 再把遠端跟本地的 master 同步

7.  `git branch -d week1 `把本地的 branch 刪掉

8. `git branch -v` 查看有沒有成功